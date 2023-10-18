Returns an array (a numerically indexed table) containing all of the
[`Instance`](https://create.roblox.com/docs/reference/engine/classes/Instance)'s direct children, or every [`Instance`](https://create.roblox.com/docs/reference/engine/classes/Instance) whose
[`Parent`](https://create.roblox.com/docs/reference/engine/classes/Instance#Parent) is equal to the object. The array can be
iterated upon using either a numeric or generic for-loop:
```lua
-- Numeric for-loop example
local children = workspace:GetChildren()
for i = 1, #children do
	local child = children[i]
	print(child.Name .. " is child number " .. i)
end
```
```lua
-- Generic for-loop example
local children = workspace:GetChildren()
for i, child in ipairs(children) do
	print(child.Name .. " is child number " .. i)
end
```

The children are sorted by the order in which their
[`Parent`](https://create.roblox.com/docs/reference/engine/classes/Instance#Parent) property was set to the object.

See also the [`GetDescendants`](https://create.roblox.com/docs/reference/engine/classes/Instance#GetDescendants) function.