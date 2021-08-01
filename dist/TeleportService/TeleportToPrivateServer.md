The numerous teleport functions have been combined into a single method, [TeleportAsync](https://developer.roblox.com/en-us/api-reference/function/TeleportService/TeleportAsync), which should be used instead and may be used to:

*   Teleport any number of players to a Public Server
*   Follow a Friend to a Different Place
*   Teleport any number of Players to a Reserved Server

This function teleports one or more [Players](https://developer.roblox.com/en-us/api-reference/class/Player) to a reserved server created using [TeleportService:ReserveServer](https://developer.roblox.com/en-us/api-reference/function/TeleportService/ReserveServer).

The _reservedServerAccessCode_ parameter is the access code returned by [ReserveServer](https://developer.roblox.com/en-us/api-reference/function/TeleportService/ReserveServer).

TeleportToPrivateServer can only be called on the server.

Spawn name
----------

An optional _spawnName_ parameter can be provided, which will cause the [Players](https://developer.roblox.com/en-us/api-reference/class/Player) to initially spawn at the [SpawnLocation](https://developer.roblox.com/en-us/api-reference/class/SpawnLocation) of that name in the destination place. The [SpawnLocation](https://developer.roblox.com/en-us/api-reference/class/SpawnLocation) must be valid for the [Players](https://developer.roblox.com/en-us/api-reference/class/Player) to spawn on. For example, it must be [neutral](https://developer.roblox.com/en-us/api-reference/property/SpawnLocation/Neutral) or set to the same [TeamColor](https://developer.roblox.com/en-us/api-reference/property/SpawnLocation/TeamColor) as the [Team](https://developer.roblox.com/en-us/api-reference/class/Team) the [Players](https://developer.roblox.com/en-us/api-reference/class/Player) will be assigned to upon joining the game.

Teleport data
-------------

A _teleportData_ parameter can be specified. This is data the clients will transmit to the destination place and can be retrieved using [TeleportService:GetLocalPlayerTeleportData](https://developer.roblox.com/en-us/api-reference/function/TeleportService/GetLocalPlayerTeleportData).

The _teleportData_ can take any of the following forms:

*   A table without mixed keys (all keys are strings or integers)
*   A string
*   A number
*   A bool

As the _teleportData_ is transmitted by the client it is not secure. For this reason it should only be used for local settings and not sensitive items (such as the users' score or in-game currency).

If you need teleport data to persist across multiple teleports, you can use [TeleportService:SetTeleportSetting](https://developer.roblox.com/en-us/api-reference/function/TeleportService/SetTeleportSetting) and [TeleportService:GetTeleportSetting](https://developer.roblox.com/en-us/api-reference/function/TeleportService/GetTeleportSetting).

Loading screen
--------------

A _customLoadingScreen_ argument can be specified. This is a [ScreenGui](https://developer.roblox.com/en-us/api-reference/class/ScreenGui) that is copied (without scripts) into the [CoreGui](https://developer.roblox.com/en-us/api-reference/class/CoreGui) of the destination place.

You are advised to instead set the loading screen on the client using [TeleportService:SetTeleportGui](https://developer.roblox.com/en-us/api-reference/function/TeleportService/SetTeleportGui). The loading [ScreenGui](https://developer.roblox.com/en-us/api-reference/class/ScreenGui) should also be parented to the `Player|Player's` [PlayerGui](https://developer.roblox.com/en-us/api-reference/class/PlayerGui) a few seconds before the teleport to ensure a smooth transition using a [RemoteEvent](https://developer.roblox.com/en-us/api-reference/class/RemoteEvent). For an example of this see [SetTeleportGui](https://developer.roblox.com/en-us/api-reference/function/TeleportService/SetTeleportGui)

The loading [ScreenGui](https://developer.roblox.com/en-us/api-reference/class/ScreenGui) can be obtained in the destination place using [TeleportService:GetArrivingTeleportGui](https://developer.roblox.com/en-us/api-reference/function/TeleportService/GetArrivingTeleportGui), where developers can parent it to the [PlayerGui](https://developer.roblox.com/en-us/api-reference/class/PlayerGui).

Teleport failure
----------------

In some circumstances a teleport may fail. This can be due to the developer configuring the teleport incorrectly or issues with Roblox's servers.

*   If a teleportation request is rejected the [TeleportService.TeleportInitFailed](https://developer.roblox.com/en-us/api-reference/event/TeleportService/TeleportInitFailed) event will fire the error message and a [TeleportResult](https://developer.roblox.com/en-us/api-reference/enum/TeleportResult) enumerator describing the issue
*   Teleports can fail 'in transit', after the user has left the server, due to issues with Roblox's servers. In this case the user will be shown an error message and be required to rejoin the game

Studio limitation
-----------------

This service does not work during playtesting in Roblox Studio — To test aspects of your game using it, you must publish the game and play it in the Roblox application.

See also
--------

For more information on how to teleport players, see the `Articles/Teleporting Between Places` tutorial.