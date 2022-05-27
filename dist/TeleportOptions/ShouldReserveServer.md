This property indicates whether the teleport call should create a new
reserved server. When set to true, a reserved server will be created and
the player(s) will be teleported to the new server.

If set to false, the player(s) will be teleported to the public server
with the specified [TeleportOptions.ServerInstanceId](https://create.roblox.com/docs/reference/engine/classes/TeleportOptions#ServerInstanceId) if provided. When
[TeleportOptions.ServerInstanceId](https://create.roblox.com/docs/reference/engine/classes/TeleportOptions#ServerInstanceId) is blank or no matching server is
found, a new public server will be created to teleport the player(s) to.

See also:

For more information on how to teleport players between servers, take a
look at the [Teleporting Between Places][1] article.

[1]: https://developer.roblox.com/articles/Teleporting-Between-Places