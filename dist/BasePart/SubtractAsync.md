**SubtractAsync** creates new [UnionOperation](https://developer.roblox.com/en-us/api-reference/class/UnionOperation) which occupies the same space as the part minus the space(s) occupied by the parts in the given array. It does this by invoking the real-time CSG solver. Similar to [Clone](https://developer.roblox.com/en-us/api-reference/function/Instance/Clone), the returned object has no [Parent](https://developer.roblox.com/en-us/api-reference/property/Instance/Parent) set.

The following image depicts an example of a SubtractAsync operation: the yellow part on the left has SubtractAsync called with a table containing the two pink parts. The resulting UnionOperation is moved to the right, as it would otherwise overlap the original part and not be visible. Notice the missing concave pieces that match the spaces once occupied by the pink parts.

![An example of a SubtractAsync operation: the left depicts a yellow part with two pink parts, which are then subtracted from the yellow part using SubtractAsync. The resulting UnionOperation is visible on the right](https://developer.roblox.com/assets/bltd7903ce5973c2f8e/BasePart.SubtractAsync.png)```lua
local yellowPart = workspace.YellowPart
local pinkParts = {workspace.PinkPart, workspace.PinkPart2}
local union = yellowPart:SubtractAsync(pinkParts)
union.Parent = workspace
```