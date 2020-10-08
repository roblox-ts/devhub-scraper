Returns the first child of the [Instance](https://developer.roblox.com/en-us/api-reference/class/Instance) whose [ClassName](https://developer.roblox.com/en-us/api-reference/property/Instance/ClassName) is equal to the given className.

If no matching child is found, this function returns nil.

Unlike [Instance:FindFirstChildWhichIsA](https://developer.roblox.com/en-us/api-reference/function/Instance/FindFirstChildWhichIsA) this function uses only returns objects whose class matches the given className, ignoring class inheritance.

Developers looking for a child by name, should use [Instance:FindFirstChild](https://developer.roblox.com/en-us/api-reference/function/Instance/FindFirstChild) instead.