import binascii

def flag():
        a = 5955
        b = 4249
        c = 5453
        d = 4543
        f = 7
        e = 'b4641524557454C4C5F42414C4C41447D'
        flg = str(a) + str(b) + str(c) + str(d) + str(f) + e
        return binascii.unhexlify(flg)
print(flag())