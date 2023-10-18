**ReplicatedStorage** is a general container service for objects that are
available to both the server and connected game clients. It is ideal for
[`ModuleScript`](https://create.roblox.com/docs/reference/engine/classes/ModuleScript), [`RemoteFunction`](https://create.roblox.com/docs/reference/engine/classes/RemoteFunction), [`RemoteEvent`](https://create.roblox.com/docs/reference/engine/classes/RemoteEvent) and other
objects that are useful to both server-side [`Scripts`](https://create.roblox.com/docs/reference/engine/classes/Script) and
client-side [`LocalScripts`](https://create.roblox.com/docs/reference/engine/classes/LocalScript).

[`LocalScripts`](https://create.roblox.com/docs/reference/engine/classes/LocalScript) do not run when parented to this service,
even if they are [`Enabled`](https://create.roblox.com/docs/reference/engine/classes/BaseScript#Enabled). Similarly,
[`Scripts`](https://create.roblox.com/docs/reference/engine/classes/Script) do not run when parented to this service unless you
change their [`Enum.RunContext`](https://create.roblox.com/docs/reference/engine/enums/RunContext) property from its default value of `Legacy`.

If a [`ModuleScript`](https://create.roblox.com/docs/reference/engine/classes/ModuleScript) within this service is required by any other script,
it runs as normal. Such modules typically house code that is shared by the
server and client. Server-side [`Scripts`](https://create.roblox.com/docs/reference/engine/classes/Script) that run on their own
should be parented to [`ServerScriptService`](https://create.roblox.com/docs/reference/engine/classes/ServerScriptService) instead. Client-side
[`LocalScripts`](https://create.roblox.com/docs/reference/engine/classes/LocalScript) have various other locations where they
eventually run on a [`Player`](https://create.roblox.com/docs/reference/engine/classes/Player) client: [`StarterPlayerScripts`](https://create.roblox.com/docs/reference/engine/classes/StarterPlayerScripts),
[`StarterCharacterScripts`](https://create.roblox.com/docs/reference/engine/classes/StarterCharacterScripts), or [`StarterGui`](https://create.roblox.com/docs/reference/engine/classes/StarterGui).

This service behaves similarly to [`ServerStorage`](https://create.roblox.com/docs/reference/engine/classes/ServerStorage) except that its
contents are replicated. If you are storing assets which should not be visible
on the client or have no use to the client at all, use [`ServerStorage`](https://create.roblox.com/docs/reference/engine/classes/ServerStorage)
instead.

Objects parented to this service are fully replicated to clients, and normal
replication rules apply: any changes that are made on the client persist, but
won't be replicated to the server. Client changes may be overwritten if the
server does something that overwrites those changes. For instance, a
[`Part`](https://create.roblox.com/docs/reference/engine/classes/Part) parented to `ReplicatedStorage` by the server may have a blue
[`BrickColor`](https://create.roblox.com/docs/reference/engine/classes/BasePart#BrickColor). A client could change this property to
red locally, but this change remains only on the client. If the server changes
the color to green, this change is replicated to the client.