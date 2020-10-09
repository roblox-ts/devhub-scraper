Returns the first ancestor of the [Instance](https://developer.roblox.com/en-us/api-reference/class/Instance) for whom [Instance:IsA](https://developer.roblox.com/en-us/api-reference/function/Instance/IsA) returns true for the given className.

This function works upwards, meaning it starts at the [Instance](https://developer.roblox.com/en-us/api-reference/class/Instance)'s immediate [Instance.Parent](https://developer.roblox.com/en-us/api-reference/property/Instance/Parent) and works up towards the [DataModel](https://developer.roblox.com/en-us/api-reference/class/DataModel). If no matching ancestor is found, it returns nil.

Unlike [Instance:FindFirstAncestorOfClass](https://developer.roblox.com/en-us/api-reference/function/Instance/FindFirstAncestorOfClass), this function uses [Instance:IsA](https://developer.roblox.com/en-us/api-reference/function/Instance/IsA) which respects class inheritance. For example:

```lua
print(part:IsA("Part")) --&gt; true
print(part:IsA("BasePart")) --&gt; true
print(part:IsA("Instance")) --&gt; true
``` 

Therefore, the following code sample will return the first [BasePart](https://developer.roblox.com/en-us/api-reference/class/BasePart) ancestor, regardless of if it is a [WedgePart](https://developer.roblox.com/en-us/api-reference/class/WedgePart), [MeshPart](https://developer.roblox.com/en-us/api-reference/class/MeshPart) or [Part](https://developer.roblox.com/en-us/api-reference/class/Part).

```lua
local part = object:FindFirstAncestorWhichIsA("BasePart")
``` 

See also, [Instance:FindFirstAncestor](https://developer.roblox.com/en-us/api-reference/function/Instance/FindFirstAncestor).