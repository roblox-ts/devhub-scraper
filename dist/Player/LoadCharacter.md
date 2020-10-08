The LoadCharacter [Player](https://developer.roblox.com/en-us/api-reference/class/Player) function creates a new character for the player, removing the old one. It also clears the player's [Backpack](https://developer.roblox.com/en-us/api-reference/class/Backpack) and [PlayerGui](https://developer.roblox.com/en-us/api-reference/class/PlayerGui).

This is useful in cases where you want to reload the character without killing the player, such as when you want to load a new character appearance after changing the player's `Player.CharacterAppearance`.

Note
----

The function is similar to [Player:LoadCharacterBlocking](https://developer.roblox.com/en-us/api-reference/function/Player/LoadCharacterBlocking), but the request is processed asynchronously instead of synchronously. This means other tasks will be able to continue while the character is being loaded, including the rendering of the game and any other tasks. Also, this function can be used in script, while LoadCharacterBlocking cannot.