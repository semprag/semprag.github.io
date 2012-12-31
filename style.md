---
layout: default
title: "Styling: punctuation, citations, and more"
---
# Italicization and quotation

- Use italics for a letter, word, phrase, or sentence cited as a linguistic example or subject of discussion. This means that inline example sentences should be in italics.
- Use italics for the introduction of terms.
- Use italics sparingly for emphasis.
- Use italics for journal and book titles. Due to policies on citation, this should occur rarely in running text.
- Phrases such as a priori, iff, and viz-a-viz should be italicized.
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
- Commas and periods occur inside double quotation marks.
- Colons and semicolons occur outside double quotation marks.
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
- References to figures and tables should indicate whether they are a figure or table, be capitalized in the figure or table (e.g., Figure 1) and lowercase in text (e.g., table 1).
<!-- [What is the source for this rule?  I can't find it in LI, USS or S&P style guidelines.  In text lowercase reference looks strange to me - jc] -->

# Other stylistic preferences

- For lists of 3 items or more, don't use a comma before *and* or *or*
  - ~~apples, oranges, and bananas~~ apples, oranges and bananas
  - Use & to disambiguate conjunctions of conjunctions, e.g., a & b and c & d.
- When underlining, use `\ul` from the `soul` package rather than `\underline`.
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

<!--
  I'm leaving these out because the sp.bst should handle it.
  - Use of et al. should be reserved for works by more than 3 authors. [This is controlled by sp.bst and sp.cls - KvF]
  - Unlike years, forthcoming and to appear should be preceded by a comma, e.g., (Smith, forthcoming).
  - Use the full name of authors unless the author is known better by their initials.
  I'm not sure what this means:
  - Include fleqn in documentclass options
-->
