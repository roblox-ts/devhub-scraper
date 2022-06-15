The CanLoadCharacterAppearance [Player](https://developer.roblox.com/en-us/api-reference/class/Player) property determines whether the character's appearance will be loaded when the player spawns. The default value of this property is set by `StarterPlayer/LoadPlayerAppearance`.

If _true_, the character will load the appearance of the player corresponding to the player's [Player.CharacterAppearanceId](https://developer.roblox.com/en-us/api-reference/property/Player/CharacterAppearanceId).

If _false_, the player will spawn with a default appearance - a grey character model without any hats, shirts, pants, etc.

Attempting to set the property after the character has spawned will not change the character, you must call [Player:LoadCharacter](https://developer.roblox.com/en-us/api-reference/function/Player/LoadCharacter) to load the new appearance.