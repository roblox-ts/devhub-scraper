This function destroys all of an [`Instance`](https://create.roblox.com/docs/reference/engine/classes/Instance)'s children.

As [`Instance:Destroy()`](https://create.roblox.com/docs/reference/engine/classes/Instance#Destroy) also calls itself on the children of an
object it is used on, this function will destroy all descendants.
#### Alternatives to ClearAllChildren

If the developer does not wish to destroy all descendants, they should use
[`Instance:GetChildren()`](https://create.roblox.com/docs/reference/engine/classes/Instance#GetChildren) or [`Instance:GetDescendants()`](https://create.roblox.com/docs/reference/engine/classes/Instance#GetDescendants) to
loop through an object and select what to destroy. For example, the
following code sample will destroy all parts in an object.
```lua
for _, instance in pairs(object:GetDescendants()) do
	if instance:IsA("BasePart") then
		instance:Destroy()
	end
end
```