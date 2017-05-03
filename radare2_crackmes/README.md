# Случайни crackmes

Тези **crackmes** които ще решаваме са за да научим повече относно reverse engineering и като допълнение ще се опитам да разясня различни тулове за дебъгване и анализ.
Ще се опитам да реша всекa една от тези задачи посредством 'най-модерния'(защото сме модерни) terminal debugger - [radare2](https://github.com/radare/radare2) (RIP gdb). Ако всичко върви добре ще се опитам да разясня също така една от най-новите методи за решаване на такива задачи, а именно [Symbolic Execution](https://en.wikipedia.org/wiki/Symbolic_execution).


> Не че SymbolicExecution е нещо задължително ново, но в началото на 2017 отбори като **TrailOfBits** и **Shellphish** произведоха open-source тулове за решаване на такива проблеми. Това са [angr](https://github.com/angr/angr) и [manticore](https://github.com/trailofbits/manticore)



**<ОЧАКВАЙТЕ ПЪЛНАТА ВЕРСИЯ НА ТОЗИ WRITEUP НЕ ПО РАНО ОТ МЕСЕЦ :) ВСЕ ПАК РАБОТЯ>**

## crackme0x00

Ок, започваме с бърза загрявка. Първо да получим повече информация относно целта ни:

```bash
d3k4@d3k4-XPS:~/Documents/writeups/radare2_crackmes/crackmes$ ./crackme0x00
IOLI Crackme Level 0x00
Password: asdkasldkajsd
Invalid Password!
```
Нищо нестандартно, трябва да разбием паролата за да получим флага(btw: това е целта на всички файлове в директорията `crackmes/`).

Не занравяйте най добрия приятел на хакера - `strings` (търси printable characters в посочен файл). **Strings** някой недостатъци, който обаче липсват в **rabin2**(това е tool от budle-a на radare2).

И ето демострация на магията:

```
d3k4@d3k4-XPS:~/Documents/writeups/radare2_crackmes/crackmes$ rabin2 -z crackme0x00
vaddr=0x08048568 paddr=0x00000568 ordinal=000 sz=25 len=24 section=.rodata type=ascii string=IOLI Crackme Level 0x00\n
vaddr=0x08048581 paddr=0x00000581 ordinal=001 sz=11 len=10 section=.rodata type=ascii string=Password:
vaddr=0x0804858f paddr=0x0000058f ordinal=002 sz=7 len=6 section=.rodata type=ascii string=250382
vaddr=0x08048596 paddr=0x00000596 ordinal=003 sz=19 len=18 section=.rodata type=ascii string=Invalid Password!\n
vaddr=0x080485a9 paddr=0x000005a9 ordinal=004 sz=16 len=15 section=.rodata type=ascii string=Password OK :)\n
```
Ако сте отворили файла с radare2, командата която ви трябва е `iz`.

```
[0xf771aac0]> iz
vaddr=0x08048568 paddr=0x00000568 ordinal=000 sz=25 len=24 section=.rodata type=ascii string=IOLI Crackme Level 0x00\n
vaddr=0x08048581 paddr=0x00000581 ordinal=001 sz=11 len=10 section=.rodata type=ascii string=Password: 
vaddr=0x0804858f paddr=0x0000058f ordinal=002 sz=7 len=6 section=.rodata type=ascii string=250382
vaddr=0x08048596 paddr=0x00000596 ordinal=003 sz=19 len=18 section=.rodata type=ascii string=Invalid Password!\n
vaddr=0x080485a9 paddr=0x000005a9 ordinal=004 sz=16 len=15 section=.rodata type=ascii string=Password OK :)\n
```

Това е списъка с printable characters намиращи се в паметта на приложението(както виждате има и допълнителна информация относно vaddr, section, paddr, len, ...).

Единия от тези printable strings изглежда съмнителен и затова ще го използваме за да разберем дали е отговор на задачата:

```
d3k4@d3k4-XPS:~/Documents/writeups/radare2_crackmes/crackmes$ echo "250382" | ./crackme0x00
IOLI Crackme Level 0x00
Password: Password OK :)
```

## crackme0x01

Следващата задача е от същия тип:

```
d3k4@d3k4-XPS:~/Documents/writeups/radare2_crackmes/crackmes$ ./crackme0x01
IOLI Crackme Level 0x01
Password: sadasdasdaasd
Invalid Password!
```

Тук не ни помага подхода от предната задача. 

```
d3k4@d3k4-XPS:~/Documents/writeups/radare2_crackmes/crackmes$ rabin2 -z crackme0x01
vaddr=0x08048528 paddr=0x00000528 ordinal=000 sz=25 len=24 section=.rodata type=ascii string=IOLI Crackme Level 0x01\n
vaddr=0x08048541 paddr=0x00000541 ordinal=001 sz=11 len=10 section=.rodata type=ascii string=Password:
vaddr=0x0804854f paddr=0x0000054f ordinal=002 sz=19 len=18 section=.rodata type=ascii string=Invalid Password!\n
vaddr=0x08048562 paddr=0x00000562 ordinal=003 sz=16 len=15 section=.rodata type=ascii string=Password OK :)\n
```

Отваряме файла посредством `r2 -d ./crackme0x01`. След като заредите  
