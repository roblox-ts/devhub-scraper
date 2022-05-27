A server should rarely invoke a client via
[InvokeClient()](https://create.roblox.com/docs/reference/engine/classes/RemoteFunction#InvokeClient) as it can be potentially game
breaking. For client-only actions that don't require a callback, like updating
a GUI, a server-to-client remote event should be used instead. If
[InvokeClient()](https://create.roblox.com/docs/reference/engine/classes/RemoteFunction#InvokeClient) is used, risks include:

- If the client throws an error, the server will throw the error too.
- If the client disconnects while it's being invoked, the
  [InvokeClient()](https://create.roblox.com/docs/reference/engine/classes/RemoteFunction#InvokeClient) call will error.
- If the client never returns a value, the server will hang forever.

A **RemoteFunction** is used to create in-game APIs that both the client and
the server can use to communicate with each other. Like [BindableFunction](https://create.roblox.com/docs/reference/engine/classes/BindableFunction), a
RemoteFunction can be invoked (called) to do a certain action and return the
results.

If the result is **not** needed, we recommend that you use a [RemoteEvent](https://create.roblox.com/docs/reference/engine/classes/RemoteEvent)
instead, since its call is asynchronous and doesn't need to wait for a
response to continue execution. See
[Remote Functions and Events](/networking/remote-events-and-functions).