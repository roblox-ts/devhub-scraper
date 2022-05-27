A container whose contents are only accessible on the server. Objects
descending from ServerStorage will not replicate to the client and will not be
accessible from [LocalScript](https://create.roblox.com/docs/reference/engine/classes/LocalScript)s.

As ServerStorage is a service it can only be accessed using the
[DataModel.GetService](https://create.roblox.com/docs/reference/engine/classes/DataModel#GetService) method.

By storing large objects such as maps in ServerStorage until they are needed,
network traffic will not be used up transmitting these objects to the client
when they join the game.

[Script](https://create.roblox.com/docs/reference/engine/classes/Script)s will not run when they are parented to ServerStorage, although
[ModuleScript](https://create.roblox.com/docs/reference/engine/classes/ModuleScript)s contained within can be accessed and ran. It is recommended
developers use [ServerScriptService](https://create.roblox.com/docs/reference/engine/classes/ServerScriptService) to hold [Script](https://create.roblox.com/docs/reference/engine/classes/Script)s they wish the server to
execute.

Note that as the contents of ServerStorage can only be accessed by the server,
its contents will need to be parented elsewhere (such as [Workspace](https://create.roblox.com/docs/reference/engine/classes/Workspace)) before
clients can access them. Developers who require a container that is accessible
by both the server and client are advised to use [ReplicatedStorage](https://create.roblox.com/docs/reference/engine/classes/ReplicatedStorage) instead.