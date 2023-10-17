This property controls the maximum number of graphemes (or units of text)
that are shown on the [`TextLabel`](https://create.roblox.com/docs/reference/engine/classes/TextLabel). It is primarily provided as an
easy way to create a "typewriter effect" where the characters appear one
at a time.

Changing the property does not change the position or size of the visible
graphemes - the layout will be calculated as if all graphemes are visible.

Setting the property to -1 disables the limit and shows the entirety of
the [`TextLabel.Text`](https://create.roblox.com/docs/reference/engine/classes/TextLabel#Text).