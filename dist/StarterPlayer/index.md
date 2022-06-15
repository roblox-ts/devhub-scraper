A service which allows the defaults of properties in the [Player](https://developer.roblox.com/en-us/api-reference/class/Player) object to be set. When a player enters the server, each property of the player object is set to the current value of the corresponding property in StarterPlayer.

Additionally, you may add four objects to this service:

*   A [StarterPlayerScripts](https://developer.roblox.com/en-us/api-reference/class/StarterPlayerScripts) instance, with scripts that run once for each player.
*   A [StarterCharacterScripts](https://developer.roblox.com/en-us/api-reference/class/StarterCharacterScripts) instance, with scripts to add to each player's character every time they spawn.
*   A [Humanoid](https://developer.roblox.com/en-us/api-reference/class/Humanoid) instance named **StarterHumanoid**, which will be used as the default humanoid for each player's character.
*   A [Model](https://developer.roblox.com/en-us/api-reference/class/Model) instance named **StarterCharacter**, which will be used as the character model for all players

A typical structure may look something like this:  
![StarterPlayer Tree](https://developer.roblox.com/assets/blt358e3811e54dff0c/StarterPlayerTree.png)