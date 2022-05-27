The TextSize property determines the height in offsets of one line of
rendered text. The unit is in offsets, not points (which is used in most
document editing programs). It's worth noting that the "Legacy" font's
line height behaves differently, and won't match this property exactly.

This property and [TextLabel.TextColor3](https://create.roblox.com/docs/reference/engine/classes/TextLabel#TextColor3), [TextLabel.TextTransparency](https://create.roblox.com/docs/reference/engine/classes/TextLabel#TextTransparency),
[TextLabel.TextStrokeColor3](https://create.roblox.com/docs/reference/engine/classes/TextLabel#TextStrokeColor3) and [TextLabel.TextStrokeTransparency](https://create.roblox.com/docs/reference/engine/classes/TextLabel#TextStrokeTransparency) each
influence the way text is rendered.

This property supersedes [TextLabel.FontSize](https://create.roblox.com/docs/reference/engine/classes/TextLabel#FontSize) since it is a number and not
an enum. Internally, Roblox uses several sets of pre-rendered character
images for each size of each font. It chooses the closest size to
TextSize, then scales that set of character images to render text. Before
the introduction of this property, you could only pick from the
pre-rendered sizes, which were listed by the [FontSize](https://developer.roblox.com/en-us/api-reference/enum/FontSize) enum.