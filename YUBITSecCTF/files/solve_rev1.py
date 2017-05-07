import angr
import simuvex

def crackit():
    p = angr.Project('rev2',load_options={'auto_load_libs': False})
    t = p.factory.full_init_state(args=['./rev2 '], add_options=simuvex.o.unicorn)
    state = p.factory.entry_state(add_options=simuvex.o.unicorn)
    pg = p.factory.path_group(state)
    pg.explore(find=lambda p: "Great" in state.posix.dumps(1), avoid=(0x400983,0x4009af,))
    pg.run()

crackit()
    
#e = p.surveyors.Explorer(find=(0x400a65,), avoid=(0x400983,0x4009af,0x400a2c, 0x400a65))
