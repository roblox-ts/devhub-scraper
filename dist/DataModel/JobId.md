This property is a unique identifier for the running game server instance.

The JobId is a [universally unique identifier (UUID)](https://en.wikipedia.org/wiki/Universally_unique_identifier) meaning that no two servers, past or present, will ever have the same JobId.

JobId defaults to an empty string in Roblox Studio.

See also
--------

*   [TeleportService:GetPlayerPlaceInstanceAsync](https://developer.roblox.com/en-us/api-reference/function/TeleportService/GetPlayerPlaceInstanceAsync) which can be used to retrieve the JobId of a [Player's](https://developer.roblox.com/en-us/api-reference/class/Player) current server
*   [TeleportService:TeleportToPlaceInstance](https://developer.roblox.com/en-us/api-reference/function/TeleportService/TeleportToPlaceInstance) which can be used to teleport a [Player](https://developer.roblox.com/en-us/api-reference/class/Player) to a specific server
*   [DataModel.PrivateServerId](https://developer.roblox.com/en-us/api-reference/property/DataModel/PrivateServerId) describes the ID of the private server the game server instance belongs to
*   [HttpService:GenerateGUID](https://developer.roblox.com/en-us/api-reference/function/HttpService/GenerateGUID), a function that can be used to generate your own UUIDs