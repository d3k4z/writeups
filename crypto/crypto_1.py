import base64

# 1. Set 1: HEX to Base64
# a = h2b64('49276d206b696c6c696e6720796f757220627261696e206c696b65206120706f69736f6e6f7573206d757368726f6f6d')

def h2b64(m): # Accepts string
    m = m.decode('HEX')
    m = base64.b64encode(m)
    return m

# 2. Set 1: Fixed XOR
# fixedXor('1c0111001f010100061a024b53535009181c','686974207468652062756c6c277320657965')

def fixedXor(m, t):
    m = int(m, 16)
    t = int(t, 16)
    return hex(m^t)

# 3. Set 1: Single-byte XOR cipher




