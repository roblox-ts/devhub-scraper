Returns a string describing the [`Instance`](https://create.roblox.com/docs/reference/engine/classes/Instance)'s ancestry. The string is
a concatenation of the [`Name`](https://create.roblox.com/docs/reference/engine/classes/Instance#Name) of the object and its
ancestors, separated by periods. The [`DataModel`](https://create.roblox.com/docs/reference/engine/classes/DataModel) (`game`) is not
considered. For example, a [`Part`](https://create.roblox.com/docs/reference/engine/classes/Part) in the [`Workspace`](https://create.roblox.com/docs/reference/engine/classes/Workspace) may
return [`Workspace.Part`](https://create.roblox.com/docs/reference/engine/classes/Workspace#Part).

When called on an [`Instance`](https://create.roblox.com/docs/reference/engine/classes/Instance) that is not a descendant of the
[`DataModel`](https://create.roblox.com/docs/reference/engine/classes/DataModel), this function considers all ancestors up to and
including the topmost one without a [`Parent`](https://create.roblox.com/docs/reference/engine/classes/Instance#Parent).

This function is useful for logging and debugging. You shouldn't attempt
to parse the returned string for any useful operation; this function does
not escape periods (or any other symbol) in object names. In other words,
although its output often appears to be a valid Lua identifier, it is not
guaranteed.