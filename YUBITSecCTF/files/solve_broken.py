#! /usr/bin/env python2.6
## pngcheck - Programm for checking png sections and gives fix advises
## See licence
## (c) 2010 Jaco A. Hofmann

from zlib import crc32
from sys import argv

import struct

PNGMagic = (0x89, "PNG", 0x0D, 0x0A, 0x1A, 0x0A)

def fixIDATLength(filestring, position, output):
    seek = True
    position += 8 # Don't need Chunkname
    i = position
    length = -1
    while seek:
        s, = struct.unpack(">4s", filestring[i:i+4])
        if s == "IDAT" or s == "IEND":
            length = (i-8)-position
            seek = False
        i += 4
        
    if length == -1:
        return False
    position -= 8
    filestring = struct.pack(">B3sBBBB", *PNGMagic) + filestring[:position] + struct.pack(">I", length) + filestring[position+4:]
    with open(output, "wb") as f:
        f.write(filestring)
        f.close()
    return True

def getSections(filestring):
    parse = True
    i = 0
    retVal = []
    while parse:
        length, name = struct.unpack(">I4s", filestring[i:i+8])
        data = filestring[i+8:i+8+length]
        try:
            (crc,)  = struct.unpack("I", filestring[i+8+length:i+12+length])
        except:
            print "Too long length in Chunk {0}. Trying to fix.".format(name)
            if fixIDATLength(filestring, retVal[-1][0], argv[2]):
                print "Fix successfull try {0}".format(argv[2])
            else:
                print "Couldn't fix length problem."
            return
        retVal.append((i, length, name, data, crc))
        i = i+length+12
        if i > len(filestring):
            parse = False


def parsePNG(filename):
    with open(filename, "rb") as f:
        s = f.read()
        f.close()
        
        l = getSections(s[8:])

def main():
    parsePNG(argv[1])

if __name__ == "__main__":
    main()