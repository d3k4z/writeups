#!/usr/bin/env python

import angr

p = angr.Project('crackmes/crackme0x04')

e = p.surveyors.Explorer(avoid=(0x80484f4, 0x80484fb,), find=(0x80484a8,))
e.run()

e._f.state.posix.dumps(0)