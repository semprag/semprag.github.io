---
layout: default
title: "Style guidelines for final submission"
---
# Prepare your final version for submission #

Before you submit your final version (especially if you submit LaTeX source), please go through this checklist. This is the same list that our production team uses to prepare articles for publication. The more care you take in preparing your source files, the quicker the production process will be and thus the sooner your article can be published.

## Proof-read ##

Read your paper one more time very carefully, paying attention to the issues listed below, but also to typos and other corrections.

## Checklist of the top issues ##

* Your title and your section headings should be in sentence case (not "title case")
* Make sure that the keyword list is the same in all three places (the pdf keywords, the keyword section on the first page, and in the article metadata on the S&P website)
* Make sure that your abstract is the same as the one on the S&P website
* Make sure that your bibliographic information complies with our requirements (more detail below in the "BibTeX" section), especially:
    * full names for *all* authors and editors
    * only use braces to case protect proper names, first words of subtitles, and the like, never a whole title
    * don't case protect just the initial letter, always the entire word: ~~`{E}nglish`~~ `{English}`
    * provide volume *and* issue numbers *and* page numbers for all journal articles (and page numbers for all book chapters etc.)
    * provide DOIs and URLs for everything that can reasonably be accessed electronically
* Our house style follows the *LI*-style in making a distinction between referring to an author and referring to an author's work. So, "Beaver (2001) proposes ..." (LaTeX: `\citet`) but "as claimed in Beaver 2001" (LaTeX: `\citealt`). Expressions that probably go with the latter form: "in", "see", ... .
* instead of "`---`" for parenthetical remarks, use the `\dash` macro provided by `sp.cls`
* instead of literal "`...`" for dots, use the LaTeX `\dots` macro
* use `\sv{}` (provided by `sp.cls`) for semantic evaluation brackets
* use the `\text{}` macro to wrap object language expressions inside any math environment
* use the `\co` macro (provided by `sp.cls`) for the "such that" colon in math environments

Believe it or not, the above are the main stumbling blocks for a quick conversion of a manuscript to a publishable S&P paper. There are more subtle guidelines below, but these are the most important issues.

## Italicization and quotation

- Use italics for a letter, word, phrase, or sentence cited as a linguistic example or subject of discussion. This means that inline example sentences should be in italics. [LaTeX: use `\emph{}`!]
- Use italics for the introduction of terms.
- Use italics sparingly for emphasis.
- Use italics for journal and book titles. Due to policies on citation, this should occur rarely in running text.
- Phrases such as *a priori*, *iff*, and *viz-a-viz* should be italicized.
- Bold face should not be used at all, ever, really.
- Use double quotes for notions and concepts in appositive constructions, e.g., the notion "proposition."
- Use double quotes to set off the name of a journal article, unpublished paper, chapter, or dissertation, in running text, e.g., Montague's "Universal Grammar."
- Use double quotes for scare quotes (but use scare quotes sparingly).
- Use single quotes for inline meanings and glosses, e.g., Swedish sig 'self'
- Enclose the bottom-most gloss/English translation in single quotes.

# Punctuation and abbreviation

- Uses of e.g. and i.e. should be followed by commas:
  - ~~e.g.~~ e.g.,
  - ~~i.e.~~ i.e.,
  - Avoid use of e.g., i.e., etc. in non-parenthesized text.
