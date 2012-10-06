# Frontmatter (the preamble)

Instructions for the content that comes before `\begin{document}`.

## Metadata

The `\pdf*{}` commands control the metadata inserted into the published PDF.
Only ASCII characters are allowed in these fields, otherwise the `pdflatex` compiler will throw very hard to debug errors.

## Title

The `\title{}` can contain a `\thanks{}` acknowledgements section. If you do not give `\title[Something Short]{Full}` the optional argument (here, "Something Short"), no title will be shown in the headers of subsequent pages. If your title is shorter than 30 characters, use the same title for each.

## Authors

There is no limit to the number of authors you can have. Each use of `\spauthor{}` should be separated by `\AND`.  

The optional argument to `\author` (inside square brackets) is what appears in the header on subsequent pages.
If you have more than three authors, use ``Lastname et al.''

## Keywords

The content of the `keywords` environment should be the same as the `\pdfkeywords{}` command, except that the environment allows an extended character set. Six is a good target for number of keywords.

# The document

## Examples

You are free to use any package you wish for numbering examples.

However, we impose a few general formatting restrictions:
- Example numbers appear in round parentheses, flush left.
- Subexamples are labeled with lowercase alphabetical letters, each followed by a period.
- Equations and examples should be numbered in the same sequence.
- References to examples appear inside parentheses, with no punctuation between elements.
  - E.g., we can refer to (12), or to its subexample (12a).

## BibTeX and Citations

The `sp.cls` style file adds a few commands to the standard `natbib` commands. The `sb.bst` file will handle most details about how your `.bib` file is rendered, but here are a few things to keep in mind.

There are four main citation forms:

- `\citealt{montague:1974}`: Montague 1974
  - This refers to the work.
- `\citet{montague:1974}`: Montague (1974)
  - This refers to the author in the context of this work.
- `\citep{montague:1974}`: (Montague 1974)
  - This refers parenthetically to this work.
- `\citeauthor{montague:1974}`: Montague
  - Useful if you recently used `\citet{montague:1974}` and it's clear you're talking about the same work.

The S&P file also supports the following commands:

- `\pgcitealt{montague:1974}{12}`: Montague 1974: 12
- `\pgcitet{montague:1974}{12}`: Montague (1974: 12)
- `\pgcitep{montague:1974}{12}`: (Montague 1974: 12)
- `\seccitet{montague:1974}{2}`: Montague (1974: §2)

- `\posscitet{montague:1974}`: Montague's (1974)
- `\pgposscitet{montague:1974}{12}`: Montague's (1974: 12)
- `\posscitet{montague:1974}`: Montague's (1974)
- `\possciteauthor{montague:1974}`: Montague's
- `\secposscitet{montague:1974}{2}`: Montague's (1974: §2)
- `\seccitealt{montague:1974}{2}`: Montague 1974: §2
- `\seccitep{montague:1974}{2}`: (Montague 1974: §2)

Every reference to an article must be coded with one of these commands.
This ensures that all bibliographic entries are included, and, since these automatically hyperlink to the corresponding entry in the bibliography, allows your readers to determine what work you are referring to.

## Images and custom figures

You can easily include a range of figures using the \includegraphics{} command.

    \includegraphics[width=4in]{figure-1b.pdf}
    \includegraphics[height=1in]{my-pet-cat.png}
    \includegraphics[width=\textwidth]{image-file.jpg}

N.B. `\includegraphics` prefers filenames without underscores.

## Floats, for figures and tables

The `sp.cls` includes the `float` package by default.
If you need to modify the S&P `float` configuration temporarily, you can:

    % outside brackets ensure that the style returns to normal after the temporary change
    {
      \floatstyle{plain}
      % See the `float` documentation for other styles.
      \restylefloat{figure}
      \begin{figure}
        \includegraphics{some-carefully-named.pdf}
        Your figure goes here.
      \end{figure}
    }

# Backmatter

The end sections are organized like so:
1. Appendix
2. References
3. Addresses

## Appendix

The `appendix` environment, is a good home for lengthy proofs, fragments, experimental materials, and the like.

    \begin{appendix}
      ...
    \end{appendix}

## References

Simply use the following, where you have a file `your-references.bib` in the same folder.

    \bibliography{your-references}

If you have a system-wide BibTeX file elsewhere, accessible to your LaTeX library, that is fine too.
However, when submitting your article, you will need to include your `.bib` file

## Addresses

Full author addresses appear at the end of each article.
They are specified as follows:

    \begin{addresses}
      \begin{address}
        Author1 \\
        Street \\
        ... \\
        \email{author1@email.edu}
      \end{address}
      \begin{address}
        Author2 \\
        Street \\
        ... \\
        \email{author2@email.edu}
      \end{address}
      % repeat if needed
    \end{addresses}

## BibTeX

- Journal articles should specify both volume and issue.
- Books should have publisher and address (city) information.
- Journal and book titles *must* be given in full, with the initial letter of each major word capitalized.
- Articles in journals and books *must* specify page numbers.
- Use full first names of authors or editors.
- In case of multiple authorship, the names of all authors must be given.
- Unpublished manuscripts need a month and year. If a url is available, include it.
- Urls preferably a url to a permanent resource such as SemanticsArchive.
- Conference proceedings should NOT include editor information (this is contrary to either the universal or LI stylesheets).
- Publishers that have multiple cities should include both (unless the publisher information indicates otherwise). Conjoin them with an ampersand &. <!-- Conflicting instruction: Separate multiple cities for publishers with commas. (Which is right?) -->
- For conference proceedings title, use the name of the society and then put the meeting's acronym in parentheses. Otherwise treat as a journal article. Do not include the words "proceedings of the" or "papers from the".
- Do not hard-case words or letters in your BibTeX entries (e.g., `{B}ook {T}itle`), except for the following exceptions:
  - Proper names
    - Languages
    - People
    - Places
  - Acronyms
  - Even in these cases, hard-case the entire word instead of the initial letter.
    - `~~{B}ook~~` `{Book}`
- Whenever possible, include the DOI for the article. These are often hard to find, but [http://scholar.google.com/](Google Scholar) and [crossref.org/SimpleTextQuery](http://crossref.org/SimpleTextQuery/) can help.
  - DOIs should never end in periods, which can cause the DOI lookup to fail.

## Included packages `sp.cls`

The `sp.cls` file includes the following packages by default, which means you have access to all their commands without having to `\includepackage{}` it in your own document:
- graphicx
- natbib
- hyperref
- amsmath
- amssymb
- float
- subfigure
- mathptmx
- stmaryrd
- textcomp
- microtype
- inputenc
- xspace
- ifthen
- color
- fontenc
