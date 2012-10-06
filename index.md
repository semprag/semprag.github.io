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

Compiling in the S&P style requires two files, a TeX style file, [sp.cls](/source/sp.cls), and a BibTeX style file, [sp.bst](/source/sp.bst).

You can add these to your global TeX distribution, your local settings, or keep them in the same folder as your article.

On most Linux distributions, you can move these files to the following global paths:

    /texmf/tex/latex/sp.cls
    /texmf/bibtex/bst/sp.bst

On Mac OS X, with TeXLive 2011, the files can be located at:

    ~/Library/texmf/tex/latex/local/sp.cls
    ~/Library/texmf/tex/latex/local/sp.bst

Having done that, you should now be able to get a document started by setting your document class:

    \documentclass{sp}

You will probably be better off starting from a minimal template, though, which includes sections for authors, abstract, keywords,
and many other required sections. You can download that file here: <a href="source/sp-template.tex">sp-template.tex</a>.

*Semantics and Pragmatics* uses Lucida, a commercial font that is not freely redistributable.
The provided template uses Times, by default, but you can defer back to the LaTeX standard Computer Modern by specifying `\documentclass[cm]{sp}`.

## Word

Providing a document in Word format is problematic for a few reasons.

1. Translating from the proprietary `.doc` format into TeX is not straightforward. Copy and pasting from Word into a TeX editor loses all formatting, formulas, and structure. Currently, our method is to convert to `.docx` using a recent version of Word, and then process the resulting collection of slightly less proprietary XML files into `.tex` files, using a script like this one: [github.com/chbrown/docx-tex](https://github.com/chbrown/docx-tex). Even with the preprocessing step, making the TeX look like the original Word document is arduous.
2. Word encourages using a variety of colors, font-faces, and font-varieties, like boldface, small-caps, sans-serif, etc. Reducing those into a subset suitable for *S&P* is hard, because it's sometimes hard to tell what the different styles signify.
3. Word does not enforce bibliographic or referential consistency. It's easy to change and example and not realize that a reference to that example didn't get updated. And it's easy to introduce a citation in the main text while forgetting to include the full reference in the bibliography. Errors like these become apparent when converting to TeX, which enforces correctness of all references, but hard to resolve in many cases, where it is unclear which example the broken link was meant to refer to, or which article an author and year refer to.

Nevertheless, we will accept submissions of any typesetting choice, and will work with you to make sure the final product is up to both *S&P*'s and your standards. Just note that turnaround time on Word submissions is a great deal longer than TeX, due to these additional complications.

## Postscript

We strongly recommend rendering directly to PDF with `pdflatex`, avoiding `dvi` and `ps` formats entirely.
This ensures that line breaks and hyperlinks appear correctly.

If you must use `postscript` for certain diagrams, we recommend rendering those to PDF format independently (e.g., via `latex` & `dvipdf` or by using `ps2pdf`), and then importing the result directly into your *S&P* submission:

    \includegraphics{used-to-be-ps.pdf}

Failing that, you can use the option `\documentclass[dvips]{sp}` or the `pdftricks` package.

If you provide us with a TeX document that requires postscript, we will most likely convert your figures to PDF and render the document with `pdflatex` anyway. By submitting in `pdflatex`-able format, with graphics in separate documents, you will ensure that the final publication is as close as possible to what you envision.
