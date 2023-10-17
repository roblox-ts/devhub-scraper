This property indicates whether the teleport call should create a new
reserved server. When set to true, a reserved server will be created and
the player(s) will be teleported to the new server.

If set to false, the player(s) will be teleported to the public server
with the specified [`TeleportOptions.ServerInstanceId`](https://create.roblox.com/docs/reference/engine/classes/TeleportOptions#ServerInstanceId) if provided.
When [`TeleportOptions.ServerInstanceId`](https://create.roblox.com/docs/reference/engine/classes/TeleportOptions#ServerInstanceId) is blank or no matching
server is found, a new public server will be created to teleport the
player(s) to.

For more information on how to teleport players between servers, see
[Teleporting Between Places](https://create.roblox.com/docs/projects/teleporting).