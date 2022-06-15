Returns the first child of the [Instance](https://developer.roblox.com/en-us/api-reference/class/Instance) for whom [Instance:IsA](https://developer.roblox.com/en-us/api-reference/function/Instance/IsA) returns true for the given className.

If no matching child is found, this function returns nil. If the optional recursive argument is true, this function searches all descendants rather than only the immediate children of the [Instance](https://developer.roblox.com/en-us/api-reference/class/Instance).

Unlike [Instance:FindFirstChildOfClass](https://developer.roblox.com/en-us/api-reference/function/Instance/FindFirstChildOfClass), this function uses [Instance:IsA](https://developer.roblox.com/en-us/api-reference/function/Instance/IsA) which respects class inheritance. For example:

print(part:IsA("Part")) --> true
print(part:IsA("BasePart")) --> true
print(part:IsA("Instance")) --> true

Therefore, the following code sample will return the first [BasePart](https://developer.roblox.com/en-us/api-reference/class/BasePart) child, regardless of if it is a [WedgePart](https://developer.roblox.com/en-us/api-reference/class/WedgePart), [MeshPart](https://developer.roblox.com/en-us/api-reference/class/MeshPart) or [Part](https://developer.roblox.com/en-us/api-reference/class/Part).

local part = object:FindFirstChildWhichIsA("BasePart")

Developers looking for a child by name, should use [Instance:FindFirstChild](https://developer.roblox.com/en-us/api-reference/function/Instance/FindFirstChild) instead.