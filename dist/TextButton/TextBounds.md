The read-only property TextBounds reflects the absolute size of rendered
text in offsets. In other words, if you were to try to fit text into a
rectangle, this property would reflect the minimum dimensions of the
rectangle you would need in order to fit the text.

Using [TextService:GetTextSize](https://create.roblox.com/docs/reference/engine/classes/TextService#GetTextSize), you can predict what TextBounds will be
on a TextLabel given a string, [TextButton.Font](https://create.roblox.com/docs/reference/engine/classes/TextButton#Font), [TextButton.TextSize](https://create.roblox.com/docs/reference/engine/classes/TextButton#TextSize)
and frame size.