The Text property determines the content rendered by the UI element. The
visual properties of the string rendered to the screen is determined by
[TextBox.TextColor3](https://create.roblox.com/docs/reference/engine/classes/TextBox#TextColor3), [TextBox.TextTransparency](https://create.roblox.com/docs/reference/engine/classes/TextBox#TextTransparency), [TextBox.TextSize](https://create.roblox.com/docs/reference/engine/classes/TextBox#TextSize),
[TextBox.Font](https://create.roblox.com/docs/reference/engine/classes/TextBox#Font), [TextBox.TextScaled](https://create.roblox.com/docs/reference/engine/classes/TextBox#TextScaled), [TextBox.TextWrapped](https://create.roblox.com/docs/reference/engine/classes/TextBox#TextWrapped),
[TextBox.TextXAlignment](https://create.roblox.com/docs/reference/engine/classes/TextBox#TextXAlignment) and [TextBox.TextYAlignment](https://create.roblox.com/docs/reference/engine/classes/TextBox#TextYAlignment).

It is possible to render emoji (for example, 😃) and other symbols. These
special symbols aren't affected by the [TextBox.TextColor3](https://create.roblox.com/docs/reference/engine/classes/TextBox#TextColor3) property.
These can be pasted into [Script](https://create.roblox.com/docs/reference/engine/classes/Script) and [LocalScript](https://create.roblox.com/docs/reference/engine/classes/LocalScript) objects, as well as
the field within the Properties window.

This property may contain newline characters, however, it is not possible
to type newline characters within the Properties window. Similarly, this
property may contain a tab character, but it will render as a space
instead.