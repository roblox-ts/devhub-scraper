**CursorPosition** determines the offset of the text cursor in bytes, or
-1 if the TextBox is not currently being edited. A value of 1 represents
the beginning, the position before the first byte in the
[Text](https://create.roblox.com/docs/reference/engine/classes/TextBox#Text) property. When used in conjunction with the
[SelectionStart](https://create.roblox.com/docs/reference/engine/classes/TextBox#SelectionStart) property, it is possible to both
get and set selected text within a TextBox.

![A visual explanation of how CursorPosition works][1]

It should be noted that the units of this property is **bytes** and that
many unicode characters such as emoji are **longer than 1 byte**. For
instance, if a player types into the TextBox "Hello👋" – "Hello"
immediately followed by the waving hand sign – the cursor position
would be 10, not 7, since the emoji uses 4 bytes.

[1]: https://prod.docsiteassets.roblox.com/assets/blteef3c173301b0338/TextBox.CursorPosition.jpg