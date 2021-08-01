The numerous teleport functions have been combined into a single method, [TeleportAsync](https://developer.roblox.com/en-us/api-reference/function/TeleportService/TeleportAsync), which should be used instead and may be used to:

*   Teleport any number of players to a Public Server
*   Follow a Friend to a Different Place
*   Teleport any number of Players to a Reserved Server

This function behaves the same as [TeleportService:Teleport](https://developer.roblox.com/en-us/api-reference/function/TeleportService/Teleport) with the exception that it includes a _spawnName_ parameter, causing the [Player](https://developer.roblox.com/en-us/api-reference/class/Player) to spawn at the [SpawnLocation](https://developer.roblox.com/en-us/api-reference/class/SpawnLocation) of that name at the destination place.

The [SpawnLocation](https://developer.roblox.com/en-us/api-reference/class/SpawnLocation) must be valid for the [Player](https://developer.roblox.com/en-us/api-reference/class/Player) to spawn on. For example, it must be [neutral](https://developer.roblox.com/en-us/api-reference/property/SpawnLocation/Neutral) or set to the same [TeamColor](https://developer.roblox.com/en-us/api-reference/property/SpawnLocation/TeamColor) as the [Team](https://developer.roblox.com/en-us/api-reference/class/Team) the [Player](https://developer.roblox.com/en-us/api-reference/class/Player) will be assigned to upon joining the game.

The [Player](https://developer.roblox.com/en-us/api-reference/class/Player) will still spawn at the correct [SpawnLocation](https://developer.roblox.com/en-us/api-reference/class/SpawnLocation) even the teleport is to a place in a different universe. The spawn will also be correct if [Players.CharacterAutoLoads](https://developer.roblox.com/en-us/api-reference/property/Players/CharacterAutoLoads) is false in the destination place and the [Character](https://developer.roblox.com/en-us/api-reference/property/Player/Character) is loaded manually using [LoadCharacter](https://developer.roblox.com/en-us/api-reference/function/Player/LoadCharacter).

The teleportation will only affect the [SpawnLocation](https://developer.roblox.com/en-us/api-reference/class/SpawnLocation) used initially. If the [Player](https://developer.roblox.com/en-us/api-reference/class/Player) respawns again subsequently it will not necessarily be at this [SpawnLocation](https://developer.roblox.com/en-us/api-reference/class/SpawnLocation).

Studio limitation
-----------------

This service does not work during playtesting in Roblox Studio — To test aspects of your game using it, you must publish the game and play it in the Roblox application.

See also
--------

*   For more information about teleporting please see [TeleportService:Teleport](https://developer.roblox.com/en-us/api-reference/function/TeleportService/Teleport) or the `Articles/Teleporting Between Places` tutorial