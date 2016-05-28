---
layout: default
title: "Internal configuration"
---
# Internal configuration instructions

This page is for use by the core *Semantics and Pragmatics* team.
If you aren't responsible for the final or pre-final compilation of TeX
before the article is officially published, you probably won't find this
page very useful.

## Prerequisites

* A computer with a functional LaTeX installation. The instructions below are tuned for OS X, because linguists tend to be Mac users, but should work on other non-Windows OS's without too much trouble. [MacTeX](https://tug.org/mactex/) is great for installing LaTeX on Mac OS X, but note that the download is ~2.4 GB, and will take a while to install even after downloading.
* Read/write access to the `sp-repo` repository at [bitbucket.org/fintelkai/sp-repo](https://bitbucket.org/fintelkai/sp-repo/). To get access, create an account on [Bitbucket.org](https://bitbucket.org/), and then email [Kai von Fintel](http://kaivonfintel.org/) with your Bitbucket username, asking for access.


# Process

There are a few steps that you'll need to go through once to everything set up.

Below this one-time setup, there are a few steps that you'll run whenever you
make changes and wish to push them to the git repository.

## One-time configuration

Follow the [installation](/install)
instructions, opting for BibLaTeX. The result should look like this:

    ~/Library/texmf
    └── tex
        └── latex
            ├── biblatex
            │   ├── bbx
            │   │   └── biblatex-sp-unified.bbx
            │   └── cbx
            │       └── sp-authoryear-comp.cbx
            ├── sp-hyperxmp.sty
            ├── sp-logo.pdf
            └── sp.cls

Prepare a working directory. I'll use a folder called `src/` in your home
directory, but you can put it anywhere you want.

    mkdir ~/src
    cd ~/src

Install the Lucida font by following the instructions on the
[Lucida installation](/lucida) page. Test that it's working by rendering the
[`basic.tex`](examples/basic.tex) file in this repository.

    curl http://info.semprag.org/examples/basic.tex > basic.tex
    pdflatex basic.tex

This should compile without complaint and be all in the Lucida font-face,
and look like [`basic.pdf`](examples/basic.pdf).

Prepare your machine's keys so that access to the bitbucket git repo is easier.
You may already have an SSH key set up.

    cat ~/.ssh/id_rsa.pub

If that returns anything, jump past this section. To create a new SSH key:

    ssh-keygen -t rsa
    # and then press enter multiple times to accept the defaults

Now that you definitely have a key in place, copy the public key to your
clipboard:

    # cat streams the contents of the id_rsa.pub file into pbcopy,
    # which copies the streamed input into the OS X clipboard.
    cat ~/.ssh/id_rsa.pub | pbcopy

Go to bitbucket.org, find the "Manage account" page, select "SSH keys" from
the sidebar, and click "Add key". Use whatever label you like, e.g., a
description of the computer you're currently using, and paste the contents of
your public key (which will be on your clipboard due to `pbcopy`) into the
"Key" input area.

Now you can clone the actual (private) repository of in-progress papers:

    cd ~/src
    git clone git@bitbucket.org:fintelkai/sp-repo.git

Let's say you want to render the Rojas-Esponda 2014 paper.

    cd sp-repo/sp-submissions/rojas-esponda-2014
    pdflatex rojas-esponda-v2-edited
    biber rojas-esponda-v2-edited
    pdflatex rojas-esponda-v2-edited

Before you commit anything, ensure that your username and email (which will
be paired with your commit) are correct. I would use something like this:

    git config --global user.name "Christopher Brown"
    git config --global user.email "chrisbrown@utexas.edu"


## Working

With git, the basic process goes like:

1. 'stage' your changes
2. commit what's staged
3. pull the latest version from bitbucket
4. merge your commit with the latest version (only required if the latest version is not the same as your version)
5. push your merged commit to bitbucket

Let's say you make some changes to `rojas-esponda-v2-edited.tex`.

    # examine pending changes (but does not make any changes)
    git status
    # stage the changed file
    git add rojas-esponda-v2-edited.tex
    # commit the change with a short message
    git commit -m "A few final changes to the rojas-esponda paper"
    # pull the latest
    git pull
    # alternatively, you can run 'git pull --rebase' if you're sure no one
    # has made changes to this file. this means you won't have to merge, but
    # it will be a bit messier if someone else has changed the file
    git push
    # the first time you do this, you'll probably need to run:
    # 'git push -u origin master', which just says default to the
    # conventional names that are used for repos and branches


# Fixes

These are automatic fixes for some of the inconsistencies that typically crop up in submissions.

## LaTeX

* `s/(e\.g\.)([^,])/$1,$2/gi`: Change "e.g. " to "e.g., "
* `s/(i\.e\.)([^,])/$1,$2/gi`: Change "i.e. " to "i.e., "


## Checks

Not everything that matches one of these is bad, but double check to be sure:

* `/['"][.,]/` light punctuation outside a quotation.
* `/[:;]['"]/` heavy punctuation inside a quotation.


## BibTeX Normalizations

Note that these are opinionated and stylistic, and don't have any effect on the output.

* `s/\}\}\s+@/}\n}\n\n@/g`: close each entry with a brace on its own line.
    + Unclear:

              ...
              Year = {2009}}

            @article{Roberts03,

    + Better:

              ...
              Year = {2009}
            }

            @article{Roberts03,

* `s/(\w)+\s*=\s*\{/\1 = {/g`: space out field-value separator, "=", with exactly one space on each side.
* `s/^[ \t]+/  /g`: force everything that's indented to be indented exactly two spaces.


## Items for editors only

* Make sure the keywords specified in the following places all match:
  - `\pdfkeywords{...}`
  - `\begin{keywords} ... \end{keywords}`
  - The article metadata on the OJS website
* Make sure that the abstract declared in `\begin{abstract} ... \end{abstract}` matches the one on the journal website.

<!--
  I'm leaving these out because the sp.bst should handle it.
  - Use of et al. should be reserved for works by more than 3 authors. [This is controlled by sp.bst and sp.cls - KvF]
  - Unlike years, forthcoming and to appear should be preceded by a comma, e.g., (Smith, forthcoming).
  - Use the full name of authors unless the author is known better by their initials.
  I'm not sure what this means:
  - Include fleqn in documentclass options
-->


## TODO

Add example article document (as opposed to a template).
