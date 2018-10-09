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

* [RetroPie](https://retropie.org.uk/forum/)
  * Most popular solution
  * Have a nice support
  * High level of settings
  * Rasbian based
* [RecalBox](https://www.recalbox.com/)
  * Easy to set up
  * Come with preinstalled games
  
 Both image can be download and flash using [etcher](https://etcher.io/).
 
 > **Note**: RetroPie can be also installed on top of an existing Raspbian
 
 ### Recalbox
 
 I have dicided to start by trying Recalbox, well because... I have to start somewhere.
 After buying a brand new 64go sd card, I flashed the 18.07.13 / Raspberry 3 version. 
 The spend my morning figuring out why it was not booting, trying with different sd cards,
 copying the image using ```dd```, then I just randomly read that the Raspberry **Pi 3b+ is not supported yet**...
