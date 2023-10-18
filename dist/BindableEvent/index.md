The **BindableEvent** object enables custom events through asynchronous
one-way communication between scripts on the same side of the
[client-server](https://create.roblox.com/docs/projects/client-server) boundary. When you fire a
[`BindableEvent`](https://create.roblox.com/docs/reference/engine/classes/BindableEvent) through the [`BindableEvent:Fire()`](https://create.roblox.com/docs/reference/engine/classes/BindableEvent#Fire) method, the
firing script does **not** yield and the target function receives the passed
arguments with certain [limitations](https://create.roblox.com/docs/#argument-limitations).
[`BindableEvents`](https://create.roblox.com/docs/reference/engine/classes/BindableEvent) create threads of each connected
function, so even if one firing errors, others continue.

As an alternative for two-way communication between two scripts on the same
side of the client-server boundary, consider [`BindableFunction`](https://create.roblox.com/docs/reference/engine/classes/BindableFunction).

As stated, [`BindableEvents`](https://create.roblox.com/docs/reference/engine/classes/BindableEvent) do not allow for communication
between the server and clients. If you are looking for this functionality, use
a [`RemoteEvent`](https://create.roblox.com/docs/reference/engine/classes/RemoteEvent) as outlined in
[Remote Events and Callbacks](https://create.roblox.com/docs/scripting/events/remote).

See [Custom Events and Callbacks](https://create.roblox.com/docs/scripting/events/custom) for
code samples and further details on [`BindableEvent`](https://create.roblox.com/docs/reference/engine/classes/BindableEvent).
#### Parameter Limitations

Any type of Roblox object such as an [`Enum`](https://create.roblox.com/docs/reference/engine/datatypes/Enum), [`Instance`](https://create.roblox.com/docs/reference/engine/classes/Instance), or
others can be passed as a parameter when a [`BindableEvent`](https://create.roblox.com/docs/reference/engine/classes/BindableEvent) is fired, as
well as Luau types such as numbers, strings, and booleans, although you should
carefully explore the
[limitations](https://create.roblox.com/docs/scripting/events/custom#argument-limitations).