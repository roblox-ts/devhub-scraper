Determines the starting position of a text selection, or -1 if the TextBox
has no range of selected text. If the value is -1 or equivalent to
[`CursorPosition`](https://create.roblox.com/docs/reference/engine/classes/TextBox#CursorPosition), there is no range of text
selected. This property uses the same positioning logic as CursorPosition.
SelectionStart will be greater than CursorPosition if the cursor is at the
beginning of a selection, and less than CursorPosition if the cursor is at
the end.