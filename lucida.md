---
layout: default
title: "Lucida installation"
---

## Installing Lucida fonts

You should have access to an archive, `lucimatx.zip`, which will unzip into two folders in the current directory: `texmf/` and `templates/`. We only need the contents of `texmf/`.

If you get the following error message when trying to use a Lucida font, your Lucida install is only partially installed.

> mktexpk: don't know how to create bitmap font for hlhr8r.


### On Mac OS X (Lion):

    unzip lucimatx.zip
    cp -R texmf/* /usr/local/texlive/texmf-local/
    sudo texhash
    sudo updmap-sys --enable Map lucida.map
    sudo texhash
    cd /usr/local/texlive/texmf-local/fonts/map/dvips
    sudo updmap-sys
    sudo texhash

Some of those `texhash` calls are probably redundant, but they don't hurt.


### On Ubuntu (12.04):

1. Put the Lucida files in the right place:

        unzip lucimatx.zip
        sudo cp -Rf texmf/* /usr/share/texmf-texlive
        # doc/ won't copy because /usr/share/texmf-texlive/doc is a symlink, so:
        cd texmf
        sudo cp -Rf doc/* /usr/share/texmf-texlive/doc

2. Add the `lucida.map` name to the updmap config sequence:

        echo 'Map lucida.map' > /etc/texmf/updmap.d/99lucida.cfg

3. Configure latex install to recognize these new files

        sudo texhash
        cd /usr/share/texmf-texlive/fonts/map/dvips
        sudo updmap-sys
        sudo texhash


## Installing the S&P styles

1. Use `kpsewhich -var-value=TEXMFHOME` to find out where your TeX distribution will look for user-space style files.
  Call this `$TEXMF`.

  * For me, on OS X (Mountain) Lion, this is `~/Library/texmf`
  * On my Ubuntu dist, it's `~/texmf`

2. Copy the following files into `$TEXMF/tex/latex/local`:

  * `sp.cls`
  * `sp.bst`
  * `sp-biblatex.bbx`
  * `sp-authoryear-comp.cbx`
  * `sp-hyperxmp.sty`

3. You might then have to run `texhash $TEXMF` (without sudo)
4. Check that texlive knows to look where you just put the files:

        kpsewhich sp.cls

    > /texmf/tex/latex/local/sp.cls


## Troubleshooting

The following error may crop up when running `sudo updmap-sys` in `/usr/share/texmf-texlive/fonts/map/dvips` on Ubuntu.
As far as I can tell, it's harmless.

    updmap: using map file `/usr/share/texmf-texlive/fonts/map/dvips/lucida/lucida.map'

    !!! WARNING: Identical copy of used file for `lucida.map'
       exists in obsolete location
         /usr/share/texmf-texlive/dvips/lucida/lucida.map
       Please, consider removing this file.

On Mac OS X, Lucida font installation problems generally produce something like the following error message:

    kpathsea: Running mktexpk --mfmode / --bdpi 600 --mag 2+44/600 --dpi 1244 hlhr8r
    mktexpk: don't know how to create bitmap font for hlhr8r.
    mktexpk: perhaps hlhr8r is missing from the map file.
    kpathsea: Appending font creation commands to missfont.log.
    (see the transcript file for additional information)
    !pdfTeX error: pdflatex (file hlhr8r): Font hlhr8r at 1244 not found
