IgnoreGuiInset is a boolean property of ScreenGuis that, when set to true,
will force the [GUI Inset](https://create.roblox.com/docs/reference/engine/classes/GuiService#GetGuiInset) imposed by Roblox's
CoreGuis to be ignored by this ScreenGui and its descendants. This means
that an element with a UDim2 size of `{1,0},{1,0}` will fill up the entire
screen, without a 36 pixel gap reserved for Roblox's top bar.