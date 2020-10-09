**Deprecated**

SurfaceType based joining is deprecated, do not use MakeJoints for new projects. [WeldConstraints](https://developer.roblox.com/en-us/api-reference/class/WeldConstraint) and [HingeConstraints](https://developer.roblox.com/en-us/api-reference/class/HingeConstraint) should be used instead

Goes through all [Parts](https://developer.roblox.com/en-us/api-reference/class/BasePart) given. If any part's side has a [SurfaceType](https://developer.roblox.com/en-us/api-reference/enum/SurfaceType) that can make a joint it will create a joint with any adjacent parts.

Joints will be created between the specified Parts and any planar touching surfaces, depending on the parts' surfaces.

*   Smooth surfaces will not create joints
*   Glue surfaces will create a [Glue](https://developer.roblox.com/en-us/api-reference/class/Glue) joint
*   Weld will create a [Weld](https://developer.roblox.com/en-us/api-reference/class/Weld) joint with any surface except for Unjoinable
*   Studs, Inlet, or Universal will each create a [Snap](https://developer.roblox.com/en-us/api-reference/class/Snap) joint with either of other the other two surfaces (e.g. Studs with Inlet and Universal)
*   Hinge and Motor surfaces create [Rotate](https://developer.roblox.com/en-us/api-reference/class/Rotate) and [RotateV](https://developer.roblox.com/en-us/api-reference/class/RotateV) joint instances

Unlike [Model:MakeJoints](https://developer.roblox.com/en-us/api-reference/function/Model/MakeJoints), this function requires an array of parts as a parameter. This array is given as follows:

```lua
workspace:MakeJoints({part1, part2, part3})
``` 

Joints are broken if enough force is applied to them due to an [Explosion](https://developer.roblox.com/en-us/api-reference/class/Explosion), unless a [ForceField](https://developer.roblox.com/en-us/api-reference/class/ForceField) object is parented to the [BasePart](https://developer.roblox.com/en-us/api-reference/class/BasePart) or ancestor [Model](https://developer.roblox.com/en-us/api-reference/class/Model). For this reason, they are often used to make simple destructible buildings and other models.