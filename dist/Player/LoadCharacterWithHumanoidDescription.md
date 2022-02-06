This function spawns an avatar so it has everything equipped in the passed in [HumanoidDescription](https://developer.roblox.com/en-us/api-reference/class/HumanoidDescription).

After calling LoadCharacterWithHumanoidDescription for an individual player, it is not recommended to call the function again for the same player until after that player's [Player.CharacterAppearanceLoaded](https://developer.roblox.com/en-us/api-reference/event/Player/CharacterAppearanceLoaded) event has fired.

See also
--------

*   [Humanoid Description System](https://developer.roblox.com/en-us/articles/HumanoidDescription-System), an article which explains the humanoid description system in greater detail and provides several scripting examples