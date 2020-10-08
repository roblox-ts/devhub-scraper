The TeleportService is responsible for transporting [Players](https://developer.roblox.com/en-us/api-reference/class/Player) between `Articles/Place|places` and servers.

'Teleporting' in Roblox, describes the transportation of [Players](https://developer.roblox.com/en-us/api-reference/class/Player) between different places and servers. TeleportService provides a range of functions allowing single or groups of users to be teleported. As Roblox [games](https://developer.roblox.com/en-us/api-reference/class/Articles/Multi Place Games) can contain multiple places, you can use the TeleportService to teleport players between different levels.

Which teleport function should I use?
-------------------------------------

A variety of teleportation functions are available and are all suitable for different circumstances:

Studio limitation
-----------------

This service does not work during playtesting in Roblox Studio — To test aspects of your game using it, you must publish the game and play it in the Roblox application.

See also
--------

*   [Teleport](https://developer.roblox.com/en-us/api-reference/function/TeleportService/Teleport) for teleporting a single [Player](https://developer.roblox.com/en-us/api-reference/class/Player) to a place
*   [TeleportToSpawnByName](https://developer.roblox.com/en-us/api-reference/function/TeleportService/TeleportToSpawnByName) for teleporting a single [Player](https://developer.roblox.com/en-us/api-reference/class/Player) to a place, spawning at a particular [SpawnLocation](https://developer.roblox.com/en-us/api-reference/class/SpawnLocation)
*   [TeleportToPlaceInstance](https://developer.roblox.com/en-us/api-reference/function/TeleportService/TeleportToPlaceInstance) for teleporting a single [Player](https://developer.roblox.com/en-us/api-reference/class/Player) to a specific server instance in a place that is part of the same game
*   [TeleportService:TeleportPartyAsync](https://developer.roblox.com/en-us/api-reference/function/TeleportService/TeleportPartyAsync) for teleporting a group of [Players](https://developer.roblox.com/en-us/api-reference/class/Player) to one server in a place that is part of the same game
*   [TeleportService:TeleportToPrivateServer](https://developer.roblox.com/en-us/api-reference/function/TeleportService/TeleportToPrivateServer) for teleporting a group of [Players](https://developer.roblox.com/en-us/api-reference/class/Player) to a reserved server created using [TeleportService:ReserveServer](https://developer.roblox.com/en-us/api-reference/function/TeleportService/ReserveServer)