The LoadCharacterAppearance [`StarterPlayer`](https://create.roblox.com/docs/reference/engine/classes/StarterPlayer) property sets whether or
not the appearance of a player's character should be loaded.

Setting this to *false* results in the player having no clothes (including
hats), body colors, body packages or anything else related to the
appearance of the player's avatar. By default, this property is set to
*true*.

Setting this to *true* results in the player loading the appearance
corresponding to the player's [`Player.CharacterAppearanceId`](https://create.roblox.com/docs/reference/engine/classes/Player#CharacterAppearanceId).

If [`Player:LoadCharacterWithHumanoidDescription()`](https://create.roblox.com/docs/reference/engine/classes/Player#LoadCharacterWithHumanoidDescription) is used, it can
be advantageous to set [`StarterPlayer.LoadCharacterAppearance`](https://create.roblox.com/docs/reference/engine/classes/StarterPlayer#LoadCharacterAppearance) to
false as the player's avatar is not required as all asset IDs to equip on
the character will come from the passed in [`HumanoidDescription`](https://create.roblox.com/docs/reference/engine/classes/HumanoidDescription).