This property determines whether the [`TextBox`](https://create.roblox.com/docs/reference/engine/classes/TextBox) renders the
[`TextBox.Text`](https://create.roblox.com/docs/reference/engine/classes/TextBox#Text) string using rich text formatting. Rich text uses
simple markup tags to style sections of the string in bold, italics,
specific colors, and more.

To use rich text, simply include formatting tags in the
[`TextBox.Text`](https://create.roblox.com/docs/reference/engine/classes/TextBox#Text) string.

Note that when the [`TextBox`](https://create.roblox.com/docs/reference/engine/classes/TextBox) has this property enabled and the box
gains focus, the user will be able to edit and interact with the complete
XML string, including all of the formatting tags. When focus is lost, the
text will automatically parse and render the tags as rich text.