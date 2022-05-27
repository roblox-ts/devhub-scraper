TextXAlignment determines the horizontal alignment (X-axis) of text
rendered within a UI element's space. It functions similarly to the CSS
text-align property, with left, right and center values (there is no
justify option). For Left and Right, text is rendered such that the
left/right text bounds just touch the edge of the UI element rectangle.
For Center, each line of text is centered on the very center of the UI
element rectangle.

This property is used in conjunction with [TextBox.TextYAlignment](https://create.roblox.com/docs/reference/engine/classes/TextBox#TextYAlignment) to
fully determine text alignment on both axes. This property won't affect
the read-only properties [TextBox.TextBounds](https://create.roblox.com/docs/reference/engine/classes/TextBox#TextBounds) and [TextBox.TextFits](https://create.roblox.com/docs/reference/engine/classes/TextBox#TextFits).