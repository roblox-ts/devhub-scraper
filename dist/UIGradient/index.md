**UIGradient** is a [UIComponent](https://create.roblox.com/docs/reference/engine/classes/UIComponent) that applies a color and transparency
gradient to the UI elements rendered by the parent [GuiObject](https://create.roblox.com/docs/reference/engine/classes/GuiObject). The appearance
of the gradient is configurable through the following properties:

- [Color](https://create.roblox.com/docs/reference/engine/classes/UIGradient#Color), a [ColorSequence](https://developer.roblox.com/en-us/api-reference/datatype/ColorSequence)
- [Transparency](https://create.roblox.com/docs/reference/engine/classes/UIGradient#Transparency), a [NumberSequence](https://developer.roblox.com/en-us/api-reference/datatype/NumberSequence)
- [Offset](https://create.roblox.com/docs/reference/engine/classes/UIGradient#Offset), a [Vector2](https://developer.roblox.com/en-us/api-reference/datatype/Vector2)
- [Rotation](https://create.roblox.com/docs/reference/engine/classes/UIGradient#Rotation), a number

![Gradient Window Example][1]

A UIGradient will not apply to child or descendant GuiObjects. In order to
apply the the same gradient to multiple objects, you will need multiple
UIGradients.

## Supported Objects

You can apply gradients to [Frame](https://create.roblox.com/docs/reference/engine/classes/Frame), [TextLabel](https://create.roblox.com/docs/reference/engine/classes/TextLabel), [TextButton](https://create.roblox.com/docs/reference/engine/classes/TextButton), [ImageLabel](https://create.roblox.com/docs/reference/engine/classes/ImageLabel),
[ImageButton](https://create.roblox.com/docs/reference/engine/classes/ImageButton), and [ViewportFrame](https://create.roblox.com/docs/reference/engine/classes/ViewportFrame). However, [ScrollingFrame](https://create.roblox.com/docs/reference/engine/classes/ScrollingFrame) and [TextBox](https://create.roblox.com/docs/reference/engine/classes/TextBox)
are not currently supported.

## Performance Considerations

In order to efficiently use a UIGradient, follow these principles:

- Avoid using more than 6 color stops on the [Color](https://create.roblox.com/docs/reference/engine/classes/UIGradient#Color)
  sequence.
- Avoid using a UIGradient on any object that applies a text stroke
  ([TextStrokeColor3](https://create.roblox.com/docs/reference/engine/classes/TextLabel#TextStrokeColor3)): the gradient will try to
  blend with strokes and borders, and may cause performance issues.
- Avoid setting [Color](https://create.roblox.com/docs/reference/engine/classes/UIGradient#Color) and
  [Transparency](https://create.roblox.com/docs/reference/engine/classes/UIGradient#Transparency) frequently: this causes the sequence
  of colors to rebuild often, which is expensive. If possible, set these
  properties only once and try to animate the [Offset](https://create.roblox.com/docs/reference/engine/classes/UIGradient#Offset) or
  [Rotation](https://create.roblox.com/docs/reference/engine/classes/UIGradient#Rotation) properties to achieve a similar effect.
  Alternatively, you can change the color of the parent [GuiObject](https://create.roblox.com/docs/reference/engine/classes/GuiObject) using such
  properties as [BackgroundColor3](https://create.roblox.com/docs/reference/engine/classes/GuiObject#BackgroundColor3),
  [ImageColor3](https://create.roblox.com/docs/reference/engine/classes/ImageLabel#ImageColor3), or [TextColor3](https://create.roblox.com/docs/reference/engine/classes/TextLabel#TextColor3).
- When applying an unchanging gradient on a UI element whose state changes a
  lot, there is a trade-off between using a UIGradient (processing time) and a
  static gradient image (memory).

See also:

- [UI Layout and Appearance](/building-and-visuals/ui/ui-layout-and-appearance)
  for more information on creating UIGradient objects and how they work.

[1]: https://prod.docsiteassets.roblox.com/assets/blt554b31323e805496/ILoveGradients.jpg