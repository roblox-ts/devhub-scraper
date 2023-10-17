The FontFace property is similar to the Font property, but allows setting
fonts that don't exist in the Font enum.

This property is kept in sync with the [`TextBox.Font`](https://create.roblox.com/docs/reference/engine/classes/TextBox#Font) property. When
setting FontFace, the Font is set to the corresponding enum value, or to
`Enum.Font.Unknown` if there are no matches.