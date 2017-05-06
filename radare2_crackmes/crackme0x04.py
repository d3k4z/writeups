#!/usr/bin/env python

import angr

p = angr.Project('crackmes/crackme0x04')

e = p.surveyors.Explorer(avoid=(0x080484fb,), find=(0x080484dc,))
e.run()

print e._f.state.posix.dumps(1)
print e._f.state.posix.dumps(0)
