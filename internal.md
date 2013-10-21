---
layout: default
title: "Internal configuration"
---
# Internal configuration instructions

This page is for use by the core *Semantics and Pragmatics* team.
If you aren't responsible for the final or pre-final compilation of TeX,
you probably won't find this page very useful.


## Installing Lucida fonts on Mac OS X (Lion):

You should have access to an archive, `lucimatx.zip`, which will unzip into two folders in the current directory: `texmf/` and `templates/`. We only need the contents of `texmf/`.

    unzip lucimatx.zip
    sudo cp -Rf texmf/* /usr/local/texlive/texmf-local/
    sudo texhash
    sudo updmap-sys --enable Map lucida.map
    sudo texhash
    cd /usr/local/texlive/texmf-local/fonts/map/dvips
    sudo updmap-sys
    sudo texhash

Some of those `texhash` calls are probably redundant, but they don't hurt.

## On Ubuntu (12.04):

    unzip lucimatx.zip
    sudo cp -Rf texmf/* /usr/share/texmf-texlive
    # doc/ won't copy because /usr/share/texmf-texlive/doc is a symlink, so:
    cd texmf
    sudo cp -Rf doc/* /usr/share/texmf-texlive/doc

Some of the following might be optional, I didn't verify that each specific step is required:

    sudo texhash
    sudo updmap-sys --enable Map=lucida.map
    sudo texhash
    cd /usr/share/texmf-texlive/fonts/map/dvips
    sudo updmap-sys
    sudo texhash


## Implanting the S&P style

1. Use `kpsewhich -var-value=TEXMFHOME` to find out where your TeX distribution will look for user-space style files.

  * For me, on OS X (Mountain) Lion, this is `~/Library/texmf`
  * On my Ubuntu dist, it's `~/texmf`

2. Copy at least `sp.cls` and `sp.bst` into `~/texmf/tex/latex/local`
3. You might then have to run `texhash ~/texmf` (without sudo)
4. Check that texlive knows where to look (should return `/texmf/tex/latex/local/sp.cls`):

        kpsewhich sp.cls

---
Just got this error running `sudo updmap-sys` in /usr/share/texmf-texlive/fonts/map/dvips on markov:

updmap: using map file `/usr/share/texmf-texlive/fonts/map/dvips/lucida/lucida.map'

!!! WARNING: Identical copy of used file for `lucida.map'
    exists in obsolete location
      /usr/share/texmf-texlive/dvips/lucida/lucida.map
    Please, consider removing this file.

Not sure what, precisely, that means, but the trick was in adding this to a file in the folder, `/etc/texmf/updmap.d`, e.g., `99lucida.cfg`:

    Map lucida.map

Such that `cat /etc/texmf/updmap.d/99lucida.cfg` would return, simply, `Map lucida.map`.

mktexpk: don't know how to create bitmap font for hlhr8r.
