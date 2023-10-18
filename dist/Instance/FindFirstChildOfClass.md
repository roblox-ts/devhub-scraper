Returns the first child of the [`Instance`](https://create.roblox.com/docs/reference/engine/classes/Instance) whose
[`ClassName`](https://create.roblox.com/docs/reference/engine/classes/Instance#ClassName) is equal to the given className.

If no matching child is found, this function returns nil.

Unlike [`Instance:FindFirstChildWhichIsA()`](https://create.roblox.com/docs/reference/engine/classes/Instance#FindFirstChildWhichIsA) this function uses only
returns objects whose class matches the given className, ignoring class
inheritance.

Developers looking for a child by name should use
[`Instance:FindFirstChild()`](https://create.roblox.com/docs/reference/engine/classes/Instance#FindFirstChild) instead.