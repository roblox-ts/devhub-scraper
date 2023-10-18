This class is an optional parameter to the
[`TeleportService:TeleportAsync()`](https://create.roblox.com/docs/reference/engine/classes/TeleportService#TeleportAsync) function that allows developers to
provide arguments for the teleport call.

Certain arguments in this class are not compatible with each other and cause
an error when passed to [`TeleportService:TeleportAsync()`](https://create.roblox.com/docs/reference/engine/classes/TeleportService#TeleportAsync):

- ReservedServerAccessCode + ServerInstanceId
- ShouldReserveServer + ServerInstanceId
- ShouldReserveServer + ReservedServerAccessCode

For more information on how to teleport players between servers, see
[Teleporting Between Places](https://create.roblox.com/docs/projects/teleporting).