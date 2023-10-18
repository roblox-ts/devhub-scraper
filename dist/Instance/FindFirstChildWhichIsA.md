Returns the first child of the [`Instance`](https://create.roblox.com/docs/reference/engine/classes/Instance) for whom
[`Instance:IsA()`](https://create.roblox.com/docs/reference/engine/classes/Instance#IsA) returns true for the given className.

If no matching child is found, this function returns nil. If the optional
recursive argument is true, this function searches all descendants rather
than only the immediate children of the [`Instance`](https://create.roblox.com/docs/reference/engine/classes/Instance).

Unlike [`Instance:FindFirstChildOfClass()`](https://create.roblox.com/docs/reference/engine/classes/Instance#FindFirstChildOfClass), this function uses
[`Instance:IsA()`](https://create.roblox.com/docs/reference/engine/classes/Instance#IsA) which respects class inheritance. For example:
```lua
print(part:IsA("Part")) --> true
print(part:IsA("BasePart")) --> true
print(part:IsA("Instance")) --> true
```

Therefore, the following code sample will return the first
[`BasePart`](https://create.roblox.com/docs/reference/engine/classes/BasePart) child, regardless of if it is a [`WedgePart`](https://create.roblox.com/docs/reference/engine/classes/WedgePart),
[`MeshPart`](https://create.roblox.com/docs/reference/engine/classes/MeshPart) or [`Part`](https://create.roblox.com/docs/reference/engine/classes/Part).
```lua
local part = object:FindFirstChildWhichIsA("BasePart")
```

Developers looking for a child by name, should use
[`Instance:FindFirstChild()`](https://create.roblox.com/docs/reference/engine/classes/Instance#FindFirstChild) instead.