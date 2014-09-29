---
layout: default
title: "Lucida installation"
---

## Installing Lucida fonts

If you get the following error message (among others) when trying to use a Lucida font, Lucida is incorrectly installed or maybe not installed at all.

    mktexpk: don't know how to create bitmap font for hlhr8r.

You may also get the following error message if you upgraded your TeX distribution, but haven't reinstalled Lucida:

    Non-PDF special ignored!
    {/usr/local/texlive/2014/texmf-var/fonts/map/pdftex/updmap/pdftex.map}
    ! pdfTeX error (font expansion): auto expansion is only possible with
    scalable fonts.
    \AtBegShi@Output ...ipout \box \AtBeginShipoutBox
                                                      \fi \fi
    l.50
    !  ==> Fatal error occurred, no output PDF file produced!

Same installation process applies in both cases.


### On Mac OS X (Lion / Mavericks)

1. The Lucida font files will be installed to `/usr/local`, so you want ownership
of that directory. (This might seem crazy, but it's totally reasonable if
you're the primary user of your computer, and makes development much less painful.)
  ```bash
  sudo chown -R $USER /usr/local
  ```
2. The Lucida font resides in `bitbucket.org:fintelkai/sp-repo.git` under the
`sp-fonts/texmf/` directory. To install it, merge the contents of `sp-fonts/texmf/`
into your machine's local TeX distribution:
  ```bash
  cd ~/src/sp-repo/sp-fonts/                    # change as needed
  mkdir -p /usr/local/texlive/texmf-local/
  cp -R texmf/* /usr/local/texlive/texmf-local/
  ```
3. Now make your TeX tools recognize these fonts:
  ```bash
  sudo texhash
  sudo updmap-sys --enable Map lucida.map
  sudo texhash
  cd /usr/local/texlive/texmf-local/fonts/map/dvips
  sudo updmap-sys
  sudo texhash
  ```
  Some of those `texhash` calls are probably redundant, but they don't hurt.


### On Ubuntu (12.04)

1. Put the Lucida files in the right place:
  ```bash
  unzip lucimatx.zip
  sudo cp -Rf texmf/* /usr/share/texmf-texlive
  # doc/ won't copy because /usr/share/texmf-texlive/doc is a symlink, so:
  cd texmf
  sudo cp -Rf doc/* /usr/share/texmf-texlive/doc
  ```
2. Add the `lucida.map` name to the updmap config sequence:
  ```bash
  echo 'Map lucida.map' > /etc/texmf/updmap.d/99lucida.cfg
  ```
3. Configure latex install to recognize these new files
  ```bash
  sudo texhash
  cd /usr/share/texmf-texlive/fonts/map/dvips
  sudo updmap-sys
  sudo texhash
  ```


### Bold *and* italic

Unless your `lucimatx.zip` archive was already patched, you'll need to put a
fixed `t1hlhj.fd` file into the directory
`/usr/local/texlive/texmf-local/tex/latex/lucida` and then run `sudo texhash`
once more after that file is in place.

Luckily, if you're installed from the `bitbucket.org:fintelkai/sp-repo.git`
repository, that file is already patched, and no further steps are necessary.


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
