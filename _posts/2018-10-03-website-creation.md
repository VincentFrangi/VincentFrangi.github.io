---
layout: post
title: Website creation
featured-img: web_workflow
categories: [Web, Guides]
---

# Website creation

The purpose of this little website is to post about the projects I am working on.
Maybe someone will found useful information or will be interested in collaboration.

## How this website is made

One of the idea behind this website is also to learn about web development:
as an embedded engineer it is my first experience on this domain.

To build this website I looked for a beginner tool, easy to handle.
After some research, I have found [Jekyll](https://jekyllrb.com/),
which is ideal to create blog or project website with **markdown**.
The syntax of markdown can be learn in 3 minutes and I use it all the time.

![Jekyll](https://jekyllrb.com/img/logo-2x.png)

In addition, there is plenty of available theme to  your site.
The awesome theme I am using here is called [Sleek](https://github.com/janczizikow/sleek).

A really nice way to host the website is to use [GitHub Page](https://pages.github.com/). It is free and support Jekyll theme.


## Workflow

Jekyll, Github Pages and Sleek have a very nice documentation so here I will just tell you my way to organize my git.

I pull form the *Sleek* repository for update and I push my post on my *Github Page* where the site is hosted.

![Workflow](https://raw.githubusercontent.com/VincentFrangi/VincentFrangi.github.io/master/ressources/posts/2018-10-03-website-creation/web_workflow.png "Workflow")

### Create your website repository

First of all I have create a repository for work my website on my github account (see: [GitHub Page](https://pages.github.com/))

> **Note**: The repository must be named **username.github.io** to use hosting functionalities
> in my case :
> VincentFrangi.github.io

### Clone you the repository of your theme and add your remote

```bash
git clone https://github.com/janczizikow/sleek.git
git remote add deploy https://github.com/username/username.github.io
```

> To update sleek theme pull from origin

> To update your website push on deploy


> **Note** You can also add the theme on your existing website using *gem* (see : [Sleek/README.md](https://github.com/janczizikow/sleek/blob/master/README.md))



### Install the system requirements

* jekyll
* NodeJS >= 8
* gulp-cli (optional)
  
#### Install theme

```bash
bundle install
npm install
```

### Launch local

```bash
jekyll server # do jerkyll build
```

or


```bash
gulp # do jerkyll build
```

> **Note**: If you work on the .css use gulp because jekyll build don't update "_site/assets/css/main.css"

> **Note**: gulp has still issues with images

> **Note**: gulp require empty baseurl (see: [issue #40](https://github.com/janczizikow/sleek/issues/40#issuecomment-406823127))

### Clean

```bash
jekyll clean
```

## Links

* You can find the source code of this website at:
[github](https://github.com/VincentFrangi/VincentFrangi.github.io)

* You can find the source code for Jekyll at:
[github](https://github.com/jekyll/jekyll)

* Source code of Sleek Jekyll theme:
[github](https://github.com/janczizikow/sleek).


