The CharacterAppearance property indicates the URL of the asset containing
the character's appearance, clothing, and gear.

It is automatically set by Roblox to load your avatar's appearance when
you join a game.

Attempting to set the property after the character has spawned will not
change the character, you must call [`Player:LoadCharacter()`](https://create.roblox.com/docs/reference/engine/classes/Player#LoadCharacter) to load
the new appearance.