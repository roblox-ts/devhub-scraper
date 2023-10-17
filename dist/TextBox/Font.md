The Font property selects one of several pre-defined `Enum.Font|fonts`
with which the UI element will render its text. Some fonts have bold,
italic and/or light variants (as there is no font-weight or font-style
properties).

With the exception of the "Legacy" font, each font will render text with
the line height equal to the [`TextBox.TextSize`](https://create.roblox.com/docs/reference/engine/classes/TextBox#TextSize) property. The "Code"
font is the only monospace font. It has the unique property that each
character has the exact same width and height ratio of 1:2. The width of
each character is approximately half the [`TextBox.TextSize`](https://create.roblox.com/docs/reference/engine/classes/TextBox#TextSize)
property.

This property is kept in sync with the [`TextBox.FontFace`](https://create.roblox.com/docs/reference/engine/classes/TextBox#FontFace) property.
When setting Font, the FontFace will be set to
`Datatype.Font.fromEnum(value)`.