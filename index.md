---
layout: default
title: "Semantics & Pragmatics"
---
# Semantics and Pragmatics

*Semantics and Pragmatics* (S&P) is a peer-reviewed open access journal, published by the [Linguistic Society of America](http://www.linguisticsociety.org/). The main website of the journal can be found at [semprag.org](http://semprag.org/).

This site is dedicated to the copyediting, stylistic, and typesetting concerns of the journal.

If you have any issues with the instructions here, or compiling your article, please email us at [latex@semprag.org](mailto:latex@semprag.org).

## Formats

While we accept submissions in both LaTeX and Microsoft Word formats, we publish all articles using LaTeX typesetting. We prefer LaTeX submissions, because it is easier to remain true to the author's vision when typeset in the S&P style and because it expedites the production process, thus leading to much faster publication. We therefore strongy encourage authors to submit in LaTeX format, and ideally in our house style. If you yourself are not familiar with LaTeX, maybe a friend or colleague could help you with preparing your manuscript. If you have to submit in Word format, please read our [Word-specific instructions](word.html).

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
and many other required sections. You can download that file here: <a href="source/sp-template.tex">sp-template.tex</a>. Please consult [the detailed explanation of the template](basics.html).

*Semantics and Pragmatics* uses Lucida, a commercial font that is not freely redistributable.
The provided template uses Times, by default, but you can defer back to the LaTeX standard Computer Modern by specifying `\documentclass[cm]{sp}`.

## Style guidelines ##

In our experience, even submissions in LaTeX format often require intensive re-typesetting and additional work on the bibliography. We hope that authors can take some of the burden of that work, again in the interest of an expedited publication process. To that purpose, please read [our style guidelines](style.html), especially as they pertain to LaTeX submissions.




