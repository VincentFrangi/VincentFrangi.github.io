---
layout: post
title: Make your beautiful invoice with LaTex
featured-img: lake
categories: [LaTex, Guides]
---

Create beautiful invoices with LaTex and [dapper template](https://github.com/mkropat/dapper-invoice)

![](https://camo.githubusercontent.com/9ede2f444a5e0bce5e134f3051b85bbce30e66c2/687474703a2f2f692e696d6775722e636f6d2f7137386a7447752e706e67)

## Requirement

* Texlive
    ```bash
    yay -S texlive-most
    ```
* Text editor (vscode)

Template: [dapper-invoice](https://github.com/mkropat/dapper-invoice)

1. Fork the template is you want to make modifications
2. Clone your fork on your computer :

   ```bash
   git clone https://github.com/VincentFrangi/dapper-invoice
   ```

3. Compile the example
   
   ```bash
   cd dapper-invoice
   make
   evince example.pdf # Open the example
   make clean # Clean output files
   ```

## Create your invoice

1. Create your invoice
   
   ```bash
   cp example.tex invoice-1.tex
   ```

2. Modify the makefile
    
    Change ```REPORT = example``` with ```REPORT = invoice-1```

3. Edit your invoice
    
    ```bash
    code invoice-1.tex
    ```
4. Build your PDF

    ```bash
    make
    ```

5. Check your PDF

    ```bash
    evince invoice-1.pdf
    ```

6. Clean files

    ```bash
    make clean
    ```

> I suggest to not push your invoices on your public repository
> Keep the .tex and PDF files somewhere safe
