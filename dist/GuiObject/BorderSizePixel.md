The [UIStroke](https://developer.roblox.com/en-us/api-reference/class/UIStroke) component allows for more advanced border effects.

This property determines how wide a [GUI's](https://developer.roblox.com/en-us/api-reference/class/GuiObject) border should render, in pixels.

This property, [GuiObject.BorderColor3](https://developer.roblox.com/en-us/api-reference/property/GuiObject/BorderColor3), and [GuiObject.BackgroundTransparency](https://developer.roblox.com/en-us/api-reference/property/GuiObject/BackgroundTransparency) determine how the border of a GUI element should look.

The border width extends outward the perimeter of the rectangle. For instance, a GUI with a width of 100 pixels and BorderSizePixel set to 2 will actually render 102 pixels wide.

Setting this to 0 will disable the border altogether.