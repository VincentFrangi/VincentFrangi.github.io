---
layout: post
title: Export JPEG with Inkscape
featured-img: snow
categories: [Guides]
---


# Export JPEG with Inkscape

Inkscape cannot natively export to JPEG,
it require an extension for exemple:

[This one](https://github.com/giacmir/Inkscape-JPEG-export-extension)



## Install

Copy ```jpegexport.inx``` and ```jpegexport.inx``` in ```~/.config/inkscape/extensions```

### Dependencies

* ImageMagick
* python2-lxml

### Usage

Extensions menu > Export > JPEG Export

## Bonus

Convert ```.svg``` to ```.ico``` with ImageMagick

```bash
convert -density 384 icon.svg -define icon:auto-resize icon.ico
```

#### Verify

```bash
identify icon.ico
```

#### Source

[stackexchange](https://graphicdesign.stackexchange.com/questions/77359/how-to-convert-a-square-svg-to-all-size-ico)