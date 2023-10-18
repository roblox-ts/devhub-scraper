Invokes the [`RemoteFunction`](https://create.roblox.com/docs/reference/engine/classes/RemoteFunction) which in turn calls the
[`OnServerInvoke`](https://create.roblox.com/docs/reference/engine/classes/RemoteFunction#OnServerInvoke) callback. Since this
method is used to communicate from a client to the server, it will only
work when used in a [`LocalScript`](https://create.roblox.com/docs/reference/engine/classes/LocalScript).

If a returned result is not needed, it's recommended to use
[`RemoteEvent:FireServer()`](https://create.roblox.com/docs/reference/engine/classes/RemoteEvent#FireServer) instead, as its call is asynchronous and
doesn't need to wait for a response to continue execution.

Any type of Roblox object such as an [`Enum`](https://create.roblox.com/docs/reference/engine/datatypes/Enum), [`Instance`](https://create.roblox.com/docs/reference/engine/classes/Instance), or
others can be passed as a parameter to
[`InvokeServer()`](https://create.roblox.com/docs/reference/engine/classes/RemoteFunction#InvokeServer), as well as Luau
types such as numbers, strings, and booleans, although you should
carefully explore the
[limitations](https://create.roblox.com/docs/scripting/events/remote#argument-limitations).

See [Remote Events and Callbacks](https://create.roblox.com/docs/scripting/events/remote) for
code samples and further details on [`RemoteFunction`](https://create.roblox.com/docs/reference/engine/classes/RemoteFunction).