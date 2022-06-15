The RemoveCharacter [Player](https://developer.roblox.com/en-us/api-reference/class/Player) function removes the player's character. It also clears the player's [Backpack](https://developer.roblox.com/en-us/api-reference/class/Backpack) and [PlayerGui](https://developer.roblox.com/en-us/api-reference/class/PlayerGui). This is useful when you would like to temporarily remove a player's character.

To reload a players character after using this function, simply use the [Player:LoadCharacter](https://developer.roblox.com/en-us/api-reference/function/Player/LoadCharacter) function.

Note
----

*   This function does not remove a player from the game. It only removes their character. To remove a player from the game, you can use the [Player:Kick](https://developer.roblox.com/en-us/api-reference/function/Player/Kick) function.