This function creates joints between the specified [Parts](https://developer.roblox.com/en-us/api-reference/class/BasePart) and any touching parts depending on the parts' surfaces and the specified joint creation mode.

This function creates joints between the specified Parts and any planar touching surfaces, depending on the parts' surfaces and the specified joint creation mode.

*   Glue, Studs, Inlets, Universal, Weld, and Smooth surfaces will all create Weld instances.
*   Spheres will not surface-weld to anything. The rounded sides of cylinders will not surface-weld, but the flat end sides will.
*   Hinge and Motor surfaces will still create [Rotate](https://developer.roblox.com/en-us/api-reference/class/Rotate) and [RotateP](https://developer.roblox.com/en-us/api-reference/class/RotateP) joint instances, regardless of part shape.

The first parameter is an array of [BaseParts](https://developer.roblox.com/en-us/api-reference/class/BasePart). Joints will only be created between the parts in the array and not in the array. Joints will not be created between the parts in the array.

The second parameter is a [JointCreationMode](https://developer.roblox.com/en-us/api-reference/enum/JointCreationMode) that determines how joints will be created. Passing in either enum value, `enum/JointCreationMode|Enum.JointCreationMode.All` or `enum/JointCreationMode|Enum.JointCreationMode.Surface`, has the same behavior which equates to Join Always

This function is used by the Roblox Studio Move tool when the user finishes moving a selection. In conjunction with [Plugin:GetJoinMode](https://developer.roblox.com/en-us/api-reference/function/Plugin/GetJoinMode) and [Workspace:UnjoinFromOutsiders](https://developer.roblox.com/en-us/api-reference/function/Workspace/UnjoinFromOutsiders) it can be used to retain join functionality when developing custom studio build tools. See the snippets below for an example.

\-- finished moving a selection, make joints
local function finishedMovingParts(parts)
	local joinMode = Plugin:GetJoinMode()
	workspace:JoinToOutsiders(parts, joinMode)
end\-- started moving a selection, break joints
local function startMovingParts(parts)
	workspace:UnjoinFromOutsiders(parts)
end

Developers interested in seeing how this function is used in the Roblox Studio should see the [Studio Tools GitHub repository](https://github.com/Roblox/Studio-Tools).