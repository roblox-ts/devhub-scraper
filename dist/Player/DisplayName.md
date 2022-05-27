The `DisplayName` is a [Player](https://create.roblox.com/docs/reference/engine/classes/Player) property that contains the display name of
the authenticated user associated with the [Player](https://create.roblox.com/docs/reference/engine/classes/Player) object. Unlike
usernames, display names are non-unique names a player displays to others.
If the Roblox user has not chosen one, the property will read the same as
the `Name` property.

Note:

- Since display names are non-unique, it's possible for two players in a
  single instance to have identical names. If you need a globally unique
  identifier for a player, use `Player.UserId` (which is static) or
  `Player.Name` (which is the current Username) instead.
- Characters generated with `LoadCharacter` or by the Roblox engine will
  have their Humanoid's `DisplayName` property assigned to the Player's
  `DisplayName` property.
- Display names may have unicode characters in the string. See
  [UTF8](/reference/engine/libraries/utf8) for more information on how to
  work with strings with unicode characters.