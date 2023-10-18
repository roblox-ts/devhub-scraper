Fires the [`BindableEvent`](https://create.roblox.com/docs/reference/engine/classes/BindableEvent) which in turn fires the
[`Event`](https://create.roblox.com/docs/reference/engine/classes/BindableEvent#Event) event. This method does not yield, even
if no script has connected to the event, and even if a connected function
yields.

Any type of Roblox object such as an [`Enum`](https://create.roblox.com/docs/reference/engine/datatypes/Enum), [`Instance`](https://create.roblox.com/docs/reference/engine/classes/Instance), or
others can be passed as a parameter to
[`Fire()`](https://create.roblox.com/docs/reference/engine/classes/BindableEvent#Fire), as well as Luau types such as
numbers, strings, and booleans, although you should carefully explore the
[limitations](https://create.roblox.com/docs/scripting/events/custom#argument-limitations).

See [Custom Events and Callbacks](https://create.roblox.com/docs/scripting/events/custom) for
code samples and further details on [`Fire()`](https://create.roblox.com/docs/reference/engine/classes/BindableEvent#Fire).