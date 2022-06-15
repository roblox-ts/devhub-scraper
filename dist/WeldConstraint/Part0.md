The **Part0** and [WeldConstraint.Part1](https://developer.roblox.com/en-us/api-reference/property/WeldConstraint/Part1) properties of a [WeldConstraint](https://developer.roblox.com/en-us/api-reference/class/WeldConstraint) set which two [BasePart](https://developer.roblox.com/en-us/api-reference/class/BasePart) the weld connects. As soon as both properties are set and the weld is [WeldConstraint.Enabled](https://developer.roblox.com/en-us/api-reference/property/WeldConstraint/Enabled), the weld will lock the two parts together.

  
If Part0 or Part1 are ever set to new parts, then the WeldConstraint will instantly link the new part. The old part will no longer be constrained.The first part connected by the constraint.

Example
-------

local partA = Instance.new("Part")
local partB = Instance.new("Part")
 
partA.Position = Vector3.new(0, 10, 0)
partA.Parent = game.Workspace
 
partB.Position = Vector3.new(0, 10, 10)
partB.Parent = game.Workspace
 
local weld = Instance.new("WeldConstraint")
weld.Parent = partA
weld.Part0 = partAweld.Part1 = partB