- Punctuation marks (commas, semicolons, periods, ...) should be inside quotation marks *only if* they were part of the material being quoted. Otherwise -- if they are attributable to you as the author rather than the material being quoted -- they should occur outside the quotation marks. (Ben Yagoda has [a good article on this topic](http://www.slate.com/articles/life/the_good_word/2011/05/the_rise_of_logical_punctuation.single.html).)
- Example references and numbers should be surrounded by parentheses, e.g., (1), (2-3), (4a), (5b-c), (6a,c), etc.
  - Avoid primes (e.g., (1')).
- Footnotes follow punctuation and precede spacing as in this sentence.<sup>1</sup> This is the next sentence.
  - I.e., end punctuation, footnote, space, next sentence.
- Et al. contains only 1 period.
- Be consistent about the use of non-, pre-, and co-. The LI style sheet recommends conjoining prefixes without a dash.

# Capitalization and spelling

- Capitalize linguistic rules, principles, conditions, etc. (e.g., Extended Projection Principle), but not general linguistic phenomenon (e.g., head movement)
<!-- [Special case of general rule for proper names? - jc] -->
- Avoid full capitals, unless contrastive (e.g., *COMP, PRO/pro)
<!-- [What about sentences following colons? First word of subtitles? - jc] -->
- References to figures and tables should indicate whether they are a figure or table, and be capitalized both in the figure or table (e.g., Figure 1) and in the text (e.g., "As we see in Table 1, ...").
- In LaTeX: make sure that there is no linebreak by using `~`: `Figure~\ref{fig:1}`.

# Other stylistic guidelines

- For lists of 3 items or more, there is a religious war whether a final comma should be used before *and* or *or*
  - "apples, oranges, and bananas" vs. "apples, oranges and bananas"
  - We do not take a position on this, but authors should be consistent in their policy.
  - Use & to disambiguate conjunctions of conjunctions, e.g., a & b and c & d.
- When underlining (which should be used only very rarely, if at all), use `\ul` from the `soul` package rather than `\underline`.
- Use `\dash` instead of both n-dashes (`--`) and m-dashes (`---`).
- Avoid stray spaces when using `\label{abc}` in examples by using `%`, e.g., `\label{abc}%`.
- Use `\sv` for semantic interpretation brackets. It creates a math environment so be sure to use \text for any text in it, e.g., `\sv{\text{unicorn}}`.
- Use \colon instead of : in your equations to ensure proper spacing.
  - ~~`\forall x : x \in D`~~ (~~`∀x : x ∈ D`~~)
  - `\forall x \colon\thinspace x \in D` (`∀x: x ∈ D`)
  - `\co` is a shortcut for `\colon\thinspace`
- Use `\http{}` to link to a webpage, e.g., `\http{semprag.org}`
- Use `\email{}` to include an email address, e.g., `\email{editors@semprag.org}`
- Use `\footnotemark` and `\footnotetext` for footnotes in section headers.
  - You'll need to use the `\section[options]` options for the section title.
- Use `booktabs` package for tables, and use that package's commands, `\midrule`, `\cmidrule`, rather than `\hline`.
  - Do not use vertical rules in tables.
- Don't use `\sf` (Sans Serif).
- The `sp` documentclass uses the standard skip amounts:
  | Skip name          | `\the{...}` | total |
  |:-------------------|:------------|:------|
  | `\smallskipamount` | 3.0pt plus 1.0pt minus 1.0pt | 3pt |
  | `\medskipamount`   | 6.0pt plus 2.0pt minus 2.0pt | 6pt |
  | `\bigskipamount`   | 12.0pt plus 4.0pt minus 4.0pt | 12pt |


## BibTeX

The `.bib` file's BibTeX format allows leaving out certain fields in each entry's specification. We require a great deal more specificity to meet *S&P* publication standards. Our production process often gets bogged down in correcting authors' bibliographies. Please spend some care on preparing your bibliographic details before submission!

NB: *S&P*'s bibliographic style is a close implementation of the ["Unified Style Sheet for Linguistics Journals"](http://celxj.org/downloads/UnifiedStyleSheet.pdf).

- Journal articles should specify both volume and issue.
- Books should have publisher and address (city) information (use the two letter postal abbreviation for US cities: `address = {Amherst, MA}`.
- Journal and book titles *must* be given in full, with the initial letter of each major word capitalized.
- Articles in journals and books *must* specify page numbers.
- Use full first names of authors or editors.
- In case of multiple authorship, the names of all authors must be given.
- Unpublished manuscripts need a month and year. If a url is available, include it.
- For all urls, we prefer a url to a permanent resource such as SemanticsArchive, rather than the author's homepage or institutional website, but if the latter is the only available option, please use it.
- Conference proceedings should *not* include editor information. They should be given the `@article` type with the `journal` field set to the conference name and the acronym in parentheses: `journal = {North East Linguistic Society ({NELS})}`. Do not include the words "proceedings of the" or "papers from the".
- Publishers that have multiple cities should include both (unless the publisher information indicates otherwise). Conjoin them with an ampersand `\&`.
- Do not hard-case words or letters in your BibTeX entries (e.g., `{B}ook {T}itle`), except for the following exceptions:
  - Proper names
    - Languages
    - People
    - Places
  - Acronyms
  - All nouns if the title is in German or similar languages that capitalize nouns
  - Even in these cases, hard-case the entire word instead of the initial letter. (This is essential for proper kerning.)
    - <del>`{B}ook`</del> `{Book}`
- Whenever possible, include the DOI for the article. These are often hard to find, but [Google Scholar](http://scholar.google.com/) and [crossref.org/SimpleTextQuery](http://crossref.org/SimpleTextQuery/) can help.
  - DOIs should never end in periods, which can cause the DOI lookup to fail.
- There is no need for the `\SortNoop{}` hack to sort non-ascii author names. Our bibliography style will handle these automatically.

<!--
  I'm leaving these out because the sp.bst should handle it.
  - Use of et al. should be reserved for works by more than 3 authors. [This is controlled by sp.bst and sp.cls - KvF]
  - Unlike years, forthcoming and to appear should be preceded by a comma, e.g., (Smith, forthcoming).
  - Use the full name of authors unless the author is known better by their initials.
  I'm not sure what this means:
  - Include fleqn in documentclass options
-->
