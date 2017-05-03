import zlib


# COMPRESSED DD 03 BA 19
# UNCompressed 08 B8 00 02

OFFSET = 0xd9a
DSIZE   = 0x200B808
SIZE  = 0x19BA03DD

d = open("ABF_edited.zlib", "rb").read()[OFFSET:OFFSET+SIZE]
 
for m in [ "\x78\x5E", "\x78\x01", "\x78\x9C", "\x78\xDA" ]:
  #try:
    o = zlib.decompressobj().decompress(m + d, DSIZE)
    open("out.%.2x%.2x" % (ord(m[0]), ord(m[1])), "wb").write(o)
#   except:
#     pass