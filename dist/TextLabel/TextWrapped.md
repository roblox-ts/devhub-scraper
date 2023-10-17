When enabled, this property will render text on multiple lines within a
[`GUI`](https://create.roblox.com/docs/reference/engine/classes/TextLabel) element's space so that [`TextLabel.TextBounds`](https://create.roblox.com/docs/reference/engine/classes/TextLabel#TextBounds)
will never exceed the [`GuiBase2d.AbsoluteSize`](https://create.roblox.com/docs/reference/engine/classes/GuiBase2d#AbsoluteSize) of the UI element.

This is achieved by breaking long lines of text into multiple lines. Line
breaks will prefer whitespace; should a long unbroken word exceed the
width of the element, that word will be broken into multiple lines.

If further line breaks would cause the vertical height of the text (the Y
component of [`TextLabel.TextBounds`](https://create.roblox.com/docs/reference/engine/classes/TextLabel#TextBounds)) to exceed the vertical height
of the element (the Y component of [`GuiBase2d.AbsoluteSize`](https://create.roblox.com/docs/reference/engine/classes/GuiBase2d#AbsoluteSize)), then
that line will not be rendered at all.