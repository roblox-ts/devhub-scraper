Invokes the [`BindableFunction`](https://create.roblox.com/docs/reference/engine/classes/BindableFunction) which in turn calls the
[`OnInvoke`](https://create.roblox.com/docs/reference/engine/classes/BindableFunction#OnInvoke) callback, returning any values
returned by the callback. Invocations yield until the corresponding
callback is found, and if the callback was never set, the script that
invokes it will not resume execution.

Any type of Roblox object such as an [`Enum`](https://create.roblox.com/docs/reference/engine/datatypes/Enum), [`Instance`](https://create.roblox.com/docs/reference/engine/classes/Instance), or
others can be passed as a parameter to
[`Invoke()`](https://create.roblox.com/docs/reference/engine/classes/BindableFunction#Invoke), as well as Luau types such as
numbers, strings, and booleans, although you should carefully explore the
[limitations](https://create.roblox.com/docs/scripting/events/custom#argument-limitations).

Only one function can be bound to
[`Invoke()`](https://create.roblox.com/docs/reference/engine/classes/BindableFunction#Invoke) at a time. If you assign
multiple functions, only the last one assigned will be used.

See [Custom Events and Callbacks](https://create.roblox.com/docs/scripting/events/custom) for
code samples and further details on
[`Invoke()`](https://create.roblox.com/docs/reference/engine/classes/BindableFunction#Invoke).