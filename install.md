---
layout: default
title: "Installing the S&P LaTeX system"
---

## S&P LaTeX installation

We are going to install everything to our "TeX & Metafont" (`TEXMF`) home folder.
This is where all of your custom styles should be installed, so you may have a lot of this structure already.

Run `kpsewhich -var-value TEXMFHOME` to determine where these user-level TeX sources should go. (`TEXMFHOME` isn't a proper environment variable, but if you export the `TEXMFHOME` variable in your shell, `kpsewhich` will use that value instead.) In my case (using [MacTeX](https://tug.org/mactex/)), this is `~/Library/texmf`, which I'll use in the example instructions below. It may be different on your machine, so adjust accordingly.


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
