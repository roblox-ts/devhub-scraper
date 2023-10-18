Breaks all joints between the specified [`BasePart`](https://create.roblox.com/docs/reference/engine/classes/BasePart)s and other
[`BasePart`](https://create.roblox.com/docs/reference/engine/classes/BasePart)s.

This function requires an array of [`BasePart`](https://create.roblox.com/docs/reference/engine/classes/BasePart)s. Note, joints will
not be broken between these [`BasePart`](https://create.roblox.com/docs/reference/engine/classes/BasePart)s (each other), only between
these [`BasePart`](https://create.roblox.com/docs/reference/engine/classes/BasePart)s and other [`BasePart`](https://create.roblox.com/docs/reference/engine/classes/BasePart)s not in the array.

This function is used by the Roblox Studio Move tool when the user starts
moving a selection. In conjunction with [`Plugin:GetJoinMode()`](https://create.roblox.com/docs/reference/engine/classes/Plugin#GetJoinMode) and
[`Workspace:JoinToOutsiders()`](https://create.roblox.com/docs/reference/engine/classes/Workspace#JoinToOutsiders) it can be used to retain join
functionality when developing custom studio build tools. See the snippets
below for an example.
```lua
-- finished moving a selection, make joints
local function finishedMovingParts(parts)
	local joinMode = Plugin:GetJoinMode()
	workspace:JoinToOutsiders(parts, joinMode)
end
```
```lua
-- started moving a selection, break joints
local function startMovingParts(parts)
	workspace:UnjoinFromOutsiders(parts)
end
```