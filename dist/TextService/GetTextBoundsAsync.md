This method is similar to [`TextService:GetTextSize()`](https://create.roblox.com/docs/reference/engine/classes/TextService#GetTextSize), but uses the
[`Font`](https://create.roblox.com/docs/reference/engine/datatypes/Font) object instead of [`Enum.Font`](https://create.roblox.com/docs/reference/engine/enums/Font), which has access to more
fonts.

Used to measure how big some text will be given a set of properties like
the string, size, and font.

This is a yield function because some fonts may need to be loaded in order
to measure them. If the font is already loaded, then it will not yield.
[`ContentProvider:PreloadAsync()`](https://create.roblox.com/docs/reference/engine/classes/ContentProvider#PreloadAsync) can be used to make sure a font is
loaded.
#### Errors

This method can fail because of network errors. You should always wrap it
in a `pcall` for error handling.

Throws an error in these scenarios:

- The [`GetTextBoundsParams.Font`](https://create.roblox.com/docs/reference/engine/classes/GetTextBoundsParams#Font) has a blank family.
- The `params` argument was nil.
- The font family or font face failed to download.