This property describes the private server ID of the server, if the server
is a private server.

If the server is not a private server, then this property will be an empty
string.

#### Private servers

Private servers refer to the following:

- [Private servers](/production/monetization/private-servers) that users
  can purchase from the games page
- Reserved servers, private servers created by the developer using
  [TeleportService:ReserveServer](https://create.roblox.com/docs/reference/engine/classes/TeleportService#ReserveServer)

#### PrivateServerId vs JobId

The PrivateServerId of a server is different from the [DataModel.JobId](https://create.roblox.com/docs/reference/engine/classes/DataModel#JobId).
The [JobId](https://create.roblox.com/docs/reference/engine/classes/DataModel#JobId) is the unique identifier of the current server
instance.

Private servers (VIP or reserved servers) can have multiple server
instances associated with them over time. This is because, although only
one server instance can be running at once for a private server, new
server instances can open and close as players join and leave the game.
For example, no server instance is running when nobody is playing in the
server. The PrivateServerId will be consistent across all of these server
instances, and the [DataModel.JobId](https://create.roblox.com/docs/reference/engine/classes/DataModel#JobId) will be unique for each once.

See also:

- [DataModel.PrivateServerOwnerId](https://create.roblox.com/docs/reference/engine/classes/DataModel#PrivateServerOwnerId), a property describing the owner of a
  VIP server
- [TeleportService:ReserveServer](https://create.roblox.com/docs/reference/engine/classes/TeleportService#ReserveServer), a function which creates a reserved
  server