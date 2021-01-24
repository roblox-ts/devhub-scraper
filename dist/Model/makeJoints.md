**Deprecated**

SurfaceType based joining is deprecated, do not use MakeJoints for new projects. [WeldConstraints](https://developer.roblox.com/en-us/api-reference/class/WeldConstraint) and [HingeConstraints](https://developer.roblox.com/en-us/api-reference/class/HingeConstraint) should be used instead

Goes through all [Parts](https://developer.roblox.com/en-us/api-reference/class/BasePart) in the [Model](https://developer.roblox.com/en-us/api-reference/class/Model) and creates joints between the specified Parts and any planar touching surfaces, depending on the parts' surfaces.

*   Smooth surfaces will not create joints
*   Glue surfaces will create a [Glue](https://developer.roblox.com/en-us/api-reference/class/Glue) joint
*   Weld will create a [Weld](https://developer.roblox.com/en-us/api-reference/class/Weld) joint with any surface except for Unjoinable
*   Studs, Inlet, or Universal will each create a [Snap](https://developer.roblox.com/en-us/api-reference/class/Snap) joint with either of other the other two surfaces (e.g. Studs with Inlet and Universal)
*   Hinge and Motor surfaces create [Rotate](https://developer.roblox.com/en-us/api-reference/class/Rotate) and [RotateV](https://developer.roblox.com/en-us/api-reference/class/RotateV) joint instances

This function will not work if the Part is not a descendant of [Workspace](https://developer.roblox.com/en-us/api-reference/class/Workspace). Therefore developers must first ensure the Model is parented to Workspace before using MakeJoints.