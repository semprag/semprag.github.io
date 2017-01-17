---
layout: default
title: Installing the LaTeX system
---

We are going to install everything to our "TeX & Metafont" (`TEXMF`) home folder.
This is where all of your custom styles should be installed, so you may have a lot of this structure already.

Run `kpsewhich -var-value TEXMFHOME` to determine where these user-level TeX sources should go.
(`TEXMFHOME` isn't a proper environment variable, but if you export the `TEXMFHOME` variable in your shell, `kpsewhich` will use that value instead.)
In my case, using [MacTeX](https://tug.org/mactex/), this is `~/Library/texmf`, which I'll use in the example instructions below.
On Ubuntu (12.04), it's `~/texmf`.
It may be different on your machine, so adjust accordingly.


### The `sp` documentclass

Download the file [`sp.cls`](https://raw.githubusercontent.com/semprag/tex/master/sp.cls) (you may need to right click and "Save Link As...") to `~/Library/texmf/tex/latex/sp.cls`. You may need to create the directory `~/Library/texmf/tex/latex` if it does not exist.

You should now be able to render your document in this style by setting your documentclass to `sp`, i.e., `\documentclass{sp}`.
But you will probably be better off starting from our minimal template, which includes placeholders for the required sections, like authors, abstract, keywords, etc.: [`sp-template.tex`](examples/sp-template.tex).

*S&P* uses Lucida in all publications. Lucida is a commercial font that is not freely redistributable, so by default the `sp` documentclass uses Times.


### The S&P bibliography style

S&P currently uses **BibLaTeX** to render the bibliography and citations in all published papers.

We also provide a plain **BibTeX** style file for users without BibLaTeX. The differences from the user's perspective are minimal, but I will provide instructions for both options here. As an author, you need only choose one.

- To install the **BibTeX** file, simply download [`sp.bst`](https://raw.githubusercontent.com/semprag/tex/master/sp.bst) to `~/Library/texmf/bibtex/bst/sp.bst`.
- To install the **BibLaTeX** files (from the [`biblatex-sp-unified`](https://github.com/semprag/biblatex-sp-unified) project):
  + Download [`biblatex-sp-unified.bbx`](https://raw.githubusercontent.com/semprag/biblatex-sp-unified/master/bbx/biblatex-sp-unified.bbx) to `~/Library/texmf/tex/latex/biblatex/bbx/biblatex-sp-unified.bbx`, and
  + Download [`sp-authoryear-comp.cbx`](https://raw.githubusercontent.com/semprag/biblatex-sp-unified/master/cbx/sp-authoryear-comp.cbx) to `~/Library/texmf/tex/latex/biblatex/cbx/sp-authoryear-comp.cbx`


### Example filesystem layout

If you opted for BibLaTeX, the result should look like this:

    ~/Library/texmf
    └── tex
        └── latex
            ├── biblatex
            │   ├── bbx
            │   │   └── biblatex-sp-unified.bbx
            │   └── cbx
            │       └── sp-authoryear-comp.cbx
            └── sp.cls

You can check that LaTeX knows where to look for files by calling `kpsewhich` with just the filename, e.g.:

    kpsewhich sp.cls

> ~/Library/texmf/tex/latex/sp.cls


### Rendering in development

`latexmk` is a Perl script that comes with most LaTeX distributions and runs `pdflatex` and `biber` (or `bibtex`) as necessary.
It's handy for automatically rendering a document when changes have been made to any of its source files.

On Mac OS X, I use Sublime Text for editing LaTeX, rather than an IDE like `TeXShop.app` or `TeXworks.app`. But I still use `TeXShop.app` for viewing the PDFs, since it automatically reloads the PDF when changed (which Acrobat Reader does not), and keeps track of what page you're currently looking at (which `Preview.app` does not).

I use the following `latexmk` config file (`~/.latexmkrc`):

    # record the filenames that pdflatex depends on to a .fls file
    $recorder = 1;
    # -pdf (generate pdf by pdflatex)
    $pdf_mode = 1;
    # -f (force continued processing past errors)
    $force_mode = 1;
    $pdflatex = 'pdflatex --shell-escape %O %S';
    # -pvc (preview document and continuously update.)
    $preview_continuous_mode = 1;
    # open in TeXShop rather than the system default
    $pdf_previewer = "open -a TeXShop.app %O %S";
    # biber by default assumes we're running a more modern compiler like
    # XeLaTeX or LuaTeX on the backend, which isn't true in our case
    $biber = "biber --output-safechars %O %S"

Then I can simply call `latexmk MyPaper.tex`, and it will run `pdflatex` and `biber` as many times as necessary, and open the freshly rendered PDF in `TeXShop.app` when done.
Due to the `$preview_continuous_mode = 1;` setting, `latexmk` will keep running until I kill it with `Ctrl+C`, continually re-rendering the PDF whenever any of the sources (which includes the `.tex` and `.bib` files, as well as any figures) have been changed.

There is one potential annoyance in that `TeXShop.app` demands focus whenever it reloads the changed PDF, but this behavior is usually more convenient than annoying.
