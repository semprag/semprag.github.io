---
layout: default
title: "Instructions for submission in Word format"
---
# Word

Providing a document in Word format is problematic for a few reasons.

1. Translating from the proprietary `.doc` format into LaTeX is not straightforward. Copy and pasting from Word into a LaTeX editor loses all formatting, formulas, and structure. Currently, our method is to convert to `.docx` using a recent version of Word, and then process the resulting collection of slightly less proprietary XML files into `.tex` files, using a script like this one: [github.com/chbrown/docx-tex](https://github.com/chbrown/docx-tex). Even with the preprocessing step, making the LaTeX look like the original Word document is arduous.
2. Word encourages using a variety of colors, font-faces, and font-varieties, like boldface, small-caps, sans-serif, etc. Reducing those into a subset suitable for *S&P* is hard, because it's sometimes hard to tell what the different styles signify.
3. Word does not enforce bibliographic or referential consistency. It's easy to change an example and not realize that a reference to that example didn't get updated. And it's easy to introduce a citation in the main text while forgetting to include the full reference in the bibliography. Errors like these become apparent when converting to LaTeX, which enforces correctness of all references, but hard to resolve in many cases, where it is unclear which example the broken link was meant to refer to, or which article an author and year refer to.

Nevertheless, we will accept submissions of any typesetting choice, and will work with you to make sure the final product is up to both *S&P*'s and your standards. Just note that turnaround time on Word submissions is a great deal longer than LaTeX, due to these additional complications.

## Word guidelines

The following pointers will ensure that the automatic conversion step goes more smoothly.

Where I specify explicit steps below, I'm referring to Word for Mac 2011, which is the version I happen to have on my computer. Modern versions of Word all write to the same `.docx` "Office Open XML" format, so your version may have slightly different steps, but will end up in the same format.

Some of the steps below may incorporate psuedo–LaTeX markup, but all of these steps are meant to be performed in Word. Your Word document may not look as pretty after this process, but a lot of pretty is inevitably lost and has to be recreated in the Word → LaTeX conversion; the following helps ensure that none of the semantics are lost.

- Ensure that the document has proper metadata.
  * `File` → `Properties...`
    + You should fill in the `Title`, `Author`, and `Keywords` inputs.
- Your abstract should be at the beginning of the paper.
  * It should be immediately preceded by a line with _only_ the text `<abstract>`,
  * and immediately followed by a line with _only_ the text `</abstract>`.
  * This is non-standard syntax, but will help the converter know what part to format as the abstract.
- Use only one font, with only normal, bold, italic, or small-caps styles. You should only use one font size in the body of your paper, except for subscripts and superscripts (which Word naturally sizes smaller).
  * If you must use more than one font, underlining, or different font sizes, provide a postscript or simply a page at the end of your document describing what each font and font style designates.
- If you use unusual symbols, include a list of each symbol its intended meaning in a postscript. I would not consider, for example, `∈`, `⊉`, or `∝`, unusual, but if you use them in atypical ways, or if you use potentially ambiguous symbols, like `⊗` or `⤳`, or particularly odd ones like `⋵` or `⊼`, describe them in the postscript, so that we will know which LaTeX symbols to resolve them to. Include the Unicode character name if possible.
- Examples should be numbered continuously throughout your document, except for footnotes, which each have independent numbering, and should not be referred to outside the footnote.
  * Use Word's "Fields," not literal numbering. You are not required to use Word's built-in field, `NumberDefault`, but it's probably the easiest way:
    1. `Insert` → `Field...` → Enter `LISTNUM NumberDefault \L 4` (`\L 4` indicates parentheses surrounding an arabic numeral) into the text box, and click `OK`.
    2. You can repeat those steps to insert additional examples, or you can copy & paste the `(1)` entity as needed.
  * Sub-examples should use Word's basic ordered list formatting.
  * When referring to these numbered examples, use Word's "Cross-reference" tool.
    1. `Insert` → `Cross-reference...`
    2. "Reference type" should be "Numbered item"
    3. "Insert reference to" should be "Paragraph number"
    4. "Insert as hyperlink" should be checked.
    5. "Include above/below" should _not_ be checked.
    6. (If you right-click on the resulting entity and click "Toggle Field Codes" you should see something like `{ REF _Ref1234 \r \h }`. Right-click again and click "Toggle Field Codes" again to show the resolved reference.)
    <!-- http://office.microsoft.com/en-us/word-help/field-codes-ref-field-HP005186139.aspx -->
- Use footnotes instead of endnotes. Endnotes will be converted to footnotes.


## Yet to be determined

- Bibliography formatting
- Citation formatting
- Inline quotes
- Inline language data
- Highlighted technical terms
- Scare quotes
- Figure extraction, minimum image resolution, archive/packaging structure
- Equations (typeset using a WYSIWYG LaTeX editor?)
- Complete Word example, numbering and cross-reference method, format of glosses


## Automatic validation

There is an online validator in the works. When it is ready, there will be a link to it here, and it will help you work through the preceding guidelines.

