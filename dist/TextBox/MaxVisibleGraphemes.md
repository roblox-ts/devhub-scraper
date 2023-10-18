This property controls the maximum number of graphemes (or units of text)
that are shown on the [`TextBox`](https://create.roblox.com/docs/reference/engine/classes/TextBox), regardless of whether it's showing
the [`TextBox.PlaceholderText`](https://create.roblox.com/docs/reference/engine/classes/TextBox#PlaceholderText) or [`TextBox.Text`](https://create.roblox.com/docs/reference/engine/classes/TextBox#Text).

Changing the property does not change the position or size of the visible
graphemes - the layout will be calculated as if all graphemes are visible.

Setting the property to -1 disables the limit and shows the entirety of
the [`TextBox.Text`](https://create.roblox.com/docs/reference/engine/classes/TextBox#Text).