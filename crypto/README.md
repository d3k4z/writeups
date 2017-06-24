# Crypto

## Crypto Challenge Set 1

> https://cryptopals.com/sets/1/

### Convert HEX to BASE64

Solution:

```
def h2b64(m): # Accepts string
    m = m.decode('HEX')
    m = base64.b64encode(m)
    return m
    
a = h2b64('49276d206b696c6c696e6720796f757220627261696e206c696b65206120706f69736f6e6f7573206d757368726f6f6d')
```

### Fixed XOR

Solution:
```
def fixedXor(m, t):
    m = int(m, 16)
    t = int(t, 16)
    return hex(m^t)

a = fixedXor('1c0111001f010100061a024b53535009181c','686974207468652062756c6c277320657965')
```

### Single-byte XOR cipher

