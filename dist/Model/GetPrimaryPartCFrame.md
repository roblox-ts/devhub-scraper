This function has been superseded by [`PVInstance:GetPivot()`](https://create.roblox.com/docs/reference/engine/classes/PVInstance#GetPivot) which
acts as a replacement and does not change your code's behavior. Use
[`PVInstance:GetPivot()`](https://create.roblox.com/docs/reference/engine/classes/PVInstance#GetPivot) for new work and migrate your existing
[`Model:GetPrimaryPartCFrame()`](https://create.roblox.com/docs/reference/engine/classes/Model#GetPrimaryPartCFrame) calls when convenient.

Returns the [`CFrame`](https://create.roblox.com/docs/reference/engine/datatypes/CFrame) of the [`Model`](https://create.roblox.com/docs/reference/engine/classes/Model)'s
[`Model.PrimaryPart`](https://create.roblox.com/docs/reference/engine/classes/Model#PrimaryPart).

This function is equivalent to the following.
```lua
Model.PrimaryPart.CFrame
```

Note this function will throw an error if no primary part exists for the
[`Model`](https://create.roblox.com/docs/reference/engine/classes/Model). If this behavior is not desired developers can do the
following, which will be equal to nil if there is no primary part.
```lua
local cFrame = Model.PrimaryPart and Model.PrimaryPart.CFrame
```