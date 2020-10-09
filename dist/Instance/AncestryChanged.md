Fires when the [Instance.Parent](https://developer.roblox.com/en-us/api-reference/property/Instance/Parent) property of the object or one of its ancestors is changed.

This event includes two parameters, _child_ and _parent_. _Child_ refers to the [Instance](https://developer.roblox.com/en-us/api-reference/class/Instance) whose [Instance.Parent](https://developer.roblox.com/en-us/api-reference/property/Instance/Parent) was actually changed. _Parent_ refers to this [Instance](https://developer.roblox.com/en-us/api-reference/class/Instance)'s new [Instance.Parent](https://developer.roblox.com/en-us/api-reference/property/Instance/Parent).

A common use for this function is detecting when an object has been removed or destroyed (using [Instance:Destroy](https://developer.roblox.com/en-us/api-reference/function/Instance/Destroy)). This is done by checking if the parent has been set to nil. For example:

```Lua
object.AncestryChanged:Connect(function(_, parent)
    if not parent then
        print("object destroyed!")
    end
end)
```