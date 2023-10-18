This function returns an access code that can be used to teleport players
to a reserved server, along with the [`DataModel.PrivateServerId`](https://create.roblox.com/docs/reference/engine/classes/DataModel#PrivateServerId) for
it.

ReserveServer can only be called on the server.
#### Reserved Servers

You can access reserved servers using:

- [`TeleportService:TeleportAsync()`](https://create.roblox.com/docs/reference/engine/classes/TeleportService#TeleportAsync) with the
[`TeleportOptions.ReservedServerAccessCode`](https://create.roblox.com/docs/reference/engine/classes/TeleportOptions#ReservedServerAccessCode) parameter.
- [`TeleportService:TeleportToPrivateServer()`](https://create.roblox.com/docs/reference/engine/classes/TeleportService#TeleportToPrivateServer), with the access code
`ReserveServer` returns.

- A server is started when the access code is first used.
- Access codes remain valid indefinitely, meaning reserved servers can
still be joined if no game server is running (in this case a new
server will be started).

You can see if the current server is a reserved server by using the
following code:
```lua
local isReserved = game.PrivateServerId ~= "" and game.PrivateServerOwnerId == 0
```

The [`DataModel.PrivateServerId`](https://create.roblox.com/docs/reference/engine/classes/DataModel#PrivateServerId) is constant across all server
instances associated with the server access code, the
[`DataModel.JobId`](https://create.roblox.com/docs/reference/engine/classes/DataModel#JobId) is not.
#### Studio limitation

This service does not work during playtesting in Roblox Studio — To
test aspects of your game using it, you must publish the game and play it
in the Roblox application.
#### Cross-Platform Play

Players on Xbox One with cross-platform play disabled will arrive in a
different server with players with cross-platform play enabled. This can
cause multiple game servers with the same PrivateServerId to exist."