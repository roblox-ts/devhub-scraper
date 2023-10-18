Computes the [`Vector2`](https://create.roblox.com/docs/reference/engine/datatypes/Vector2) dimensions (in pixels) that will be taken
up with text when using the specified formatting parameters and size
constraints.

Note, the fontSize parameter will not accept the [`Enum.FontSize`](https://create.roblox.com/docs/reference/engine/enums/FontSize) Enum.
Instead the integer size corresponding with the [`Enum.FontSize`](https://create.roblox.com/docs/reference/engine/enums/FontSize) Enum
should be used. This is not equal to the value of the [`Enum.FontSize`](https://create.roblox.com/docs/reference/engine/enums/FontSize)
Enum. For example, for *Size11* font, the integer *11* should be used.

This function is a useful alternative to the [`TextLabel.TextBounds`](https://create.roblox.com/docs/reference/engine/classes/TextLabel#TextBounds)
property of the [`TextLabel`](https://create.roblox.com/docs/reference/engine/classes/TextLabel) and [`TextButton`](https://create.roblox.com/docs/reference/engine/classes/TextButton) objects. Using
the [`TextLabel.TextBounds`](https://create.roblox.com/docs/reference/engine/classes/TextLabel#TextBounds) property to calculate the dimensions text
requires is often impractical as it requires a [`TextLabel`](https://create.roblox.com/docs/reference/engine/classes/TextLabel) object to
be created.

With GetTextSize, the dimensions required by a particular text string in a
particular [`TextLabel`](https://create.roblox.com/docs/reference/engine/classes/TextLabel) or [`TextButton`](https://create.roblox.com/docs/reference/engine/classes/TextButton) can be calculated
before any object is created or text property set.

Developers are recommended to add a pixel of padding to the result to
ensure no text is cut off.

This method is limited to only fonts that are listed in [`Enum.Font`](https://create.roblox.com/docs/reference/engine/enums/Font). To
get access to more fonts, you can use
[`TextService:GetTextBoundsAsync()`](https://create.roblox.com/docs/reference/engine/classes/TextService#GetTextBoundsAsync) instead.