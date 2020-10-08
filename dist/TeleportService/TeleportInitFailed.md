**TeleportInitFailed** fires on both the client and server when a request to teleport from a function such as [TeleportService:Teleport](https://developer.roblox.com/en-us/api-reference/function/TeleportService/Teleport) fails and causes the player to **not leave** the current place server. The [TeleportResult](https://developer.roblox.com/en-us/api-reference/enum/TeleportResult) provided by this event describes the reason the teleport failed, along with the error message displayed to the player.

Sometimes a teleportation can fail **after** the [Player](https://developer.roblox.com/en-us/api-reference/class/Player) has left the place due to Roblox server issues. This event **does not fire** in this case, and the player would be disconnected. They would need to rejoin the game.

Studio Limitation
-----------------

This service does not work during playtesting in Roblox Studio — To test aspects of your game using it, you must publish the game and play it in the Roblox application.

See also
--------

*   [TeleportService:Teleport](https://developer.roblox.com/en-us/api-reference/function/TeleportService/Teleport)
*   [TeleportService:TeleportPartyAsync](https://developer.roblox.com/en-us/api-reference/function/TeleportService/TeleportPartyAsync)
*   [TeleportService:TeleportToPrivateServer](https://developer.roblox.com/en-us/api-reference/function/TeleportService/TeleportToPrivateServer)
*   [TeleportService:TeleportToPlaceInstance](https://developer.roblox.com/en-us/api-reference/function/TeleportService/TeleportToPlaceInstance)
*   [TeleportService:TeleportToSpawnByName](https://developer.roblox.com/en-us/api-reference/function/TeleportService/TeleportToSpawnByName)