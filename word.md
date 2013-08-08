---
layout: default
title: "Instructions for submission in Word format"
---
# Word

Providing a document in Word format is problematic for a few reasons.

1. Translating from the proprietary `.doc` format into LaTeX is not straightforward. Copy and pasting from Word into a LaTeX editor loses all formatting, formulas, and structure. Currently, our method is to convert to `.docx` using a recent version of Word, and then process the resulting collection of slightly less proprietary XML files into `.tex` files, using a script like this one: [github.com/chbrown/docx-tex](https://github.com/chbrown/docx-tex). Even with the preprocessing step, making the LaTeX look like the original Word document is arduous.
2. Word encourages using a variety of colors, font-faces, and font-varieties, like boldface, small-caps, sans-serif, etc. Reducing those into a subset suitable for *S&P* is hard, because it's sometimes hard to tell what the different styles signify.
3. Word does not enforce bibliographic or referential consistency. It's easy to change and example and not realize that a reference to that example didn't get updated. And it's easy to introduce a citation in the main text while forgetting to include the full reference in the bibliography. Errors like these become apparent when converting to LaTeX, which enforces correctness of all references, but hard to resolve in many cases, where it is unclear which example the broken link was meant to refer to, or which article an author and year refer to.

Nevertheless, we will accept submissions of any typesetting choice, and will work with you to make sure the final product is up to both *S&P*'s and your standards. Just note that turnaround time on Word submissions is a great deal longer than LaTeX, due to these additional complications.