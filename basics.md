---
layout: default
title: "The S&P LaTeX system"
---

## Formats

While we accept submissions in both LaTeX and Microsoft Word formats, we publish all articles using LaTeX typesetting. We prefer LaTeX submissions, because it is easier to remain true to the author's vision when typeset in the *S&P* style and because it expedites the production process, thus leading to much faster publication. We therefore strongly encourage authors to submit in LaTeX format, and ideally in our house style. If you yourself are not familiar with LaTeX, maybe a friend or colleague could help you with preparing your manuscript. If you have to submit in Word format, please read our [Word-specific instructions](word).

## Style guidelines

Compiling your LaTeX document in the *S&P* house style requires using the documentclass `sp` and a custom bibliography style. See the [installation instructions](/install) for details on where to put these sources.

In our experience, even submissions in LaTeX format often require intensive re-typesetting and additional work on the bibliography. We hope that authors can take some of the burden of that work, again in the interest of an expedited publication process. To that purpose, please read [our style guidelines](style), especially as they pertain to LaTeX submissions.

### Frontmatter (the preamble)

Instructions for the content that comes before `\begin{document}`.

#### Metadata

The `\pdf*{}` commands control the metadata inserted into the published PDF.
Only ASCII characters are allowed in these fields, otherwise the `pdflatex` compiler will throw very hard to debug errors.

#### Title

The `\title{}` can contain a `\thanks{}` acknowledgements section. If you do not give `\title[Something Short]{Full}` the optional argument (here, "Something Short"), no title will be shown in the headers of subsequent pages. If your title is shorter than 30 characters, use the same title for each.

#### Authors

There is no limit to the number of authors you can have. Each use of `\spauthor{}` should be separated by `\AND`.

The optional argument to `\author` (inside square brackets) is what appears in the header on subsequent pages. Just give your full name. For two authors, you can give both full names conjoined with *and*. When the author list becomes too long, use last names only, and use *&* instead of *and*. If you have more than three authors, use "Murphy et al." (where Murphy is the last name of the first author).


## The document

### Examples

Our general formatting rules for examples:

- Example numbers appear in round parentheses, left-aligned.
- Subexamples are labeled with lowercase alphabetical letters, each followed by a period.
- Equations and examples should be numbered in the same sequence.
- References to examples appear inside parentheses, with no punctuation between elements.
  - E.g., we can refer to (12), or to its subexample (12a).
- Reference ranges should look like (12)–(14)
  - For subexamples, both (12a–e) and (12a)–(12e) are acceptable, but be consistent.

