Returns the first ancestor of the [Instance](https://developer.roblox.com/en-us/api-reference/class/Instance) whose [Instance.Name](https://developer.roblox.com/en-us/api-reference/property/Instance/Name) is equal to the given name.

This function works upwards, meaning it starts at the [Instance](https://developer.roblox.com/en-us/api-reference/class/Instance)'s immediate [Instance.Parent](https://developer.roblox.com/en-us/api-reference/property/Instance/Parent) and works up towards the [DataModel](https://developer.roblox.com/en-us/api-reference/class/DataModel). If no matching ancestor is found, it returns nil.

The following code snippet would find the first ancestor of the object named 'Car'.

```lua
local car = object:FindFirstAncestor("Car")
``` 

For variants of this function that find ancestors of a specific class, please see [Instance:FindFirstAncestorOfClass](https://developer.roblox.com/en-us/api-reference/function/Instance/FindFirstAncestorOfClass) and [Instance:FindFirstAncestorWhichIsA](https://developer.roblox.com/en-us/api-reference/function/Instance/FindFirstAncestorWhichIsA).