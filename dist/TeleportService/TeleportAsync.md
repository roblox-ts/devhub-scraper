This function serves as the all-encompassing method to teleport a player or group of players from one server to another.

Previous iterations of the [TeleportService](https://developer.roblox.com/en-us/api-reference/class/TeleportService) relied on several different functions for each scenario. This function combines the previous functions into a single method.

There are several scenarios where this may be used, including:

*   Teleport any number of players to a Public Server
*   Follow a Friend to a Different Place
*   Teleport any number of Players to a Reserved Server

Errors
------

The errors we have listed here are mainly input validation, there could also be unexpected runtime errors (for example an http request error) that could cause the API to fail.

Error

Description

Invalid placeId

placeId below 0

Players empty

If the size of list of players is less than 1

List of players instances is incorrect

Any member of the players list is not of type [Player](https://developer.roblox.com/en-us/api-reference/class/Player)

TeleportOptions not of correct type

teleportOption is not of type [TeleportOptions](https://developer.roblox.com/en-us/api-reference/class/TeleportOptions)

TeleportAsync called from Client

Can only be called from the server

Incompatible Parameters

*   ReservedServerAccessCode + ServerInstanceId
*   ShouldReserveServer + ServerInstanceId
*   ShouldReserveServer + ReservedServerAccessCode

See also
--------

For more information on how to teleport players between servers, take a look at the [Telporting Between Places](../../../articles/Teleporting-Between-Places) article.