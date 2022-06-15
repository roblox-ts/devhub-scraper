This property controls the maximum number of graphemes (or units of text) that are shown on the [TextBox](https://developer.roblox.com/en-us/api-reference/class/TextBox), regardless of whether it's showing the [TextBox.PlaceholderText](https://developer.roblox.com/en-us/api-reference/property/TextBox/PlaceholderText) or [TextBox.Text](https://developer.roblox.com/en-us/api-reference/property/TextBox/Text).

Changing the property does not change the position or size of the visible graphemes - the layout will be calculated as if all graphemes are visible.

Setting the property to -1 disables the limit and shows the entirety of the [TextBox.Text](https://developer.roblox.com/en-us/api-reference/property/TextBox/Text).