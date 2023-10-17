The **RemoteEvent** object facilitates asynchronous, one-way communication
across the [client-server](https://create.roblox.com/docs/projects/client-server) boundary
without yielding for a response. This communication can be directed from one
client to the server, from the server to a specific client, or from the server
to all clients.

In order for both the server and clients to access a [`RemoteEvent`](https://create.roblox.com/docs/reference/engine/classes/RemoteEvent)
instance, it must be in a place where both sides can see it, such as
[`ReplicatedStorage`](https://create.roblox.com/docs/reference/engine/classes/ReplicatedStorage), although in some cases it's appropriate to store it
in [`Workspace`](https://create.roblox.com/docs/reference/engine/classes/Workspace) or inside a [`Tool`](https://create.roblox.com/docs/reference/engine/classes/Tool).

If you need the result of the call, you should use a [`RemoteFunction`](https://create.roblox.com/docs/reference/engine/classes/RemoteFunction)
instead. Otherwise a remote event is recommended since it will minimize
network traffic/latency and won't yield the script to wait for a response.

See [Remote Events and Callbacks](https://create.roblox.com/docs/scripting/events/remote) for
code samples and further details on [`RemoteEvent`](https://create.roblox.com/docs/reference/engine/classes/RemoteEvent).
#### Parameter Limitations

Any type of Roblox object such as an [`Enum`](https://create.roblox.com/docs/reference/engine/datatypes/Enum), [`Instance`](https://create.roblox.com/docs/reference/engine/classes/Instance), or
others can be passed as a parameter when a [`RemoteEvent`](https://create.roblox.com/docs/reference/engine/classes/RemoteEvent) is fired, as
well as Luau types such as numbers, strings, and booleans, although you should
carefully explore the
[limitations](https://create.roblox.com/docs/scripting/events/remote#argument-limitations).