The TeleportService is responsible for transporting [Players](https://developer.roblox.com/en-us/api-reference/class/Player) between `Articles/Place|places` and servers.

Teleporting in Roblox describes the transportation of players between different places and servers. TeleportService provides a range of functions related to teleporting single or groups of users to different servers. As Roblox [games](https://developer.roblox.com/en-us/api-reference/class/Articles/Multi Place Games) can contain multiple places, you can use the TeleportService to teleport players between different levels.

Previous iterations of the TeleportService relied on several different functions for each scenario. These have since been combined into a single method, [TeleportService:TeleportAsync](https://developer.roblox.com/en-us/api-reference/function/TeleportService/TeleportAsync), which may be used to:

*   Teleport any number of players to a Public Server
*   Follow a Friend to a Different Place
*   Teleport any number of Players to a Reserved Server

Studio limitation
-----------------

This service does not work during playtesting in Roblox Studio — To test aspects of your game using it, you must publish the game and play it in the Roblox application.

See also
--------

For more information on how to teleport players between servers, take a look at the [Telporting Between Places](../../../articles/Teleporting-Between-Places) article.