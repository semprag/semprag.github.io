---
layout: default
title: "Internal configuration"
---
# Internal configuration instructions

This page is for use by the core *Semantics and Pragmatics* team.
If you aren't responsible for the final or pre-final compilation of TeX
before the article is officially published, you probably won't find this
page very useful.

* [Lucida installation](/lucida)

# Fixes

## LaTeX

* `s/(e\.g\.)([^,])/$1,$2/gi`: Change "e.g. " to "e.g., "
* `s/(i\.e\.)([^,])/$1,$2/gi`: Change "i.e. " to "i.e., "


## Checks

Not everything that matches one of these is bad, but double check to be sure:

* `/['"][.,]/` light punctuation outside a quotation.
* `/[:;]['"]/` heavy punctuation inside a quotation.


## Normalizations

Note that these are biased and stylistic, and don't have

BibTeX normalizations:

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

## TODO

Add example article document (as opposed to a template).
