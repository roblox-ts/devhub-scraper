Returns text from the open editor. Must be called with 0, 2 or 4
arguments:

- If called with 0 arguments, gets the entire contents of the open editor.
- If called with 2 arguments, gets the text of the document starting at
(`startLine`, `startColumn`).
- If called with 4 arguments, gets the text of the document starting at
(`startLine`, `startColumn`) and ending at (`endLine`, `endColumn`).