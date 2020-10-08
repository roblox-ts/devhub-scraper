The LoadCharacterBlocking [Player](https://developer.roblox.com/en-us/api-reference/class/Player) function is similar to [Player:LoadCharacter](https://developer.roblox.com/en-us/api-reference/function/Player/LoadCharacter), but the request is processed synchronously instead of asynchronously.

This means that no other task will be able to continue until after the character has been loaded, including the rendering of the game and any other tasks.

Like LoadCharacter, this function creates a new character for the player, removing the old one. It also clears the player's [Backpack](https://developer.roblox.com/en-us/api-reference/class/Backpack) and [PlayerGui](https://developer.roblox.com/en-us/api-reference/class/PlayerGui). This is useful in cases where you want to reload the character without killing the player, such as when you want to load a new character appearance after changing the player's `Player.CharacterAppearance`.

Notes
-----

*   This function is used by Roblox's backend server when rendering avatar thumbnails.