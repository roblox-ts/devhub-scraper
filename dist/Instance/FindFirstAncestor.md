Returns the first ancestor of the [`Instance`](https://create.roblox.com/docs/reference/engine/classes/Instance) whose
[`Instance.Name`](https://create.roblox.com/docs/reference/engine/classes/Instance#Name) is equal to the given name.

This function works upwards, meaning it starts at the [`Instance`](https://create.roblox.com/docs/reference/engine/classes/Instance)'s
immediate [`Instance.Parent`](https://create.roblox.com/docs/reference/engine/classes/Instance#Parent) and works up towards the
[`DataModel`](https://create.roblox.com/docs/reference/engine/classes/DataModel). If no matching ancestor is found, it returns nil.

The following code snippet would find the first ancestor of the object
named 'Car'.
```lua
local car = object:FindFirstAncestor("Car")
```

For variants of this function that find ancestors of a specific class,
please see [`Instance:FindFirstAncestorOfClass()`](https://create.roblox.com/docs/reference/engine/classes/Instance#FindFirstAncestorOfClass) and
[`Instance:FindFirstAncestorWhichIsA()`](https://create.roblox.com/docs/reference/engine/classes/Instance#FindFirstAncestorWhichIsA).