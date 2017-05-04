#!/usr/bin/env python

import angr

p = angr.Project('crackmes/crackme0x01')

# Tova sa 2 nachina za reshavane na zadachata
# 1. Posredstvom path_groups
pg = p.factory.path_group()
pg.explore(avoid=(0x08048434,), find=lambda p: "OK :)" in p.state.posix.dumps(1))
s = pg.found[0].state
print("1. Otgovor: %s" % s.posix.dumps(0))

# 2. Posredstvom surveyors
e = p.surveyors.Explorer(find=(0x08048442,), avoid=(0x08048434,))
e.run()
print("1. Otgovor: %s" % e._f.state.posix.dumps(0))
