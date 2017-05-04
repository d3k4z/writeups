#!/usr/bin/env python

import angr

p = angr.Project('crackmes/crackme0x02')

pg = p.factory.path_group()
pg.explore(avoid=(0x8048461,), find=lambda p: "OK :)" in p.state.posix.dumps(1))
s = pg.found[0].state
print("Otgovor: %s" % s.posix.dumps(0))
