This function returns an access code that can be used to teleport players to a reserved server, along with the [DataModel.PrivateServerId](https://developer.roblox.com/en-us/api-reference/property/DataModel/PrivateServerId) for it.

ReserveServer can only be called on the server.

Reserved Servers
----------------

The following are characteristics of reserved servers:

*   They can only be accessed using [TeleportService:TeleportToPrivateServer](https://developer.roblox.com/en-us/api-reference/function/TeleportService/TeleportToPrivateServer), with the access code ReserveServer returns
*   A game server is started when the access code is first used
*   Access codes remain valid indefinitely, meaning reserved servers can still be joined if no game server is running (in this case a new game server will be started)

You can see if the current server is a reserved server by using the following code:

```Lua
local isReserved = game.PrivateServerId ~= "" and game.PrivateServerOwnerId == 0
``` 

The [DataModel.PrivateServerId](https://developer.roblox.com/en-us/api-reference/property/DataModel/PrivateServerId) is constant across all server instances associated with the server access code, the [DataModel.JobId](https://developer.roblox.com/en-us/api-reference/property/DataModel/JobId) is not.

Studio limitation
-----------------

This service does not work during playtesting in Roblox Studio — To test aspects of your game using it, you must publish the game and play it in the Roblox application.

Cross-Platform Play
-------------------

Players on Xbox One with cross-platform play disabled will arrive in a different server with players with cross-platform play enabled. This can cause multiple game servers with the same PrivateServerId to exist.