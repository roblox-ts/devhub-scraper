Returns the first ancestor of the [Instance](https://developer.roblox.com/en-us/api-reference/class/Instance) whose [Instance.ClassName](https://developer.roblox.com/en-us/api-reference/property/Instance/ClassName) is equal to the given className.

This function works upwards, meaning it starts at the [Instance](https://developer.roblox.com/en-us/api-reference/class/Instance)'s immediate [Instance.Parent](https://developer.roblox.com/en-us/api-reference/property/Instance/Parent) and works up towards the [DataModel](https://developer.roblox.com/en-us/api-reference/class/DataModel). If no matching ancestor is found, it returns nil.

A common use of this function is finding the [Model](https://developer.roblox.com/en-us/api-reference/class/Model) a [BasePart](https://developer.roblox.com/en-us/api-reference/class/BasePart) belongs to. For example:

```Lua
local model = part:FindFirstAncestorOfClass("Model")
``` 

This function is a variant of [Instance:FindFirstAncestor](https://developer.roblox.com/en-us/api-reference/function/Instance/FindFirstAncestor) which checks the [Instance.ClassName](https://developer.roblox.com/en-us/api-reference/property/Instance/ClassName) property rather than [Instance.Name](https://developer.roblox.com/en-us/api-reference/property/Instance/Name). [Instance:FindFirstAncestorWhichIsA](https://developer.roblox.com/en-us/api-reference/function/Instance/FindFirstAncestorWhichIsA) also exists, using the [Instance:IsA](https://developer.roblox.com/en-us/api-reference/function/Instance/IsA) method instead to respect class inheritance.