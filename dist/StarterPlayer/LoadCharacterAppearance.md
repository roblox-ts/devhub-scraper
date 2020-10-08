The LoadCharacterAppearance [StarterPlayer](https://developer.roblox.com/en-us/api-reference/class/StarterPlayer) property sets whether or not the appearance of a player's character should be loaded.

This property sets the default value of [Player.CanLoadCharacterAppearance](https://developer.roblox.com/en-us/api-reference/property/Player/CanLoadCharacterAppearance) for each player who joins the game.

Setting this to _false_ results in the player having no clothes (including hats), body colors, body packages or anything else related to the appearance of the player. By default, this property is set to _true_.

Setting this to _true_ results in the player loading the appearance corresponding to the player's [Player.CharacterAppearanceId](https://developer.roblox.com/en-us/api-reference/property/Player/CharacterAppearanceId).