import time

from sgd import SGD
from zfin import ZFIN
from worm import WormBase
from fly import FlyBase
from mouse import MGI
from rat import RGD

from mod import MOD

sgd = SGD()
zfin = ZFIN()
worm = WormBase()
fly = FlyBase()
mouse = MGI()
rat = RGD()

mod = MOD()

mods = [mouse, zfin, sgd, worm, fly, rat]

mod.load_genes()
mod.load_homologs()

for m in mods:
    start_time = time.time()
    m.load_go()
    print (" --- %s seconds --- " % (time.time() - start_time))

for m in mods:
    start_time = time.time()
    m.load_diseases()
    print (" --- %s seconds --- " % (time.time() - start_time))

mod.save_into_file()