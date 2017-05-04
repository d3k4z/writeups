#!/usr/bin/env python

import angr

p = angr.Project('crackmes/crackme0x03')

pg = p.factory.path_group()
pg.explore(avoid=(0x804847c,), find=(0x804848a,))
s = pg.found[0].state
print("Otgovor: %s" % s.posix.dumps(0))
