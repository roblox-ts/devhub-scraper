Fires the [`OnClientEvent`](https://create.roblox.com/docs/reference/engine/classes/RemoteEvent#OnClientEvent) event for each
client connected to the same [`RemoteEvent`](https://create.roblox.com/docs/reference/engine/classes/RemoteEvent). Unlike
[`FireClient()`](https://create.roblox.com/docs/reference/engine/classes/RemoteEvent#FireClient), this event does not take a
target [`Player`](https://create.roblox.com/docs/reference/engine/classes/Player) as the first argument, since it fires to multiple
clients. Since this method is used to communicate from the server to
clients, it will only work when used in a [`Script`](https://create.roblox.com/docs/reference/engine/classes/Script).

Any type of Roblox object such as an [`Enum`](https://create.roblox.com/docs/reference/engine/datatypes/Enum), [`Instance`](https://create.roblox.com/docs/reference/engine/classes/Instance), or
others can be passed as a parameter to
[`FireAllClients()`](https://create.roblox.com/docs/reference/engine/classes/RemoteEvent#FireAllClients), as well as Luau
types such as numbers, strings, and booleans, although you should
carefully explore the
[limitations](https://create.roblox.com/docs/scripting/events/remote#argument-limitations).

See [Remote Events and Callbacks](https://create.roblox.com/docs/scripting/events/remote) for
code samples and further details on [`RemoteEvent`](https://create.roblox.com/docs/reference/engine/classes/RemoteEvent).