# -*- coding: utf-8 -*-
"""
Spyder Editor

This is a temporary script file.
"""

import json
import base64

with open('strings_json.json') as json_data:
    d = json.load(json_data)

for i in d:
    try:
        z = base64.b64decode(i['string'])
        print i['vaddr'], z
    except:
        pass
    