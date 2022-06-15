TeleportService is responsible for transporting [Player](https://developer.roblox.com/en-us/api-reference/class/Player)s between different [places](https://developer.roblox.com/articles/games-and-places) and servers.

All teleporting functionality is consolidated into a single [TeleportService:TeleportAsync](https://developer.roblox.com/en-us/api-reference/function/TeleportService/TeleportAsync) function, which is used to:

*   Teleport players to a different place
*   Teleport players to a specific server
*   Teleport players to a reserved server

Studio limitation
-----------------

TeleportService does not work during playtesting in Studio. To test your game's use of TeleportService, you must publish the place and play it with the Roblox application.

See also
--------

For an in-depth guide on teleporting players, see the [Teleporting Between Places](https://developer.roblox.com/articles/Teleporting-Between-Places) article.