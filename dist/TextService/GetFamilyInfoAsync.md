Returns a table containing the name and faces of a font family.

The returned table is structured like this:
```lua
type FaceInfo = {
  Name: string, -- Examples: "Regular", "Book", "Italic", "Thin Italic"
  Weight: Enum.FontWeight,
  Style: Enum.FontStyle, -- Either Normal or Italic
}

type FamilyInfo = {
  Name: string, -- Examples: "Source Sans Pro", "Grenze Gotisch"
  Faces: {FaceInfo} -- There's always at least 1 but there can be up to 18.
}
```

If the font family has already been loaded by a previous call to
`GetFamilyInfoAsync`, [`ContentProvider:PreloadAsync()`](https://create.roblox.com/docs/reference/engine/classes/ContentProvider#PreloadAsync), or a text
object with the [`TextLabel.FontFace`](https://create.roblox.com/docs/reference/engine/classes/TextLabel#FontFace) property set, then the method
returns without yielding.
#### Errors

This method can fail because of network errors. You should always wrap it
in a `pcall` for error handling.

Throws an error in these scenarios:

- The passed family is an empty string.
- Downloading the family failed.
- The asset ID is invalid or points to an asset that doesn't exist.