For simple needs, we have found that the [linguex package](http://www.ctan.org/pkg/linguex) works well with our style. You can load it by simply passing a `linguex` option to `sp.cls`, i.e., `\documentclass[linguex]{sp}`.

For more complex needs (complex glosses, for example), we strongly recommend the [expex package](http://ctan.org/pkg/expex). You can load it by passing the `expex` option to `sp.cls`, i.e., `\documentclass[expex]{sp}`.

Both `linguex` and `expex` are very sensitive to whitespace (perhaps because they date back to plain TeX).
If you use one of them, be careful that whitespace around `\label{...}` calls do not produce extra (unintended) spacing in the output.

We advise against all other example packages (`gb4e`, `covington`, etc.), because in our experience they create difficult integration problems with our house style. If you are already using `gb4e` syntax, install and use our [`gb4e-emulate.sty`](https://raw.githubusercontent.com/semprag/tex/master/gb4e-emulate.sty) package, which specifies proper S&P spacing.


### BibTeX and Citations

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
- `\possciteauthor{montague:1974}`: Montague's
- `\secposscitet{montague:1974}{2}`: Montague's (1974: §2)
- `\seccitealt{montague:1974}{2}`: Montague 1974: §2
- `\seccitep{montague:1974}{2}`: (Montague 1974: §2)

Every reference to an article must be coded with one of these commands.
This ensures that all bibliographic entries are included, and, since these automatically hyperlink to the corresponding entry in the bibliography, allows your readers to determine what work you are referring to.

### Images and custom figures

You can easily include a range of figures using the `\includegraphics{}` command.

    \includegraphics[width=4in]{figure-1b.pdf}
    \includegraphics[height=1in]{my-pet-cat.png}
    \includegraphics[width=\textwidth]{image-file.jpg}

N.B. `\includegraphics` prefers filenames without underscores.

### Floats, for figures and tables

The `sp.cls` includes the `float` package by default.
If you need to modify the S&P `float` configuration temporarily, you can:

    % outside brackets ensure that the style returns to normal
    % after the temporary adjustment
    {
      \floatstyle{plain}
      % See the `float` documentation for other styles.
      \restylefloat{figure}
      \begin{figure}
        \includegraphics{some-carefully-named.pdf}
        Your figure goes here.
      \end{figure}
    }

## Backmatter

The end sections are organized in this order:

1. Appendix
2. References
3. Addresses

### Appendix

The `appendix` environment is a good home for lengthy proofs, fragments, experimental materials, etc.

    \begin{appendix}
      ...
    \end{appendix}

### References

Simply use the following, where you have a file `your-references.bib` in the same folder.

    \bibliography{your-references}

If you have a system-wide BibTeX file somewhere else that's accessible to your LaTeX library, that is fine too.
However, when submitting your article, you will need to include whatever `.bib` file you use here.

### Addresses

Full author addresses appear at the end of each article.
They are specified in an `addresses` environment, which consists of `address` environments:

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

## Packages included by sp.cls

The `sp.cls` file includes the following packages by default, which means you have access to all their commands without having to `\usepackage{}` it in your own document (in fact, it is a very good idea to delete the relevant `\usepackage{}` commands from your preamble):

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
- linguex (if you have specified the `\documentclass[linguex]{sp}` option)
- expex (if you have specified the `\documentclass[expex]{sp}` option)

## Prohibited packages

The following packages overwrite or violate the *S&P* style, and should not be used.

- geometry
- fullpage
- epltxfn
- pslatex
- rotating
- multicol
- setspace
- caption


## Turing completeness and complexity

LaTeX is infamous for being Turing complete.
However, the `.tex` sources you submit for publication should be as simple and finite as possible.

* Avoid multiple source `.tex` files.
* If you need additional functionality, prefer packages on CTAN.
  If you include a custom `.sty` file, explain what it does and why you need it.
  Do not import packages that your document doesn't use.
* Prefer a little bit of repetition over special purpose macros.
  I.e., it's preferable to have three or four instances of `$_{\mathcal{Z}}$` throughout your paper rather than a special `\newcommand{\subZ}{\ensuremath{_\mathcal{Z}}}` command and three or four instances of `\subZ`.
  If you have 20+ instances, the `\newcommand` approach becomes more palatable.
* Do not include the `sp.cls` and `sp.bst` files in your submission (or `gb4e-emulate.sty`, if you are using it).
  Your versions of those files should match [ours](https://github.com/semprag/tex).
  Any modifications to the defaults should be made and explicitly described in your submitted `.tex` document, not the class or BibTeX style file.
* Your `.bib` file should, optimally:
  - include only the entries required by your document
  - exclude non-standard fields (e.g., BibDesk includes fields like "Date-Added", "Date-Modified", and "Bdsk-Url-1")
  - be proper BibTeX

For both `.tex` and `.bib` sources:

* Convert tabs to spaces (tabs are ambiguous)
* Delete trailing whitespace
* Use UTF-8 (or simply ASCII, which is a subset of UTF-8)


## Postscript

We strongly recommend rendering directly to PDF with `pdflatex`, avoiding `dvi` and `ps` formats entirely.
This ensures that line breaks and hyperlinks appear correctly.

If you must use `postscript` for certain diagrams, we recommend rendering those to PDF format independently (e.g., via `latex` & `dvipdf` or by using `ps2pdf`), and then importing the result directly into your *S&P* submission:

    \includegraphics{used-to-be-ps.pdf}

Failing that, you can use the option `\documentclass[dvips]{sp}` or the `pdftricks` package.

If you provide us with a TeX document that requires postscript, we will most likely convert your figures to PDF and render the document with `pdflatex` anyway. By submitting in `pdflatex`-able format, with graphics in separate documents, you will ensure that the final publication is as close as possible to what you envision.
