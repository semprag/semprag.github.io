---
layout: default
title: "Semantics & Pragmatics"
---
# Semantics and Pragmatics

*Semantics and Pragmatics* (S&P) is a peer-reviewed open access journal. The main website can be found at [semprag.org](http://semprag.org/).

This public github repository is dedicated to the copyediting, stylistic, and typesetting concerns of the journal.

If you have any issues with the instructions here, or compiling your article, please email us at [latex@semprag.org](mailto:latex@semprag.org).

## Formats

While we accept submissions in both LaTeX and Microsort Word formats, we publish all articles using LaTeX typesetting. We prefer LaTeX submissions, because it is easier to remain true to the author's vision when typeset in the S&P style.

## LaTeX configuration

*S&P* uses two files, a TeX style file [sp.cls](/source/sp.cls), and a BibTeX style file [sp.cls](/source/sp.bst).

You can add these to your global TeX distribution, your local settings, or keep them in the same folder as your article.

On most Linux distributions, you can move these files to the following paths.

    /texmf/tex/latex/sp.cls
    /texmf/bibtex/bst/sp.bst

On Mac OS X, with TeXLive 2011, these are located at:

    ~/Library/texmf/tex/latex/local/sp.cls
    ~/Library/texmf/tex/latex/local/sp.bst

The *S&P* journal uses Lucida, a commercial font that is not freely redistributable.
The provided template uses Times, by default, but you can defer back to the LaTeX standard Computer Modern by specifying `\documentclass[cm]{sp}`.

## Postscript

We strongly recommend rendering directly to pdf with `pdflatex`, avoiding `dvi` and `ps` formats entirely.
This ensures that line breaks and hyperlinks appear correctly.

If you must use `postscript` for diagrams, we recommend rendering those to PDF format independently (e.g., via `latex` & `dvipdf` or `ps2pdf`), and then importing the result directly into your *S&P* article.

    \includegraphics{the-resulting-pdf}

Failing that, you can use the option `\documentclass[dvips]{sp}` or the `pdftricks` package.

If you provide us with a TeX document that requires postscript, we will most likely convert your figures to PDF and render the document with `pdflatex` anyway. By submitting in `pdflatex`-able format, with figures in separate documents, you will ensure that the final publication is as close as possible to what you originally envisioned.
