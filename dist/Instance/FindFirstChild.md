Returns the first child of the [`Instance`](https://create.roblox.com/docs/reference/engine/classes/Instance) with the given name,

or `nil` if no such child exists. If the optional `recursive` argument is
true, this function searches all descendants rather than only the
immediate children of the [`Instance`](https://create.roblox.com/docs/reference/engine/classes/Instance).
#### Checking the Existence of an Object

FindFirstChild is necessary if you need to verify an object exists before
continuing. Attempting to index a child by name using the dot operator
throws an error if the child doesn't exist.
```lua
-- The following line errors if Part doesn't exist in the Workspace:
workspace.Part.Transparency = 0.5
```

Use FindFirstChild to first check for Part, then use an if-statement to
run code that needs it.
```lua
local part = workspace:FindFirstChild("Part")
if part then
	part.Transparency = 0.5
end
```
#### Finding a Child Whose Name Matches a Property

Sometimes the [`Name`](https://create.roblox.com/docs/reference/engine/classes/Instance#Name) of an object is the same as that
of a property of its [`Parent`](https://create.roblox.com/docs/reference/engine/classes/Instance#Parent). When using the dot
operator, properties take precedence over children if they share a name.

In the following example, a [`Folder`](https://create.roblox.com/docs/reference/engine/classes/Folder) called "Color" is added to a
[`Part`](https://create.roblox.com/docs/reference/engine/classes/Part), which also has the [`Part.Color`](https://create.roblox.com/docs/reference/engine/classes/Part#Color) property.
[`Part.Color`](https://create.roblox.com/docs/reference/engine/classes/Part#Color) refers to the [`Color3`](https://create.roblox.com/docs/reference/engine/datatypes/Color3), not the Folder.
```lua
local part = Instance.new("Part")
local folder = Instance.new("Folder")
folder.Name = "Color"
folder.Parent = part
local c = part.Color --> A Color3
local c2 = part:FindFirstChild("Color") --> The Folder
```

A benefit of using [`FindFirstChild()`](https://create.roblox.com/docs/reference/engine/classes/Instance#FindFirstChild) in
this way is that the introduction of new properties does not impose a risk
on your code.
#### Performance Note

[`FindFirstChild()`](https://create.roblox.com/docs/reference/engine/classes/Instance#FindFirstChild) takes about 20% longer
than using the dot operator and almost 8 times longer than simply storing
a reference to an object. Therefore, you should avoid calling it in
performance-dependent code such as in tight loops or functions connected
to [`RunService.Heartbeat`](https://create.roblox.com/docs/reference/engine/classes/RunService#Heartbeat) and [`RunService.RenderStepped`](https://create.roblox.com/docs/reference/engine/classes/RunService#RenderStepped).
Instead, store the result in a variable, or consider using
[`ChildAdded`](https://create.roblox.com/docs/reference/engine/classes/Instance#ChildAdded) or
[`WaitForChild()`](https://create.roblox.com/docs/reference/engine/classes/Instance#WaitForChild) to detect when a child of a
given name becomes available.