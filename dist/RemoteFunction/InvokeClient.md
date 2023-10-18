Invokes the [`RemoteFunction`](https://create.roblox.com/docs/reference/engine/classes/RemoteFunction) which in turn calls the
[`OnClientInvoke`](https://create.roblox.com/docs/reference/engine/classes/RemoteFunction#OnClientInvoke) callback. Since this
method is used to communicate from the server to a client, it will only
work when used in a [`Script`](https://create.roblox.com/docs/reference/engine/classes/Script).

Any type of Roblox object such as an [`Enum`](https://create.roblox.com/docs/reference/engine/datatypes/Enum), [`Instance`](https://create.roblox.com/docs/reference/engine/classes/Instance), or
others can be passed as a parameter to
[`InvokeClient()`](https://create.roblox.com/docs/reference/engine/classes/RemoteFunction#InvokeClient), as well as Luau
types such as numbers, strings, and booleans, although you should
carefully explore the
[limitations](https://create.roblox.com/docs/scripting/events/remote#argument-limitations).

See [Remote Events and Callbacks](https://create.roblox.com/docs/scripting/events/remote) for
code samples and further details on [`RemoteFunction`](https://create.roblox.com/docs/reference/engine/classes/RemoteFunction).
#### Warning

In practice, the server does not often invoke the client, as clients
typically do not have information that the server doesn't have, and
actions that only a client can take, such as displaying a GUI, typically
do not require a callback. As such, [`RemoteEvent:FireClient()`](https://create.roblox.com/docs/reference/engine/classes/RemoteEvent#FireClient) is
recommended as an asynchronous method that doesn't need to wait for a
response to continue execution.

If you legitimately need to invoke a client from the server, note the
following risks:

- If the client throws an error, the server throws the error too.
- If the client disconnects while it's being invoked,
[`InvokeClient()`](https://create.roblox.com/docs/reference/engine/classes/RemoteFunction#InvokeClient) throws an error.
- If the client doesn't return a value, the server yields forever.