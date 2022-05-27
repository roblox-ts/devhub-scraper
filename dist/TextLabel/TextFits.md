The TextFits is a read-only property that is false if [TextLabel.Text](https://create.roblox.com/docs/reference/engine/classes/TextLabel#Text)
content does not fit within the [GuiBase2d.AbsoluteSize](https://create.roblox.com/docs/reference/engine/classes/GuiBase2d#AbsoluteSize) when rendered. If
[TextLabel.TextWrapped](https://create.roblox.com/docs/reference/engine/classes/TextLabel#TextWrapped) is true, a false value indicates that some text is
truncated and not rendering. Otherwise, it indicates if the line of text
is rendering outside the UI element's rectangle. If [TextLabel.TextScaled](https://create.roblox.com/docs/reference/engine/classes/TextLabel#TextScaled)
is enabled, this property will be disabled when text must be scaled down
in order to fit.