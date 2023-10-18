The [`UIStroke`](https://create.roblox.com/docs/reference/engine/classes/UIStroke) component allows for more advanced border effects.

This property determines how wide a [`GUI's`](https://create.roblox.com/docs/reference/engine/classes/GuiObject) border should
render, in pixels.

This property, [`GuiObject.BorderColor3`](https://create.roblox.com/docs/reference/engine/classes/GuiObject#BorderColor3), and
[`GuiObject.BackgroundTransparency`](https://create.roblox.com/docs/reference/engine/classes/GuiObject#BackgroundTransparency) determine how the border of a GUI
element should look.

The border width extends outward the perimeter of the rectangle. For
instance, a GUI with a width of 100 pixels and BorderSizePixel set to 2
will actually render 102 pixels wide.

Setting this to 0 will disable the border altogether.