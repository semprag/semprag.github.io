---
layout: default
title: Preparing your final version for submission
---

Before you submit your final version (especially if you submit LaTeX source), please go through this checklist. This is the same list that our production team uses to prepare articles for publication. The more care you take in preparing your source files, the quicker the production process will be and thus the sooner your article can be published.

## Proof-read ##

Read your paper one more time very carefully, paying attention to the issues listed below, but also to typos and other corrections.


## Checklist of the top issues ##

* Your title and your section headings should be in "Sentence case" (not "Title Case"). If you have a subtitle, capitalize the first word of the subtitle: "First part of title: Second part of title".
* Make sure that the abstract declared in `\begin{abstract} ... \end{abstract}` matches the one on the journal website.
* Keywords:
  - Should be separated by commas
  - Should not be capitalized (except for proper nouns)
  - Should not be followed by a period
  - Six is a good target for number of keywords
* Make sure that the same keyword list appears in three places:
  1. in the `\begin{keywords} ... \end{keywords}` environment directly following the abstract (any valid LaTeX)
  2. in the `\pdfkeywords{...}` command in the preamble (ASCII only)
  3. in the metadata associated with your submission on the [S&P website (OJS)](http://semprag.org/)
* Similarly, make sure that the abstract in your paper and the abstract on the S&P website are the same (modulo that the abstract in the paper is LaTeX and the abstract on the website is HTML).
* Include your contact address at the end of the paper.
* Make sure that your bibliographic information complies with our requirements (more details below in the [BibTeX](#bibtex) section), especially:
  - full names for *all* authors and editors
  - only use braces to case protect proper names, first words of subtitles, and the like, never a whole title
  - when using braces to protect case, wrap the entire word in braces, not just the initial letter:
    + <del><code>{E}nglish</code></del> `{English}`
    + <del><code>{NPI}s</code></del> `{NPIs}`
  - provide volume *and* issue numbers *and* page numbers for all journal articles (and page numbers for all book chapters etc.)
  - provide the DOI (or URL) for everything that can reasonably be accessed electronically
* Our house style follows the *LI*-style in making a distinction between referring to an author and referring to an author's work. So, "Beaver (2001) proposes ..." (LaTeX: `\citet`) but "as claimed in Beaver 2001" (LaTeX: `\citealt`). Expressions that probably go with the latter form: "in", "see", ... .
* instead of "`---`" or "`--`" for parenthetical remarks, use the `\dash` macro provided by `sp.cls`
* instead of literal "`...`" for dots, use the LaTeX `\dots` macro
  - If used to elide some portion of a quote, adding a little extra bit of space (`\thinspace`, to be exact) before the `\dots`, i.e. `[\,\dots]`, produces a more balanced result.
* use `\sv{}` (provided by `sp.cls`) for semantic evaluation brackets
* use the `\text{}` macro to wrap object language expressions inside any math environment
* use the `\co` macro (defined by `sp.cls` as `\colon\thinspace`) for the "such that" colon in math environments
* You are free to use British spellings (e.g., "colour", "analysed") as long as you are consistent in American vs. British spelling throughout the document.
  - If you elect to use British spelling, please say so in a comment in your LaTeX document's preamble.
* Avoid manual spacing hacks (when we typeset your document in the relatively wide Lucida font, such manual adjustments are usually counter-productive).
  - Do not manipulate the document layout with packages like `geometry`, `fullpage`, `rotating`, `multicol`, `setspace`, `caption`, etc.
  - Avoid using custom spacing macros like `\hspace`, `\vspace`, `\bigskip`, `\newpage`, `\clearpage`, etc.
  - Avoid environments like `tabbing`, which do not handle line wrapping well.
* If you use other packages for typographic manipulation, like `ulem` or `soul`, explain why you are using these.

Believe it or not, the above are the main stumbling blocks for a quick conversion of a manuscript to a publishable S&P paper. There are more subtle guidelines below, but these are the most important issues.


## Italicization and quotation

- When italicizing, use `\emph{...}`; do not use `{\it ...}`.
  - In some cases, you may want to use `\textit{...}` instead of `\emph{...}`. If you have a good reason for doing so, use `\textit{...}`. Otherwise, use `\emph{...}`. In most cases they have the same effect.
- Use italics for a letter, word, phrase, or sentence cited as a linguistic example or subject of discussion.
- Use italics for the introduction of terms.
- Use italics sparingly for emphasis.
- Use italics for journal and book titles. Due to policies on citation, this should occur rarely in running text.
- Phrases such as *a priori*, *iff*, and *vis-à-vis* should be italicized.
- Bold face should not be used at all, ever, really.
- To set constants in logical representation, you may choose to use sans serif. `\textsf{...}`
- Use double quotes for notions and concepts in appositive constructions, e.g., *the notion "proposition"*.
- Use double quotes to set off the name of a journal article, unpublished paper, chapter, or dissertation, in running text, e.g.:
  <code>Montague's ``Universal Grammar''</code>.
- Use double quotes for scare quotes (but use scare quotes sparingly).
- Use single quotes for inline meanings and glosses, e.g.:
  <code>Swedish \emph{sig} `self'</code>
- Enclose the bottom-most gloss/English translation in single quotes.
- Math environments will render words in math italics, but this is rarely what you want for full words. Wrap non-mathematical symbols, like text, in `\text{}` or `\textit{}` commands.
- Technical terms should be italicized.


# Punctuation and abbreviation

- **Logical punctuation.** Punctuation marks (commas, semicolons, periods, etc.) should be inside quotation marks _only if_ they were part of the material being quoted. Otherwise -- if they are attributable to you as the author rather than the material being quoted -- they should occur outside the quotation marks. (Ben Yagoda has [a good article on this topic](http://www.slate.com/articles/life/the_good_word/2011/05/the_rise_of_logical_punctuation.single.html).)
- Uses of `e.g.` and `i.e.` and `viz.` should be followed by commas: `e.g.,` and `i.e.,` and `viz.,`.
- Avoid use of "e.g.," and "i.e.," in non-parenthesized text. Spell them out: "for example," or "that is," respectively.
- Example references and numbers should be surrounded by parentheses, e.g., (1), (2-3), (4a), (5b-c), (6a,c), etc.
  - Avoid primes, for example: `(1')`
  - Prefer using the original numbering when repeating an example without changes. E.g., use `\exr{yourOriginalLabel}` instead of `\ex` with gb4e.
    * However, if you change something, or add anything, or are replicating the example for any reason other than to save the reader the trouble of paging back and forth, use a new number.
- A footnote attached to a sentence immediately follows the end punctuation, as in this paragraph.<sup>1</sup> The following sentence requires no special spacing.
- "Et al." contains only one period.
- "Cf." contains only one period.
- Be consistent about the use of non-, pre-, and co-. The LI style sheet recommends conjoining prefixes without a dash.
- Use `'` instead of `\prime` for primes in math environments. If you need to use `\prime`, explain why.
- Inches are denoted by curly quotes, represented in LaTeX by apostrophes (`’’`), not with math primes (`$''$`).
- Do not encase numbers in a math environment, except for two cases:
  * You are writing out a formula and are already in a math environment.
  * You have tabular data and need fixed-width digits for the numbers to line up.
- Spell out small numerals. Where you draw the threshold, from 10 to 100, is a matter of taste, but be consistent. This is a soft constraint; there are many cases where a numeral is more suitable, e.g., experimental data, numeric series, or identifiers.


# Capitalization and spelling

- Capitalize linguistic rules, principles, conditions, proper names, etc. (e.g., Extended Projection Principle), but not general linguistic phenomenon (e.g., head movement)
- Avoid full capitals, unless contrastive (e.g., *COMP, PRO/pro)
- A full sentence that follows a colon may require or allow the first word to be capitalized. Unless necessary, avoid capitalization, but clarity and consistency are more important than arbitrary capitalization.
- The first word of a subtitle should always be capitalized. <!-- always? ^chb -->
- References to figures and tables should indicate whether they are a figure or table, and be capitalized both in the figure or table (e.g., Figure 1) and in the text (e.g., "As we see in Table 1, ..."). The `cleveref` package makes this easy; see below.


# Other stylistic guidelines

- For lists of 3 items or more, there is a religious war whether a final comma (a.k.a. the Oxford comma) should be used before *and* or *or*
  - "apples, oranges, and bananas" vs. "apples, oranges and bananas"
  - We do not take a position on this, but authors should be consistent in their policy.
  - Use & to disambiguate conjunctions of conjunctions, e.g., a & b and c & d.
- When underlining (which should be used only very rarely, if at all), use `\ul` from the `soul` package rather than `\underline`.
- Use `\dash` for parenthetical remarks (instead of both n-dashes (`--`) and m-dashes (`---`)); n-dashes (`--`) are useful elsewhere, for example for number ranges (`1--5`) or when citing an affix (the prefix *co`--`*).
- Avoid stray spaces when using `\label{abc}` in examples by using `%`, e.g., `\label{abc}%`.
- Use `\sv` for semantic interpretation brackets. It creates a math environment so be sure to use \text for any text in it, e.g., `\sv{\text{unicorn}}`.
- Manual spacing, such as `\;`, `\:`, `\,`, and `\ `, is often unnecessary in math environments.
- Use `\co` instead of `:` in your equations to ensure proper spacing.
  - <del><code>\forall x : x \in D</code></del>
  - `\forall x \co x \in D`
- Use `\http{}` to link to a webpage, e.g., `\http{semprag.org}`
- Use `\email{}` to include an email address, e.g., `\email{editors@semprag.org}`
- Use `\footnotemark` and `\footnotetext` for footnotes in section headers.
  - You'll need to use the `\section[options]` options for the section title.
- Use `booktabs` package for tables, and use that package's commands, `\midrule`, `\cmidrule`, rather than `\hline`.
  - Do not use vertical rules in tables. We strongly recommend the `booktabs` package (and its documentation for guidance on typesetting tables).
- Spell out "Section" (preferably capitalized) when referring to sections by number, e.g., "In Section 3 we discuss the problem of...", but use lowercase when referring to relative, e.g., "...as we saw in the previous section."
  - <del><code>\S\ref{sec:intro}</code></del> `Section~\ref{sec:intro}`
  - Or, use the `autoref` package and type `\autoref{sec:intro}` (which won't capitalize "section")
  - Or even better, import the [cleveref](https://ctan.org/pkg/cleveref) package, `\usepackage[nameinlink]{cleveref}`, and use `\Cref{sec:intro}` (which will capitalize "Section") or `\cref{sec:intro}` (which will not capitalize "section").
  - Unless using `cleveref`, you should prevent linebreaks in your named references by using `~`: `Figure~\ref{fig:1}`.
- In the _very_ rare case where you want to use a link with custom text, you can use `\hyperref`, e.g., `the \hyperref[appendix]{Appendix}`.
- Use `~` only to prevent line breaks; do not use it to differentiate abbreviation periods vs. end of sentence periods, which is unnecessary with the `sp` class and a modern LaTeX compiler.
  - LaTeX is extremely good at determining where line breaks should go without stretching or squeezing lines too much, and `~` constraints can inhibit its flexibility.
- Avoid using `\ ` (an escaped literal space) to protect whitespace, e.g., following a zero-argument macro.
  Instead, use `{}`, which more clearly indicates the intent.
  - <code>we have repeatedly seen the <del>\custom context</del> <del>\custom\ context</del> \custom{} context</code>
  <!-- References: https://tex.stackexchange.com/q/31091, https://tex.stackexchange.com/q/116528, https://tex.stackexchange.com/q/55105 -->
- Use English rather than Latin:
  - <del>ceteris paribus</del> other things being equal
  - <del>inter alia</del> among others
  - <del>simpliciter</del> in and of itself
- Avoid manual spacing, particularly spacing with explicit units. `\hfil` and `\hfill` are vastly preferable to something like `\hspace{15cm}`.
- To right-align a short line on its own (e.g., to credit a source following an example or blockquote) use `\par\hspace*{\fill}`.
  (A full `flushright` environment sometimes adds too much vertical space above and below its contents.)
- Avoid `\nocite{}`.
- Don't worry about word wrapping and hyphenation, since the S&P font is much wider than Times and you won't be able to predict where the lines will wrap. That said, if you suspect some unusually long (and unusual) term might need to be hyphenated, prefer calling `\hyphenation{}` somewhere in your preamble instead of using `\-` in the word itself.
  + E.g., `\hyphenation{percep-tron}` ... `perceptron` rather than `percep\-tron`.


## BibTeX

The `.bib` file's BibTeX format allows leaving out certain fields in each entry's specification. We require a great deal more specificity to meet S&P publication standards. Our production process often gets bogged down in correcting authors' bibliographies. Please spend some care on preparing your bibliographic details before submission!

NB: S&P's bibliographic style is a close implementation of the ["Unified Style Sheet for Linguistics Journals"](http://celxj.org/downloads/UnifiedStyleSheet.pdf). For the authors' convenience, we make [a bst-style file](https://raw.githubusercontent.com/semprag/tex/master/sp.bst) available (see the sidebar). But for production purposes, we actually use a new BibLaTeX-based implementation of the bibliography style. If you want to adopt that new system, check out the [github repository for the project](https://github.com/semprag/biblatex-sp-unified).

- Journal articles should specify both volume and issue.
  - Use `volume` (major specifier) and `number` (minor specifier) in `@article` entries, even if the journal calls the minor designator the "issue." <!-- Seems like the BibLaTeX should handle this, but it doesn't. - CB -->
- Books should have publisher and address (city) information. Use the two-letter state postal abbreviation for US states, e.g., `address = {Amherst, MA}`.
- Dissertations should have city information, unless the city is evident from the name of the university. Again, use the two letter postal abbreviation for US states, e.g., `address = {Santa Cruz, CA}`.
- University names should be written out in full (e.g., "University of California, Los Angeles" and "Massachusetts Institute of Technology").
- Journal and book titles *must* be given in full
- Articles in journals and books *must* specify page numbers.
- Use full first names of authors or editors.
- In case of multiple authorship, the names of all authors must be given.
- Unpublished manuscripts need a month and year. If a URL is available, include it.
- When you have a choice of URLs, choose one pointing to the more permanent resource.
  - For example, prefer [Semantics Archive](http://semanticsarchive.net/) URLs over the author's homepage or institutional website, which are all too often subject to [link rot](http://en.wikipedia.org/wiki/Link_rot).
- When you have a choice of years, choose the more official ("Cite this as...") year
  - Some articles have a "First published online ..." date that's different than the "official" / printed date.
    In such cases, use the year of the printed date.
- Conference proceedings (`@inproceedings`):
  - Should not include the words "proceedings of the" or "papers from the", etc., in the `booktitle` field.
  - Editor information is not required.
  - When an abbreviation is commonly used, specify it in parentheses after the full name, e.g.:
    - `booktitle = {North {East} {Linguistic} {Society} ({NELS})}`
    - `booktitle = {Semantics and {Linguistic} {Theory} ({SALT}) 21}`
- Publishers that have multiple cities should include both (unless the publisher information indicates otherwise). Conjoin them with an ampersand: `\&`.
- Do not hard-case words or letters in your BibTeX entries (e.g., `{B}ook {T}itle`), except for the following exceptions:
  - Proper names
    - Languages
    - People
    - Places
  - Acronyms
  - All nouns if the title is in German or other languages that capitalize nouns
  - Even in these cases, hard-case the entire word instead of the initial letter. (This is essential for proper kerning.)
    - <del><code>{B}ook</code></del> `{Book}`
    - <del><code>{NPI}s</code></del> `{NPIs}`
- Do not use any kind of `\SortNoop{}` hack, or hard-casing name pairs (like `Kai {von Fintel}`), to sort author names. Our bibliography style will handle these automatically.
- Whenever possible, include the DOI for the article. These are often hard to find, but [Google Scholar](http://scholar.google.com/) and [crossref.org/SimpleTextQuery](http://crossref.org/SimpleTextQuery/) can help.
  - DOIs should never end in periods, which can cause the DOI lookup to fail.
  - Use the "doi" BibTeX field, `doi = {10.3765/sp.1.1}`, rather than `url = {http://dx.doi.org/10.3765/sp.1.1}`.
- If you're using the BibLaTeX style implementation, you can separate the paper's title into the `title` and `subtitle` fields. The style will insert the ":" between the two as needed, and keep the capitalization of the first word of the subtitle as appropriate.
  - If the title ends with end-of-sentence punctuation, like "`.`", but a colon should still be inserted, replace the final "`.`" with "`.\isdot`" (BibLaTeX only) or "`.\@`" (general TeX). This signifies to the TeX compiler that the "`.`" should not be interpreted as an end-of-sentence marker. The normal behavior is so that other punctuation that _should_ absorb the "`:`", like "`?`", does so.
    - `title={At least et al.}, subtitle={The semantics of scalar modifiers}` renders to "At least et al. The semantics of scalar modifiers", which is incorrect.
    - `title={At least et al.\isdot}, subtitle={The semantics of scalar modifiers}` renders to "At least et al.: The semantics of scalar modifiers", which is correct.
    - `title={Would you believe it?}, subtitle={The King of France is back!}` renders to "Would you believe it? The King of France is back!", which demonstrates correct normal behavior.
