---
layout: default
title: "Internal configuration"
---
# Internal configuration instructions

This page is for use by the core *Semantics and Pragmatics* team.
If you aren't responsible for the final or pre-final compilation of TeX,
you won't find this page very useful.

## Installing Lucida fonts on Lion:

You should access to an archive, `lucimatx.zip`.

    unzip lucimatx.zip
    sudo cp -pRf texmf/* /usr/local/texlive/texmf-local/
    sudo texhash
    sudo updmap-sys --enable Map lucida.map
    sudo texhash
    cd /usr/local/texlive/texmf-local/fonts/map/dvips
    sudo updmap-sys
    sudo texhash
