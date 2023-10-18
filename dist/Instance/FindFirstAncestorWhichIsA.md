Returns the first ancestor of the [`Instance`](https://create.roblox.com/docs/reference/engine/classes/Instance) for whom
[`Instance:IsA()`](https://create.roblox.com/docs/reference/engine/classes/Instance#IsA) returns true for the given className.

This function works upwards, meaning it starts at the [`Instance`](https://create.roblox.com/docs/reference/engine/classes/Instance)'s
immediate [`Instance.Parent`](https://create.roblox.com/docs/reference/engine/classes/Instance#Parent) and works up towards the
[`DataModel`](https://create.roblox.com/docs/reference/engine/classes/DataModel). If no matching ancestor is found, it returns nil.

Unlike [`Instance:FindFirstAncestorOfClass()`](https://create.roblox.com/docs/reference/engine/classes/Instance#FindFirstAncestorOfClass), this function uses
[`Instance:IsA()`](https://create.roblox.com/docs/reference/engine/classes/Instance#IsA) which respects class inheritance. For example:
```lua
print(part:IsA("Part"))  --> true
print(part:IsA("BasePart"))  --> true
print(part:IsA("Instance"))  --> true
```

Therefore, the following code sample will return the first
[`BasePart`](https://create.roblox.com/docs/reference/engine/classes/BasePart) ancestor, regardless of if it is a [`WedgePart`](https://create.roblox.com/docs/reference/engine/classes/WedgePart),
[`MeshPart`](https://create.roblox.com/docs/reference/engine/classes/MeshPart) or [`Part`](https://create.roblox.com/docs/reference/engine/classes/Part).
```lua
local part = object:FindFirstAncestorWhichIsA("BasePart")
```

See also, [`Instance:FindFirstAncestor()`](https://create.roblox.com/docs/reference/engine/classes/Instance#FindFirstAncestor).