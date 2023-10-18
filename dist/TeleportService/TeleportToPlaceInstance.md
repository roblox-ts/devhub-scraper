The numerous teleport functions have been combined into a single method,
[`TeleportAsync`](https://create.roblox.com/docs/reference/engine/classes/TeleportService#TeleportAsync), which should be
used instead and may be used to:

- Teleport any number of players to a Public Server
- Follow a Friend to a Different Place
- Teleport any number of Players to a Reserved Server

This function teleports a [`Player`](https://create.roblox.com/docs/reference/engine/classes/Player) to the place instance associated
with the given *placeId* and *instanceId*. It can only be used to teleport
to places in the same game.

The *placeId* is the [`DataModel.PlaceId`](https://create.roblox.com/docs/reference/engine/classes/DataModel#PlaceId) of the server and the
*instanceId* is the [`JobId`](https://create.roblox.com/docs/reference/engine/classes/DataModel#JobId).

This function can not be used to teleport [`Players`](https://create.roblox.com/docs/reference/engine/classes/Player) to
servers created using [`TeleportService:ReserveServer()`](https://create.roblox.com/docs/reference/engine/classes/TeleportService#ReserveServer) (reserved
servers). For this, see [`TeleportService:TeleportToPrivateServer()`](https://create.roblox.com/docs/reference/engine/classes/TeleportService#TeleportToPrivateServer).
#### Spawn name

An optional *spawnName* parameter can be provided, which will cause the
[`Player`](https://create.roblox.com/docs/reference/engine/classes/Player) to initially spawn at the [`SpawnLocation`](https://create.roblox.com/docs/reference/engine/classes/SpawnLocation) of that
name in the destination place. The [`SpawnLocation`](https://create.roblox.com/docs/reference/engine/classes/SpawnLocation) must be valid for
the [`Player`](https://create.roblox.com/docs/reference/engine/classes/Player) to spawn on. For example, it must be
[`neutral`](https://create.roblox.com/docs/reference/engine/classes/SpawnLocation#Neutral) or set to the same
[`TeamColor`](https://create.roblox.com/docs/reference/engine/classes/SpawnLocation#TeamColor) as the [`Team`](https://create.roblox.com/docs/reference/engine/classes/Team) the
[`Player`](https://create.roblox.com/docs/reference/engine/classes/Player) will be assigned to upon joining the game.
#### Teleport data

A *teleportData* parameter can be specified. This is data the client will
transmit to the destination place and can be retrieved using
[`TeleportService:GetLocalPlayerTeleportData()`](https://create.roblox.com/docs/reference/engine/classes/TeleportService#GetLocalPlayerTeleportData).

The *teleportData* can take any of the following forms:

- A table without mixed keys (all keys are strings or integers)
- A string
- A number
- A bool

As the *teleportData* is transmitted by the client it is not secure. For
this reason it should only be used for local settings and not sensitive
items (such as the users' score or in-game currency).

If you need teleport data to persist across multiple teleports, you can
use [`TeleportService:SetTeleportSetting()`](https://create.roblox.com/docs/reference/engine/classes/TeleportService#SetTeleportSetting) and
[`TeleportService:GetTeleportSetting()`](https://create.roblox.com/docs/reference/engine/classes/TeleportService#GetTeleportSetting).
#### Loading screen

A *customLoadingScreen* argument can be specified. This is a
[`ScreenGui`](https://create.roblox.com/docs/reference/engine/classes/ScreenGui) that is copied (without scripts) into the
[`CoreGui`](https://create.roblox.com/docs/reference/engine/classes/CoreGui) of the destination place.

Note, [`TeleportService:SetTeleportGui()`](https://create.roblox.com/docs/reference/engine/classes/TeleportService#SetTeleportGui) is the preferred
alternative to the *customLoadingScreen* argument as it can be called
prior to the teleport.

The loading [`ScreenGui`](https://create.roblox.com/docs/reference/engine/classes/ScreenGui) can be obtained in the destination place
using [`TeleportService:GetArrivingTeleportGui()`](https://create.roblox.com/docs/reference/engine/classes/TeleportService#GetArrivingTeleportGui), where developers
can parent it to the [`PlayerGui`](https://create.roblox.com/docs/reference/engine/classes/PlayerGui).
#### Teleport failure

In some circumstances a teleport may fail. This can be due to the
developer configuring the teleport incorrectly or issues with Roblox's
servers.

- If a teleportation request is rejected the
[`TeleportService.TeleportInitFailed`](https://create.roblox.com/docs/reference/engine/classes/TeleportService#TeleportInitFailed) event will fire the error
message and a [`Enum.TeleportResult`](https://create.roblox.com/docs/reference/engine/enums/TeleportResult) enumerator describing the issue
- Teleports can fail 'in transit', after the user has left the server, due
to issues with Roblox's servers. In this case the user will be shown an
error message and be required to rejoin the game

#### Studio limitation

This service does not work during playtesting in Roblox Studio — To
test aspects of your game using it, you must publish the game and play it
in the Roblox application.