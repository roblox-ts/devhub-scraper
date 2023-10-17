The **RemoteFunction** object facilitates synchronous, two-way communication
across the [client-server](https://create.roblox.com/docs/projects/client-server) boundary. You
can use it to define a custom callback function and invoke it manually by
calling [`RemoteFunction:InvokeClient()`](https://create.roblox.com/docs/reference/engine/classes/RemoteFunction#InvokeClient) or
[`RemoteFunction:InvokeServer()`](https://create.roblox.com/docs/reference/engine/classes/RemoteFunction#InvokeServer). The code invoking the function
**yields** until it receives a response from the recipient.

In order for both the server and clients to access a [`RemoteFunction`](https://create.roblox.com/docs/reference/engine/classes/RemoteFunction)
instance, it must be in a place where both sides can see it, such as
[`ReplicatedStorage`](https://create.roblox.com/docs/reference/engine/classes/ReplicatedStorage), although in some cases it's appropriate to store it
in [`Workspace`](https://create.roblox.com/docs/reference/engine/classes/Workspace) or inside a [`Tool`](https://create.roblox.com/docs/reference/engine/classes/Tool).

If the result is **not** needed, it is recommended that you use a
[`RemoteEvent`](https://create.roblox.com/docs/reference/engine/classes/RemoteEvent) instead, since its call is asynchronous and doesn't need
to wait for a response to continue execution. See
[Remote Events and Callbacks](https://create.roblox.com/docs/scripting/events/remote) for code
samples and further details on [`RemoteFunction`](https://create.roblox.com/docs/reference/engine/classes/RemoteFunction).
#### Streaming Precautions

Note that if an invoked [`RemoteFunction`](https://create.roblox.com/docs/reference/engine/classes/RemoteFunction) creates an instance on the
server, there is no guarantee that it exists on the client when the function
returns. This is particularly important in places that are
[`StreamingEnabled`](https://create.roblox.com/docs/reference/engine/classes/Workspace#StreamingEnabled) when the created instances
are [`BaseParts`](https://create.roblox.com/docs/reference/engine/classes/BasePart) or [`Models`](https://create.roblox.com/docs/reference/engine/classes/Model), since parts that are
far away from the player's character may not be streamed to the client, and
models that are [`Atomic`](https://create.roblox.com/docs/reference/engine/enums/ModelStreamingMode) depend on whether their parts
are streamed. Even if a model is [`Persistent`](https://create.roblox.com/docs/reference/engine/enums/ModelStreamingMode), there
may be some delay between the creation of the model and when it is replicated
to the client.

For additional details on streaming and recommendations on dealing with this
delay, see [Content Streaming](https://create.roblox.com/docs/workspace/streaming).
#### Parameter Limitations

Any type of Roblox object such as an `Datatype.Enum`, [`Instance`](https://create.roblox.com/docs/reference/engine/classes/Instance), or
others can be passed as a parameter when a [`RemoteFunction`](https://create.roblox.com/docs/reference/engine/classes/RemoteFunction) is invoked,
as well as Luau types such as numbers, strings, and booleans, although you
should carefully explore the
[limitations](https://create.roblox.com/docs/scripting/events/remote#argument-limitations).