**UIGradient** is a [UIComponent](https://developer.roblox.com/en-us/api-reference/class/UIComponent) that applies a color and transparency gradient to the UI elements rendered by the parent [GuiObject](https://developer.roblox.com/en-us/api-reference/class/GuiObject). The appearance of the gradient is configurable through the following properties:

*   [Color](https://developer.roblox.com/en-us/api-reference/property/UIGradient/Color), a [ColorSequence](https://developer.roblox.com/en-us/api-reference/datatype/ColorSequence)
*   [Transparency](https://developer.roblox.com/en-us/api-reference/property/UIGradient/Transparency), a [NumberSequence](https://developer.roblox.com/en-us/api-reference/datatype/NumberSequence)
*   [Offset](https://developer.roblox.com/en-us/api-reference/property/UIGradient/Offset), a [Vector2](https://developer.roblox.com/en-us/api-reference/datatype/Vector2)
*   [Rotation](https://developer.roblox.com/en-us/api-reference/property/UIGradient/Rotation), a number

![Gradient Window Example](https://developer.roblox.com/assets/blt554b31323e805496/ILoveGradients.jpg)

A UIGradient will not apply to child or descendant GuiObjects. In order to apply the the same gradient to multiple objects, you will need multiple UIGradients.

Supported Objects
-----------------

You can apply gradients to [Frame](https://developer.roblox.com/en-us/api-reference/class/Frame), [TextLabel](https://developer.roblox.com/en-us/api-reference/class/TextLabel), [TextButton](https://developer.roblox.com/en-us/api-reference/class/TextButton), [ImageLabel](https://developer.roblox.com/en-us/api-reference/class/ImageLabel), [ImageButton](https://developer.roblox.com/en-us/api-reference/class/ImageButton), and [ViewportFrame](https://developer.roblox.com/en-us/api-reference/class/ViewportFrame). However, [ScrollingFrame](https://developer.roblox.com/en-us/api-reference/class/ScrollingFrame) and [TextBox](https://developer.roblox.com/en-us/api-reference/class/TextBox) are not currently supported.

Performance Considerations
--------------------------

In order to efficiently use a UIGradient, follow these principles:

*   Avoid using more than 6 color stops on the [Color](https://developer.roblox.com/en-us/api-reference/property/UIGradient/Color) sequence.
*   Avoid using a UIGradient on any object that applies a text stroke ([TextStrokeColor3](https://developer.roblox.com/en-us/api-reference/property/TextLabel/TextStrokeColor3)): the gradient will try to blend with strokes and borders, and may cause performance issues.
*   Avoid setting [Color](https://developer.roblox.com/en-us/api-reference/property/UIGradient/Color) and [Transparency](https://developer.roblox.com/en-us/api-reference/property/UIGradient/Transparency) frequently: this causes the sequence of colors to rebuild often, which is expensive. If possible, set these properties only once and try to animate the [Offset](https://developer.roblox.com/en-us/api-reference/property/UIGradient/Offset) or [Rotation](https://developer.roblox.com/en-us/api-reference/property/UIGradient/Rotation) properties to achieve a similar effect. Alternatively, you can change the color of the parent [GuiObject](https://developer.roblox.com/en-us/api-reference/class/GuiObject) using such properties as [BackgroundColor3](https://developer.roblox.com/en-us/api-reference/property/GuiObject/BackgroundColor3), [ImageColor3](https://developer.roblox.com/en-us/api-reference/property/ImageLabel/ImageColor3), or [TextColor3](https://developer.roblox.com/en-us/api-reference/property/TextLabel/TextColor3).
*   When applying an unchanging gradient on a UI element whose state changes a lot, there is a trade-off between using a UIGradient (processing time) and a static gradient image (memory).

See Also
--------

*   `articles/Applying UIGradients`, for more information on creating UIGradient objects and how they work.