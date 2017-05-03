from scapy.all import * 
import struct
import sys

session_count = 1

# kopirano ot server.py
def decode_b32(s):
    s = s.upper()
    for i in range(10):
        try:
            return base64.b32decode(s)
        except:
            s += b'='
    raise ValueError('Invalid base32')


def parse_payload(a):
    try:
        data = a.split('.')
        data = data[:data.index('eat-sleep-pwn-repeat')]
        data = decode_b32(''.join(data))
        (conn_id, seq, ack) = struct.unpack('<HHH', data[:6])
        return seq, data[6:]

    except:
        return None


def load_packets():
    p=rdpcap("exfil/dump.pcap")

    seq_q = [] # dns vaprosi
    seq_a = [] # dns otgovori

    # obrabotvame vseki paket
    for packet in p:
        if packet and packet.haslayer('UDP') and packet.haslayer('DNS'):
            if packet.an is None:
                try:
                    a = parse_payload(packet.qd.qname) 
                    if a != None:
                        seq_q.append(a)
                except:
                    pass
            else: 
                try:
                    a = parse_payload(packet.an.rdata) 
                    if a != None:
                        seq_a.append(a)
                except:
                    pass

    return seq_q , seq_a 

# tazi funciq maha dublikati i podrejda paketite
def fuck_udp(a):
    global session_count
    if len(i[1]) <= 0:
        return
    if i[0] > session_count:
        session_count = i[0]
        sys.stdout.write(i[1])
    else:
        return

# generirane na 2 lista s DNS query and DNS answers
q, a = load_packets()

# obrabotka na lista s DNS A
for i in a:
    fuck_udp(i)

# zanulqvame broqcha za sessite
session_count = 0

# obrabotka na lista s DNS Q
for i in q:
    fuck_udp(i)