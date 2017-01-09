from scapy.all import *
import base64

packets = rdpcap('exfil/dump.pcap')

data = ""

def my_disect(packet):
    p = packet.payload
    data += p

print(packets) 
c=0
for i in packets:
    if i["DNS"]:
        my_disect(i)


print "Total: " , packets , "packets." 


print DATA
#with open("output.bin", "") as f:


# print dir(packets.read_all())
# for i in packets.read_all():
#     print i

# for i in packets:
#     #print i i.summary()
#     print i