**Deprecated**

SurfaceType based joining is deprecated, do not use MakeJoints for new
projects. [`WeldConstraints`](https://create.roblox.com/docs/reference/engine/classes/WeldConstraint) and
[`HingeConstraints`](https://create.roblox.com/docs/reference/engine/classes/HingeConstraint) should be used instead.

Goes through all [`Parts`](https://create.roblox.com/docs/reference/engine/classes/BasePart) given. If any part's side has a
[`Enum.SurfaceType`](https://create.roblox.com/docs/reference/engine/enums/SurfaceType) that can make a joint it will create a joint with any
adjacent parts.

Joints will be created between the specified Parts and any planar touching
surfaces, depending on the parts' surfaces.

- Smooth surfaces will not create joints
- Glue surfaces will create a [`Glue`](https://create.roblox.com/docs/reference/engine/classes/Glue) joint
- Weld will create a [`Weld`](https://create.roblox.com/docs/reference/engine/classes/Weld) joint with any surface except for
Unjoinable
- Studs, Inlet, or Universal will each create a [`Snap`](https://create.roblox.com/docs/reference/engine/classes/Snap) joint with
either of other the other two surfaces (e.g. Studs with Inlet and
Universal)
- Hinge and Motor surfaces create [`Rotate`](https://create.roblox.com/docs/reference/engine/classes/Rotate) and [`RotateV`](https://create.roblox.com/docs/reference/engine/classes/RotateV) joint
instances

Unlike [`Model:MakeJoints()`](https://create.roblox.com/docs/reference/engine/classes/Model#MakeJoints), this function requires an array of
parts as a parameter. This array is given as follows:
```lua
workspace:MakeJoints({part1, part2, part3})
```

Joints are broken if enough force is applied to them due to an
[`Explosion`](https://create.roblox.com/docs/reference/engine/classes/Explosion), unless a [`ForceField`](https://create.roblox.com/docs/reference/engine/classes/ForceField) object is parented to the
[`BasePart`](https://create.roblox.com/docs/reference/engine/classes/BasePart) or ancestor [`Model`](https://create.roblox.com/docs/reference/engine/classes/Model). For this reason, they are
often used to make simple destructible buildings and other models.