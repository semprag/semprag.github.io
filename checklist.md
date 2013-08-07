---
layout: default
title: "What to double check"
---
# Prepare your final version for submission #

Before you submit your final version (especially if they submit LaTeX source), please go through this checklist. This is the same list that our production team uses to prepare articles for publication. The more care you take in preparing your source files, the quicker the production process will be and thus the sooner your article can be published.

## Proof-read ##

Read your paper one more time very carefully, paying attention to the issues listed below, but also to typos and other corrections.

## Checklist ##

* Your title and your section headings should be in sentence case (not "title case")
* Make sure that the keyword list is the same in all three places (the pdf keywords, the keyword section on the first page, and in the article metadata on the S&P website)
* Make sure that your abstract is the same as the one on the S&P website
* Make sure that your bibliographic information complies with our requirements (more detail in [the "BibTeX" section](http://semprag.github.io/basics.html)), especially:
    * full names for *all* authors and editors
    * only use braces to case protect proper names, first words of subtitles, and the like, never a whole title
    * don't case protect just the initial letter, always the entire word: ~~`{E}nglish`~~ `{English}`
    * provide volume *and* issue numbers *and* page numbers for all journal articles (and page numbers for all book chapters etc.)
    * provide DOIs and URLs for everything that can reasonably be accessed electronically
* instead of "`---`" for parenthetical remarks, use the `\dash` macro provided by `sp.cls`
* instead of literal "`...`" for dots, use the LaTeX `\dots` macro
* use `\sv{}` (provided by `sp.cls`) for semantic evaluation brackets
* use the `\text{}` macro to wrap object language expressions inside any math environment
* use the `\co` macro (provided by `sp.cls`) for the "such that" colon in math environments


