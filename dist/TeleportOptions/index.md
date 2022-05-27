This class is an optional parameter to the [TeleportService:TeleportAsync](https://create.roblox.com/docs/reference/engine/classes/TeleportService#TeleportAsync)
function that allows developers to provide arguments for the teleport call.

Certain arguments in this class are not compatible with each other and cause
an error when passed to [TeleportService:TeleportAsync](https://create.roblox.com/docs/reference/engine/classes/TeleportService#TeleportAsync):

- ReservedServerAccessCode + ServerInstanceId
- ShouldReserveServer + ServerInstanceId
- ShouldReserveServer + ReservedServerAccessCode

See also:

For more information on how to teleport players between servers, take a look
at the [Teleporting Between Places][1] article.

[1]: https://developer.roblox.com/articles/Teleporting-Between-Places