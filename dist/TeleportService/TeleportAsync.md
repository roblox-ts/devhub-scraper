This function serves as the all-encompassing method to teleport a player or group of players from one server to another.

All forms of player teleportation are consolidated into this single function, which is used to:

*   Teleport players to a different place
*   Teleport players to a specific server
*   Teleport players to a reserved server

**Group Teleport Limitations**  

*   Groups of players can only be teleported within a single experience.
*   No more than 50 players can be teleported with a single [TeleportService:TeleportAsync](https://developer.roblox.com/en-us/api-reference/function/TeleportService/TeleportAsync) call.

Potential Errors
----------------

This is a list of potential reasons a teleport may fail, ranging from invalid teleports to network issues.

Error

Description

Invalid placeId

The provided placeId is below 0.

Players empty

The provided list of players to teleport is empty.

List of players instances is incorrect

Any of the provided players is not a Player object.

TeleportOptions not of correct type

The provided teleportOption is not a TeleportOptions object.

TeleportAsync called from Client

The client called TeleportAsync, which can only be called from the server.

Incompatible Parameters

Conflicting teleport options were used and TeleportService doesn't know where to send the player:

*   ReservedServerAccessCode + ServerInstanceId
*   ShouldReserveServer + ServerInstanceId
*   ShouldReserveServer + ReservedServerAccessCode

See also
--------

For an in-depth guide on teleporting players and properly handling teleport failures, see the [Teleporting Between Places](https://developer.roblox.com/articles/Teleporting-Between-Places) article.