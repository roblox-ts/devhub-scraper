This property specifies the offset of the part's pivot from its
[`CFrame`](https://create.roblox.com/docs/reference/engine/datatypes/CFrame), that is `part:GetPivot()` is the same as
`part.CFrame * part.PivotOffset`.

This is convenient for setting the pivot to a location in **local** space,
but setting a part's pivot to a location in **world** space can be done as
follows:
```lua
local part = workspace.BluePart
local desiredPivotCFrameInWorldSpace = CFrame.new(0, 10, 0)
part.PivotOffset = part.CFrame:ToObjectSpace(desiredPivotCFrameInWorldSpace)
```