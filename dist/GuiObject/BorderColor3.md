The [UIStroke](https://create.roblox.com/docs/reference/engine/classes/UIStroke) component allows for more advanced border effects.

BorderColor3 determines the color of a [UI](https://create.roblox.com/docs/reference/engine/classes/GuiObject) element's
rectangular border (also known as the stroke color).

This is separate from the UI element's [GuiObject.BackgroundColor3](https://create.roblox.com/docs/reference/engine/classes/GuiObject#BackgroundColor3). If
you set a UI element's border and background colors to the same color, you
will be unable to distinguish the two.

Other properties properties that determine the visual properties of the
border include [GuiObject.BorderSizePixel](https://create.roblox.com/docs/reference/engine/classes/GuiObject#BorderSizePixel) and
[GuiObject.BackgroundTransparency](https://create.roblox.com/docs/reference/engine/classes/GuiObject#BackgroundTransparency).

Note that you will not be able to see an element's border if its
BorderSizePixel property is set to 0.