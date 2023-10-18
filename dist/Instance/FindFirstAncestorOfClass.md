Returns the first ancestor of the [`Instance`](https://create.roblox.com/docs/reference/engine/classes/Instance) whose
[`Instance.ClassName`](https://create.roblox.com/docs/reference/engine/classes/Instance#ClassName) is equal to the given className.

This function works upwards, meaning it starts at the [`Instance`](https://create.roblox.com/docs/reference/engine/classes/Instance)'s
immediate [`Instance.Parent`](https://create.roblox.com/docs/reference/engine/classes/Instance#Parent) and works up towards the
[`DataModel`](https://create.roblox.com/docs/reference/engine/classes/DataModel). If no matching ancestor is found, it returns nil.

A common use of this function is finding the [`Model`](https://create.roblox.com/docs/reference/engine/classes/Model) a
[`BasePart`](https://create.roblox.com/docs/reference/engine/classes/BasePart) belongs to. For example:
```lua
local model = part:FindFirstAncestorOfClass("Model")
```

This function is a variant of [`Instance:FindFirstAncestor()`](https://create.roblox.com/docs/reference/engine/classes/Instance#FindFirstAncestor) which
checks the [`Instance.ClassName`](https://create.roblox.com/docs/reference/engine/classes/Instance#ClassName) property rather than
[`Instance.Name`](https://create.roblox.com/docs/reference/engine/classes/Instance#Name). [`Instance:FindFirstAncestorWhichIsA()`](https://create.roblox.com/docs/reference/engine/classes/Instance#FindFirstAncestorWhichIsA) also
exists, using the [`Instance:IsA()`](https://create.roblox.com/docs/reference/engine/classes/Instance#IsA) method instead to respect class
inheritance.