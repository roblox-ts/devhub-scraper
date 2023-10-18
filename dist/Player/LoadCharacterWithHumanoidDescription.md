This function spawns an avatar so it has everything equipped in the passed
in [`HumanoidDescription`](https://create.roblox.com/docs/reference/engine/classes/HumanoidDescription).

After calling LoadCharacterWithHumanoidDescription for an individual
player, it is not recommended to call the function again for the same
player until after that player's [`Player.CharacterAppearanceLoaded`](https://create.roblox.com/docs/reference/engine/classes/Player#CharacterAppearanceLoaded)
event has fired.

See also:

- [HumanoidDescription System](https://create.roblox.com/docs/characters/appearance#humanoiddescription),
an article which explains the humanoid description system in greater
detail and provides several scripting examples