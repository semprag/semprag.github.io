---
layout: default
title: Production and Development
---
# Internal configuration instructions

This page is for use by the core *Semantics and Pragmatics* team and production contributors.

**Authors** (prospective or accepted) **do not need to follow these instructions**.


## Typesetting and proofreading

You are responsible for ensuring that the paper you are assigned adheres to the *S&P* standards described on this site, and is free of grammatical errors and any other typos.

It's the responsibility of the shepherding editor to verify the content, but if you notice anything that seems wrong or doesn't make sense, include that in your report.


## LaTeX

As an S&P production contributor, you must be able to compile LaTeX sources on your local machine.

* On Mac OS X, install LaTeX from [MacTeX](https://tug.org/mactex/).
  Note that the download is nearly 3 GB, and will take a while to install even after downloading.
* On Ubuntu: `apt-get texlive-full biber`

Once LaTeX is installed, follow the S&P-specific [installation](/install) instructions, installing both the BibTeX and BibLaTeX style files.
You should also install the `gb4e-emulate.sty`, `sp-hyperxmp.sty`, and `sp-logo.pdf` files from [semprag/tex](https://github.com/semprag/tex) to your `TEXMFHOME/tex/latex/` directory, alongside `sp.cls`.


## GitHub access

We keep all articles under source control in a private repository at [semprag/submissions](https://github.com/semprag/submissions). You will need a GitHub account to access this repository: [sign up here](https://github.com/join).
Please use an intelligible username, since all of your changes will be annotated with that username.

Once you have an account, email us at [latex@semprag.org](mailto:latex@semprag.org) with your username, and one of the [semprag organization](https://github.com/semprag) administrators will add you.

By default, whenever you need to write to a git repository on GitHub, or read from a private repository, you will have to enter your GitHub username and password. You can avoid this by adding your SSH key to your GitHub account or by caching your GitHub credentials. The latter method, caching your password, will probably be easier.

* [Generating an SSH key](https://help.github.com/articles/generating-an-ssh-key/) and then [Adding an SSH key to your GitHub account](https://help.github.com/articles/adding-a-new-ssh-key-to-your-github-account/)
* [Caching your GitHub password in Git](https://help.github.com/articles/caching-your-github-password-in-git/)

Before you commit anything, ensure that your default git username and email (which will be paired with your commit) are correct.
I use these settings:

    git config --global user.name "Christopher Brown"
    git config --global user.email "chrisbrown@utexas.edu"


## Local development

Once you have been given access on GitHub, [install the Lucida font](https://github.com/semprag/lucida).
Test that it's working by rendering the [`basic.tex`](examples/basic.tex) file in this repository.

    curl http://info.semprag.org/examples/basic.tex > basic.tex
    pdflatex basic.tex

This should compile without complaint and be all in the Lucida font-face,
and look like [`basic-lucida.pdf`](examples/basic-lucida.pdf).

Prepare a working directory. I'll use a folder called `src/` in your home
directory, but you can put it anywhere you want.

    mkdir ~/src
    cd ~/src

Now clone the [semprag/submissions](https://github.com/semprag/submissions) repository:

    git clone https://github.com/semprag/submissions.git

That creates the directory `submissions/` inside your current working directory (`~/src`).

Now let's say you want to render the Rojas-Esponda 2014 paper:

    cd submissions/rojas-esponda-2014
    pdflatex rojas-esponda-v2-edited
    biber rojas-esponda-v2-edited
    pdflatex rojas-esponda-v2-edited


## Working with git

Once you've cloned the submissions repository, the basic process goes like this
(with examples after making some changes to `rojas-esponda-v2-edited.tex`):

1. Examine all the changes you've made to the repository

       git status

2. Stage specific changed files

       git add rojas-esponda-v2-edited.tex

3. Commit everything you've staged with, providing a short message

       git commit -m "Finalized citet->citealt fixes in rojas-esponda article"

4. Pull the latest version from GitHub

       git pull

    * If someone else has pushed changes to the `submissions` repository since you `clone`d it or last `pull`ed,
      git will prompt you to merge your changes with those. The default merge message is fine.
      Otherwise, it will just say "Already up-to-date." which means you're ready to push.
    * Alternatively, you can run `git pull --rebase` to pretend like you `pull`ed before you committed your changes.
      - If you're sure no one else has made changes to the files you've been working, this is a little bit cleaner, since it doesn't require a merge commit.
      - But if any of your changed files _have_ been modified, it might end up being messier.

5. Push your merged commit to GitHub:

       git push origin master

    * The first time you do this, you can call `git push -u origin master`, which sets the defaults for future `git push` calls, allowing you to omit the remote (`origin`) and the branch (`master`), and simply call `git push`.
      - The names `origin` and `master` are the defaults built into git.


## Standards

1. **Ground rules** (see [CONTRIBUTING.md](https://github.com/semprag/submissions/blob/master/CONTRIBUTING.md) for the latest version):
   * All source files should use UTF-8 encoding (ASCII is a subset of UTF-8)
   * Spaces, not tabs
   * No trailing whitespace
   * LF line endings, a.k.a. "Unix-style" (git should handle this for you via the [`.gitattributes`](https://github.com/semprag/submissions/blob/master/.gitattributes) config file).
2. Avoid immaterial changes, like manually interpreting (i.e., beta-reducing) a LaTeX macro, or re-folding a paragraph to some different line width.
   * This helps when reviewing changes; `git diff --word-diff` should show only the significant / relevant things you've changed.
3. Fix typos and style-guide violations outright
   * No need to comment on these, or any other non-controversial changes
4. In the case of questionable grammar or prosody, err on the side of artistic license.
   * If the author says something awkward but not precisely ungrammatical,
    point out what's wrong and how you would suggest fixing it.
5. Record your comments in one place only, and formulate them like a to-do list that the author can work through.
   * If working directly with the `.tex` file, add `%` comments in the `.tex` file, and mark these comments that require authorial attention with a string that is easily searchable. This way, the author can search through the document and deal with your suggestions like a to-do list, checking items off the list by removing the comment, whether or not they implement your suggestion.
     - E.g., I usually insert a new line directly after the offending usage, describing the problem and then end with '^chb'.
     - If you add your comment at the end of the offending line, put a space before the `%` of the comment (this improves `--word-diff` output)
   * Alternatively, list your comments in the GitHub issue in the `semprag/submissions` repository corresponding to that paper (create one if needed)
   * If that's not possible, list them in a single text file
   * If working with a PDF, ensure that the author can view all of your changes in one place, or navigate directly from one comment to the next (they shouldn't have to scan through each page of the paper to find all of the sticky notes)
6. If you're working with the full S&P-style LaTeX production pipeline:
   * LaTeX compilation should finish without errors or warnings
     - Do your best to resolve any `underfull` or `overfull` violations
   * Biber should run without errors or warnings
