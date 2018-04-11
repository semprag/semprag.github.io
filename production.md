---
layout: default
title: Production and Development
---

## Internal configuration instructions

This page is for use by the core *Semantics and Pragmatics* team and production contributors.

**Authors** (prospective or accepted) **do not need to follow these instructions**.


## Typesetting and proofreading

You are responsible for ensuring that the paper you are assigned adheres to the S&P standards described on this site, and is free of grammatical errors and any other typos.

It's the responsibility of the shepherding editor to verify the content, but if you notice anything that seems wrong or doesn't make sense, include that in your report.


## LaTeX

As an S&P production contributor, you must be able to compile LaTeX sources on your local machine.

* On macOS, install LaTeX from [MacTeX](https://tug.org/mactex/).
  You should use the full version (not the "Smaller Download") of the current TeX distribution.
  Note that the download is approximately 3 GB, and will take a while to install even after downloading.
* On Ubuntu: `apt-get texlive-full biber`

As of 2017, the BibLaTeX compile process requires at least the 2016 distribution to build properly.

Once LaTeX is installed, follow the S&P-specific [installation](/install) instructions, installing both the BibTeX and BibLaTeX style files.
You should also install the `gb4e-emulate.sty`, `sp-hyperxmp.sty`, and `sp-logo.pdf` files from [semprag/tex](https://github.com/semprag/tex) to your `TEXMFHOME/tex/latex/` directory, alongside `sp.cls`.


## GitHub access

We keep all articles under source control in a private repository at [semprag/submissions](https://github.com/semprag/submissions). You will need a GitHub account to access this repository: [sign up here](https://github.com/join).
Please use an intelligible username, since all of your changes will be annotated with that username.

Once you have an account, email us at [latex@semprag.org](mailto:latex@semprag.org) with your username, and one of the [semprag organization](https://github.com/semprag) administrators will add you.
You will receive an invitation to be a member of a team of the `semprag` GitHub organization via the email associated with that account.
You'll also be notified of your standing invitations when you log onto GitHub.

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

Now let's say you want to render the Willer 2016 paper:

    cd submissions/willer-2016

The first time you run `pdflatex` will produce lots of "LaTeX Warning: Reference (or Citation) X on page Y undefined on input line Z" messages, which is fine.
(If you omit the `.tex` extension, `pdflatex` will infer it.)

    pdflatex lessons

There will now be a `lessons.aux` file, and when in `biblatex` mode, `lessons.bcf` and `lessons.run.xml` files.
Now run `biber` to compile the BibLaTeX, which reads the `lessons.bcf` file you just created, and the paper's specified bibliography resource (in this case, `Philosophy.bib`).
(It's customary to omit the `.bcf` extension here.)

    biber lessons

Biber writes its TeX-ready output to `lessons.bbl` (and logs to `lessons.blg`).
Running `pdflatex` again will incorporate that file and all the intermediate output from the last run to incorporate all citations / references.

    pdflatex lessons

All the citations and references should now show up, but since paging has changed, you might need to run `pdflatex` one more time.

    pdflatex lessons

At this point, if the LaTeX compiler log still complains about undefined references or citations, there is something legitimately missing from the document that needs to be fixed.


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


## Integration with Overleaf

Overleaf is an online LaTeX editor, which makes it very easy to get started typesetting.
Once an Overleaf project has been set up, you need only provide the collaborator/proofreader/typesetter with a link to the project.
They will need to create an Overleaf account if they do not have one, but they will not need to install LaTeX or do any of the steps below.

The steps below are only for the initial creation and setup of the project.
The commands below assume that you've `git clone`'d the [`lucida`](https://github.com/semprag/lucida) and [`tex`](https://github.com/semprag/tex) repositories onto your local machine, and that they are up to date.

1. Create a new project in your Overleaf account, and note the URL:
   * This should be a "Basics" → "Blank Paper" project (but it doesn't really matter since we don't use any of the provided files)
   * Click the "Share" button in the project's navigation bar and copy the Git URL, which looks something like:

         https://git.overleaf.com/12345678abcdefghijkl
2. Clone the project locally, but give it a better name, like `Author20xx-overleaf`, and delete the `main.tex` file:

       git clone https://git.overleaf.com/12345678abcdefghijkl Author20xx-overleaf
       cd Author20xx-overleaf
       rm main.tex
3. Copy the S&P style files and Lucida font `.otf` files into that new directory, `Author20xx-overleaf/`
   (this is the part that assumes your the `tex` and `lucida` repositories are in a specific place):

       cp ~/semprag/tex/{.gitignore,sp.cls,sp.bst} .
       cp -R ~/semprag/lucida/opentype fonts
4. Copy in the source files for the S&P submission, its `*.tex`, `*.bib`,
   and whatever other resources it includes (like `gb4e-emulate.sty`),
   and set `lucidaot` in the class options, e.g.:

       \documentclass[lucidaot]{sp}

   You should now be able to render the document from your local machine if you have LaTeX installed,
   but this is not required: `latexmk -xelatex`
5. Stage, commit, and push your changes:

       git add .
       git commit -m "Re-initialize with sources for Author's 20xx submission"
       git push
6. Back on the Overleaf project page, click the "⚙" (gear) button in the navigation bar at the top right.
   Change the "Advanced Build Options" → "LaTeX Engine" value to "XeLaTeX"; then click "Save Project Settings".
   Overleaf should re-render accordingly, and everything _should_ be in working order!

**Disclaimer:** The Lucida style file for LaTeX, `lucimatx.sty`, does a lot more than just load and configure the PostScript-format fonts.
There are a lot of little tweaks and customizations that have not been ported to the OpenType integration.
While the appearance of a document rendered with Lucida OpenType is much closer to the production result than with Times or Computer Roman, it isn't pixel-perfect; in particular, the horizontal spacing of equations in math environments seems to be the most dissimilar aspect.

### Overleaf "One-click to open"

Assuming you're logged into Overleaf (or can be) in this browser, submitting the following form (by clicking the button) creates a new Overleaf project with several of the requirements pre-configured.

<form action="https://www.overleaf.com/docs" method="post" target="_blank" rel="noopener">
  <!-- Turn off the default Overleaf tutorial splash screen -->
  <input type="hidden" name="splash" value="none">
  <!-- Set the compiler to XeLaTeX instead of "Choose Automatically" -->
  <input type="hidden" name="engine" value="xelatex">
  <!-- Add basic source files -->
  <input type="hidden" name="snip_uri[]" value="http://info.semprag.org/tex/sp.cls">
  <input type="hidden" name="snip_uri[]" value="http://info.semprag.org/tex/sp.bst">
  <input type="hidden" name="snip_uri[]" value="https://raw.githubusercontent.com/semprag/tex/master/.gitignore">
  <!-- Add BibLaTeX source files for good measure -->
  <input type="hidden" name="snip_uri[]" value="http://info.semprag.org/biblatex-sp-unified/bbx/biblatex-sp-unified.bbx">
  <input type="hidden" name="snip_uri[]" value="http://info.semprag.org/biblatex-sp-unified/cbx/sp-authoryear-comp.cbx">
  <!-- And the template file, since Overleaf is looking for something with a \documentclass -->
  <input type="hidden" name="snip_uri[]" value="http://info.semprag.org/examples/sp-template.tex">
  <!-- Submit -->
  <button>Click here to auto-populate a new Overleaf project</button>
  <label>
    <span>Protected</span>
    <input type="checkbox" name="protected" value="required" checked>
  </label>
</form>

You'll still need to:

* Note the "Clone With Git" URL.
* `git clone` the project (repository) locally.
* Add the Lucida OTF fonts.
* Add the article's `.tex` and `.bib` (etc.) sources, replacing the `sp-template.tex` placeholder.
* Add/set `[lucidaot]` in the class options.
* `git commit ...` and `... push` to sync your changes.

Reference:
* [Overleaf "API" documentation](https://www.overleaf.com/devs)

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
