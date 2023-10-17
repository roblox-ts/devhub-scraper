The **BindableFunction** object allows for synchronous two-way communication
between scripts on the same side of the
[client-server](https://create.roblox.com/docs/projects/client-server) boundary. You can use it
to define a custom callback function and invoke it manually by calling
[`BindableFunction:Invoke()`](https://create.roblox.com/docs/reference/engine/classes/BindableFunction#Invoke). The code invoking the function **yields**
until the corresponding callback is found, and the callback receives the
arguments that you passed to [`Invoke()`](https://create.roblox.com/docs/reference/engine/classes/BindableFunction#Invoke). If
the callback was never set, the script that invokes it will not resume
execution.

As an alternative for one-way communication between two scripts on the same
side of the client-server boundary, consider [`BindableEvent`](https://create.roblox.com/docs/reference/engine/classes/BindableEvent) which does
**not** yield for a return.

As stated, [`BindableFunctions`](https://create.roblox.com/docs/reference/engine/classes/BindableFunction) do not allow for
communication between the server and clients. If you are looking for this
functionality, use a [`RemoteFunction`](https://create.roblox.com/docs/reference/engine/classes/RemoteFunction) as outlined in
[Remote Events and Callbacks](https://create.roblox.com/docs/scripting/events/remote).

See [Custom Events and Callbacks](https://create.roblox.com/docs/scripting/events/custom) for
code samples and further details on [`BindableFunction`](https://create.roblox.com/docs/reference/engine/classes/BindableFunction).
#### Parameter Limitations

Any type of Roblox object such as an `Datatype.Enum`, [`Instance`](https://create.roblox.com/docs/reference/engine/classes/Instance), or
others can be passed as a parameter when a [`BindableFunction`](https://create.roblox.com/docs/reference/engine/classes/BindableFunction) is
invoked, as well as Luau types such as numbers, strings, and booleans,
although you should carefully explore the
[limitations](https://create.roblox.com/docs/scripting/events/custom#argument-limitations).