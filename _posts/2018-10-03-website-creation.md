---
layout: post
title: Website creation
featured-img: web_workflow
---

# Website creation

The purpose of this little website is to post about the project I am working on.
Maybe someone will found useful information or maybe will be interested in collaboration.

## How this website is made

One of the idea behind this website is also to learn about web development:
as an embedded engineer it is my first experience on this domain.

To build this website I looked for a beginner tool.
After some research found [Jekyll](https://jekyllrb.com/),
ideal to create blog or project website with **markdown**.

In addition, there is plenty of available theme to  your site.
The awesome theme I am using here is called [Sleek](https://github.com/janczizikow/sleek)

A really nice way to host the website is to use [GitHub Page](https://pages.github.com/). It is free and support Jekyll theme.


## Workflow

Jekyll, Github Pages and Sleek have a very nice documentation so here I will just tell you my way to organize my git.

![Workflow](https://github.com/VincentFrangi/VincentFrangi.github.io/blob/master/_img/posts/web_workflow.svg)

### Create your website repository

First of all I have create a repository for work my website on my github account (see: [GitHub Page](https://pages.github.com/))

> The repository must be named **username.github.io** in my case :
> VincentFrangi.github.io


### Clone you the repository of your theme and add your remote

```bash
git clone https://github.com/janczizikow/sleek.git
git remote add deploy https://github.com/username/username.github.io
```

> You can also add the theme on your existing website using *gem* (see : [Sleek/README.md](https://github.com/janczizikow/sleek/blob/master/README.md))

> To update sleek theme pull from origin

> To update your website push on deploy

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

