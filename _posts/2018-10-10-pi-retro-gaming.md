---
layout: post
title: Amazing Raspberry retro-gaming machine
featured-img: capeman-retrochars-crt
categories: [Raspberry, Guides]
---

You can easily transform your Raspberry Pi into an awesome little retro-gaming machine.

It supports up to 50 consoles! Such as:

* Nitendo 64
* Game boy
* Atari 2600
* Playstation 1 and 2
* Master System

You can found the full list [here](https://retropie.org.uk/about/systems)

This post relate my experience building a gaming console and it is a complement of the officials documentation. I Hope  it will be useful for you!

# Material

* Rasberry Pi (3b+ for me)
  * A heatsink is a really good idea
* Large SD card > 8go to store your games
* Raspberry power supply is recommanded
* [Nice retro-gaming case](http://retroflag.com/) (optional)
  * Ventilation fan (30mm x 30mm x 7mm) silent as possible
* Controller
  * USB snes
  * XBOX
  * PS3
* USB keyboard for configuration

![RetroFlag](http://retroflag.com/images/sfc/sfc1.jpg)

# Distributions

There is tree major solution to turn your Raspberry Pi into a multi-consol retro-gaming station:

* [RecalBox](https://www.recalbox.com/)
  * Easy to set up
  * Come with preinstalled games
* [RetroPie](https://retropie.org.uk/forum/)
  * Most popular solution
  * Have a nice support
  * High level of settings
  * Raspbian based
* [Lakka](http://www.lakka.tv/)
  * light way
  
Theses image can be easily download and flash using [etcher](https://etcher.io/).
 
> **Note**: RetroPie can be also installed on top of an existing Raspbian 
> https://retropie.org.uk/docs/Manual-Installation/

I have test RecalBox and RetroPie, but sadly not Lakka for the moment, here is my feedback.

# Recalbox
 
I have decided to start by trying Recalbox, well because... I have to start somewhere.
After buying a brand new 64go sd card, I flashed the ```18.07.13 / Raspberry 3``` version. 

Then spend my morning figuring out why it was not booting, trying with different sd cards,
copying the image using ```dd```, then I just randomly read that the Raspberry **Pi 3b+ is not supported yet**...

So I tried with the [dev release](https://forum.recalbox.com/topic/15010/testers-wanted-major-system-upgrade-pi3b-kodi-17-and-much-more),
it boot well but I wasn't able to launch games... (tester release...)
Finally, I tried back the stable version with my good old RPi 3b, and I was able to play the preinstalled games.
 
## Issues encountered
 
* RPi 3b+ not supported yet (and take me a long time to find the issue)
* [Wiki](https://github.com/recalbox/recalbox-os/wiki/Installation-%28EN%29) not really update
 
## Conclusion

Even with the lot of time I waste due to bad documentation,
It is a really beautiful system and I am waiting for the RPI 3b+ support.

# RetroPie

Not really happy of trying to make Recalbox work on my Rasberry 3b+, I moved to RetroPie following the well made [documentation](https://retropie.org.uk/docs/First-Installation/) for the installation:

* Here is the download link for [Raspberry 2/3 image](https://github.com/RetroPie/RetroPie-Setup/releases/download/4.4/retropie-4.4-rpi2_rpi3.img.gz).

![RetroPie](https://retropie.org.uk/wp-content/uploads/2016/04/RetroPieWebsiteLogo.png)

## Controller

On the first boot you have to setup the controller and my *SNES Controller* is seen as *Xbox Controller*, but it seem to be not a problem because you can skip buttons you don't have.

The hotkey is use on shortcut to interact with the emulator,
it allow to some extra feature as saving at anymoment.
I recommand to set ```select``` as ```Hotkeys```.

**Emulator shortcuts**:

| Hotkeys               | Action                    |
| --------------------- | ------------------------- |
| Select+Start          | Exit                      |
| Select+Right Shoulder | Save                      |
| Select+Left Shoulder  | Load                      |
| Select+Right          | Input State Slot Increase |
| Select+Left           | Input State Slot Decrease |
| Select+X              | RGUI Menu                 |
| Select+B              | Reset                     |

**Set extra controller**

When you plug a new controller you have to set it:

1. Open menu with ```start```
2. Configure input

> **Note**: If the start button is not working you can follow to procedure
> on issue chapter, to clear the input configuration.

## Install emulators

Emulators are available as packages, to install them:

1. Set up internet connection (wifi or LAN)
2. Install basic package
  
  ```
  Configuration > RetroPie setup > Basic install
  ```

3. Additional emulator can be found in :
  
  ```
  RetroPie setup > Manage packages
  ```

## Install ROM

The ROMs aka games are not provided with RetroPie.
The can be found on internet.

**Add ROM**

1. Download the game form internet
2. Decompress the files
3. Add the files to the folder corresponding to the console
  
  ```
  /roms/<console>/
  ```

4. Reboot for update the game list
5. ```Scrape``` to add a description and a picture of the game in the menu
  
  ```
  start > scraper > scrape now > start
  ```

> **Note**: some games require a BIOS  (see: issues bellow)

## Keyboard settings

To change the keyboard settings:

**F4** to enter in terminal

```
sudo raspi-config
Localisation Option > Change Keyboard Layout > Choose Generic 101-key PC
```
> **Note**: If you have swiss french keyboard as me choose ```German (Switzerland)``` then you can select ```French version```


[source](https://thepihut.com/blogs/raspberry-pi-tutorials/25556740-changing-the-raspberry-pi-keyboard-layout)

## Troubleshooting

### Boot in terminal after upgrade

After upgrading the system, it was booting in the terminal:

* Login: **pi**
* Password: **raspberry**

```bash
sudo ./RetroPie-Setup/retropie_setup.sh
```

then go to:

```bash
Configuration / tools > Splashscren - Configure Splashscreen
```

set Enable splashscreen on boot to **disabled**

[source](https://retropie.org.uk/forum/topic/2902/first-boot-up-of-retropie-comes-up-with-a-command-line/21)

Now, RetroPi launch if you login in the terminal to firectly boot in RetroPie:

```bash
RetroPie setting > Raspi-config > set  Boot Options to terminal without login
```

### Reconfigure controller

Now if the ```start``` and ```select``` buttons are not working,
got to:

```bash
Configuration / Tools > emulationstation > Clear/Reset Emulation Station input configuration
```

Then you will have to configure the controller at next boot.
 
[source](https://retropie.org.uk/forum/topic/5069/resetting-controller-configuration/2)

### Supertux game not launching
 
> **Reason**: It require a desktop
 
### Some Playstation game crash
 
Some Playstation games like *Crash Team Racing* crash because they require a **BIOS** file : 
 
* Copy SCPH1001.BIN to /home/pi/RetroPie/BIOS
 
[source](http://www.netfox2.net/modules/wfdownloads/singlefile.php?cid=11&lid=67)
 
# Safe shutdown with RetroFlag picase

The [RetroFlag script](https://github.com/RetroFlag/retroflag-picase)
provide a safe shutdown functionality:  

1. Close emulator
2. Wait 3s
3. Shutdown

## Install

For RetroPie

* Connect to the internet
* Enter in terminal **F4**

```
wget -O - "https://raw.githubusercontent.com/RetroFlag/retroflag-picase/master/install.sh" | sudo bash
````
