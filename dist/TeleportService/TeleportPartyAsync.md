The numerous teleport functions have been combined into a single method,
[`TeleportAsync`](https://create.roblox.com/docs/reference/engine/classes/TeleportService#TeleportAsync), which should be
used instead and may be used to:

- Teleport any number of players to a Public Server
- Follow a Friend to a Different Place
- Teleport any number of Players to a Reserved Server

This function teleports a group of [`Players`](https://create.roblox.com/docs/reference/engine/classes/Player) to the same
server instance in the given place. It returns the [`DataModel.JobId`](https://create.roblox.com/docs/reference/engine/classes/DataModel#JobId)
of the server instance the players were teleported to.

This function can only be called from the server.

You may only use this function to teleport to a place in the same game.
This function can not teleport more than 50 [`Players`](https://create.roblox.com/docs/reference/engine/classes/Player) in a
single party.

Currently this function may not work reliably when teleporting
[`Players`](https://create.roblox.com/docs/reference/engine/classes/Player) to the same place they are currently in.
#### Teleport data

A *teleportData* parameter can be specified. This is data the clients will
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
#### Loading screen

A *customLoadingScreen* argument can be specified. This is a
[`ScreenGui`](https://create.roblox.com/docs/reference/engine/classes/ScreenGui) that is copied (without scripts) into the
[`CoreGui`](https://create.roblox.com/docs/reference/engine/classes/CoreGui) of the destination place. It can be retrieved at the
destination place using [`TeleportService:GetArrivingTeleportGui()`](https://create.roblox.com/docs/reference/engine/classes/TeleportService#GetArrivingTeleportGui)
and will not be used if the destination place is in a different game.

You are advised to instead set the loading screen on the client using
[`TeleportService:SetTeleportGui()`](https://create.roblox.com/docs/reference/engine/classes/TeleportService#SetTeleportGui). The loading [`ScreenGui`](https://create.roblox.com/docs/reference/engine/classes/ScreenGui)
should also be parented to the [`Players'`](https://create.roblox.com/docs/reference/engine/classes/Player)
[`PlayerGuis`](https://create.roblox.com/docs/reference/engine/classes/PlayerGui) a few seconds before the teleport to ensure a
smooth transition using a [`RemoteEvent`](https://create.roblox.com/docs/reference/engine/classes/RemoteEvent). For an example of this see
[`SetTeleportGui`](https://create.roblox.com/docs/reference/engine/classes/TeleportService#SetTeleportGui).
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

See also:

- [`Player:GetJoinData()`](https://create.roblox.com/docs/reference/engine/classes/Player#GetJoinData) to get the [`UserIds`](https://create.roblox.com/docs/reference/engine/classes/Player#UserId) of
[`Players`](https://create.roblox.com/docs/reference/engine/classes/Player) teleported together