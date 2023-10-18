The `DisplayName` is a [`Player`](https://create.roblox.com/docs/reference/engine/classes/Player) property that contains the display
name of the authenticated user associated with the [`Player`](https://create.roblox.com/docs/reference/engine/classes/Player) object.
Unlike usernames, display names are non-unique names a player displays to
others. If the Roblox user has not chosen one, the property will read the
same as the `Name` property.

Note:

- Since display names are non-unique, it's possible for two players in a
single instance to have identical names. If you need a globally unique
identifier for a player, use [`Player.UserId`](https://create.roblox.com/docs/reference/engine/classes/Player#UserId) (which is static) or
[`Player.Name`](https://create.roblox.com/docs/reference/engine/classes/Player#Name) (which is the current Username) instead.
- Characters generated with [`Player.LoadCharacter`](https://create.roblox.com/docs/reference/engine/classes/Player#LoadCharacter) or by the Roblox
engine will have their [`Humanoid.DisplayName`](https://create.roblox.com/docs/reference/engine/classes/Humanoid#DisplayName) property assigned to
the [`Player.DisplayName`](https://create.roblox.com/docs/reference/engine/classes/Player#DisplayName) property.
- Display names may have unicode characters in the string. See
`Library.utf8|UTF-8` for more information on how to work with strings
with unicode characters.