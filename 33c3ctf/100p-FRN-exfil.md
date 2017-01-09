# **exfil** - 100 точки
**33c3ctf/forensic**

Solves: **140** 
> We hired somebody to gather intelligence on an enemy party. But apparently they managed to lose the secret document they extracted. They just sent us [this](https://archive.aachen.ccc.de/33c3ctf.ccc.ac/uploads/exfil-e5e0066760f0dd16e38abc0003aec40f39f9adf9.tar.xz) and said we should be able to recover everything we need from it. Can you help?

![](files/traffic.png)

След като изтеглим файла, виждаме че в него има прихванат **мрежов трафик** и **python скрипт**. Преглеждайки трафика виждаме че е прихваната комуникацията между **клиент(192.168.0.121)** и **сървър(192.168.0.1)**. Python скрипта представлява DNS сървър за криптирана комуникацията с клиента.
Целта ни е да декриптираме трафика и да извлечем тайните от него.

Темите който ще засегнем:
* Мрежи
* Протоколи
* Криптография

Допълнително:
* python/scapy

За да направим това трябва да можем да направим дисекция на DNS комуникацията. В трафика намира DNS Queries и DNS Answer пакети. 

Една малка демонстрация колко е лесно e да се борави с прихванати посредством Python библиотеката Scapy. Това представлява DNS пакета зареден в python terminal:

[![asciicast](https://asciinema.org/a/98619.png)](https://asciinema.org/a/98619?speed=2)


Ако се вгледаме внимателно ще забележим че инф