---
layout: post
title: Raspberry Pi retro gaming
featured-img: snow
categories: [Raspberry, Guides]
---

## Material

* Rasberry Pi (3b+ for me)
* Large SD card > 8 go
* Power supply
* [Nice retrogaming case](http://retroflag.com/)
* Controller
  * USB snes
  * XBOX
  * PS3
* USB keyboard

## Distributions

There is two major solution to turn your Raspberry Pi into a multi-sonsole retrogaming station:

* [RecalBox](https://www.recalbox.com/)
  * Easy to set up
  * Come with preinstalled games
* [RetroPie](https://retropie.org.uk/forum/)
  * Most popular solution
  * Have a nice support
  * High level of settings
  * Rasbian based

  
Both image can be download and flash using [etcher](https://etcher.io/).
 
> **Note**: RetroPie can be also installed on top of an existing Raspbian 
> https://retropie.org.uk/docs/Manual-Installation/
 
## Recalbox
 
I have dicided to start by trying Recalbox, well because... I have to start somewhere.
After buying a brand new 64go sd card, I flashed the 18.07.13 / Raspberry 3 version. 
Then spend my morning figuring out why it was not booting, trying with different sd cards,
copying the image using ```dd```, then I just randomly read that the Raspberry **Pi 3b+ is not supported yet**...
So I tryed with the [dev release](https://forum.recalbox.com/topic/15010/testers-wanted-major-system-upgrade-pi3b-kodi-17-and-much-more),
it boot well but I wasn't able to lauch games... (tester release...)
Finally, I tryed back the stable version with my good old RPi 3b, and I was able to play the preinstalled games.
 
### Issues encoured
 
* RPi 3b+ not supported yet (and take me a long time to find the issue)
* [Wiki](https://github.com/recalbox/recalbox-os/wiki/Installation-%28EN%29) not really update
 
### Note

Even with the lot of time I waste due to bad documetation,
It is a really beautiful system and I am waiting for the RPI 3b+ support.
 
I would note RecalBox with :turtle: :turtle: :turtle:
 
 
## RetroPie
 
I have install RetroPie following the well [made documentation](https://retropie.org.uk/docs/First-Installation/)

On the first boot you have to setup the controller and my *SNES Controller* is seen as *Xbox Controller*
but it seem to be not a problem because you can skip buttons you don't have.

>I recommand to set ```select``` as ```Hotkeys```

|Hotkeys| 	Action|
|-------|--------|
|Select+Start| 	Exit|
|Select+Right Shoulder| 	Save|
|Select+Left Shoulder| 	Load|
|Select+Right| 	Input State Slot Increase|
|Select+Left| 	Input State Slot Decrease|
|Select+X |	RGUI Menu|
|Select+B| 	Reset|

### Install emulators

1) Set up internet connection (wifi or LAN)
2) Install base packages

### Install ROM

1) Download
2) Decompress
3) Add to the righ folder
4) Reboot
5) ```start > scraper > scraper now````

### Issues

#### Bot in terminal after upgrade

After upgrading the system, it was booting in the terminal:

* Login: **pi**
* Password: **raspberry**

```
sudo ./RetroPie-Setup/retropie_setup.sh
```

then go to ```Configuration / tools -> splashscreen``` 
and set Enable splashscreen on boot to **disabled**

https://retropie.org.uk/forum/topic/2902/first-boot-up-of-retropie-comes-up-with-a-command-line/21

 now you should lauch RetroPi as soon as you login in the terminal
 to avoid this go to ```RetroPie setting > Raspi-config > set  Boot Options to terminal without login```
 
 #### Reconfigure controller
 
 Now if the ```start``` and ```select``` buttons are not working,
 got to ```Configuration / Tools -> emulationstation -> Clear/Reset Emulation Station input configuration```
 the you will have to configure the controller at next boot.
 
 https://retropie.org.uk/forum/topic/5069/resetting-controller-configuration/2

 #### Supertux game not launching
 
 > it require a desktop
 
 #### Some Playstation game crash
 
 as Crash Team Racing 
 
 Install BIOS
 
 copy SCPH1001.BIN to /home/pi/RetroPie/BIOS
 
 http://www.netfox2.net/modules/wfdownloads/singlefile.php?cid=11&lid=67
 
