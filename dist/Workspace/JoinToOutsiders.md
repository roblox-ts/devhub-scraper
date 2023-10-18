This function creates joints between the specified [`Parts`](https://create.roblox.com/docs/reference/engine/classes/BasePart)
and any touching parts depending on the parts' surfaces and the specified
joint creation mode.

This function creates joints between the specified Parts and any planar
touching surfaces, depending on the parts' surfaces and the specified
joint creation mode.

- Glue, Studs, Inlets, Universal, Weld, and Smooth surfaces will all
create Weld instances.
- Spheres will not surface-weld to anything. The rounded sides of
cylinders will not surface-weld, but the flat end sides will.
- Hinge and Motor surfaces will still create [`Rotate`](https://create.roblox.com/docs/reference/engine/classes/Rotate) and
[`RotateP`](https://create.roblox.com/docs/reference/engine/classes/RotateP) joint instances, regardless of part shape.

The first parameter is an array of [`BaseParts`](https://create.roblox.com/docs/reference/engine/classes/BasePart). Joints will
only be created between the parts in the array and not in the array.
Joints will not be created between the parts in the array.

The second parameter is a [`Enum.JointCreationMode`](https://create.roblox.com/docs/reference/engine/enums/JointCreationMode) that determines how
joints will be created. Passing in either enum value,
[`Enum.JointCreationMode.All`](https://create.roblox.com/docs/reference/engine/enums/JointCreationMode) or
[`Enum.JointCreationMode.Surface`](https://create.roblox.com/docs/reference/engine/enums/JointCreationMode), has the same
behavior which equates to Join Always

This function is used by the Roblox Studio Move tool when the user
finishes moving a selection. In conjunction with
[`Plugin:GetJoinMode()`](https://create.roblox.com/docs/reference/engine/classes/Plugin#GetJoinMode) and [`Workspace:UnjoinFromOutsiders()`](https://create.roblox.com/docs/reference/engine/classes/Workspace#UnjoinFromOutsiders)
it can be used to retain join functionality when developing custom studio
build tools. See the snippets below for an example.
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