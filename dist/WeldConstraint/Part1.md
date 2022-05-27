The [WeldConstraint.Part0](https://create.roblox.com/docs/reference/engine/classes/WeldConstraint#Part0) and **Part1** properties of a [WeldConstraint](https://create.roblox.com/docs/reference/engine/classes/WeldConstraint)
set which two [BasePart](https://create.roblox.com/docs/reference/engine/classes/BasePart) the weld connects. As soon as both properties are
set and the weld is [WeldConstraint.Enabled](https://create.roblox.com/docs/reference/engine/classes/WeldConstraint#Enabled), the weld will lock the two
parts together.

If Part0 or Part1 are ever set to new parts, then the WeldConstraint will
instantly link the new part. The old part will no longer be constrained.

```lua
local partA = Instance.new("Part")
local partB = Instance.new("Part")

partA.Position = Vector3.new(0, 10, 0)
partA.Parent = game.Workspace

partB.Position = Vector3.new(0, 10, 10)
partB.Parent = game.Workspace

local weld = Instance.new("WeldConstraint")
weld.Parent = partA
weld.Part0 = partA
weld.Part1 = partB
```