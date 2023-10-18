This property is a unique identifier for the running game server instance.

The JobId is a [universally unique identifier (UUID)](https://create.roblox.com/docs/https://en.wikipedia.org/wiki/Universally_unique_identifier) meaning that no
two servers, past or present, will ever have the same JobId.

JobId defaults to an empty string in Roblox Studio.

See also:

- [`TeleportService:GetPlayerPlaceInstanceAsync()`](https://create.roblox.com/docs/reference/engine/classes/TeleportService#GetPlayerPlaceInstanceAsync) which can be used
to retrieve the JobId of a [`Player's`](https://create.roblox.com/docs/reference/engine/classes/Player) current server
- [`TeleportService:TeleportToPlaceInstance()`](https://create.roblox.com/docs/reference/engine/classes/TeleportService#TeleportToPlaceInstance) which can be used to
teleport a [`Player`](https://create.roblox.com/docs/reference/engine/classes/Player) to a specific server
- [`DataModel.PrivateServerId`](https://create.roblox.com/docs/reference/engine/classes/DataModel#PrivateServerId) describes the ID of the private server
the game server instance belongs to
- [`HttpService:GenerateGUID()`](https://create.roblox.com/docs/reference/engine/classes/HttpService#GenerateGUID), a function that can be used to
generate your own UUIDs