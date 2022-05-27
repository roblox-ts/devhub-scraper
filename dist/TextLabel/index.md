A TextLabel renders a rectangle, like a [Frame](https://create.roblox.com/docs/reference/engine/classes/Frame), with styled text. The
rectangle can be used to define text boundaries, text scaling
([TextLabel.TextScaled](https://create.roblox.com/docs/reference/engine/classes/TextLabel#TextScaled)) and wrapping ([TextLabel.TextWrapped](https://create.roblox.com/docs/reference/engine/classes/TextLabel#TextWrapped),
[TextLabel.TextXAlignment](https://create.roblox.com/docs/reference/engine/classes/TextLabel#TextXAlignment), [TextLabel.TextYAlignment](https://create.roblox.com/docs/reference/engine/classes/TextLabel#TextYAlignment)).

This class contains properties that control the display of the text, such as
[TextLabel.Font](https://create.roblox.com/docs/reference/engine/classes/TextLabel#Font) and [TextLabel.TextColor3](https://create.roblox.com/docs/reference/engine/classes/TextLabel#TextColor3). All text rendered by a single
text label will have the same visual properties; multiple TextLabel objects
must be used in order to render multiple styles of text. To display only text
and hide the rectangle, set [GuiObject.BackgroundTransparency](https://create.roblox.com/docs/reference/engine/classes/GuiObject#BackgroundTransparency) to 1.

[TextService:GetTextSize](https://create.roblox.com/docs/reference/engine/classes/TextService#GetTextSize) can be used to get the size (bounds) of text that
would be rendered in a TextLabel given a font size, font, and frame size.

A [UITextSizeConstraint](https://create.roblox.com/docs/reference/engine/classes/UITextSizeConstraint) object can be used to constrain the size of text with
[TextLabel.TextScaled](https://create.roblox.com/docs/reference/engine/classes/TextLabel#TextScaled) enabled. It is recommended that the size of text is no
lower than 9, otherwise it may not be visible to most users.