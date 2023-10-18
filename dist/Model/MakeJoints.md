SurfaceType based joining is deprecated. Don't use MakeJoints for new
projects. Use [`WeldConstraints`](https://create.roblox.com/docs/reference/engine/classes/WeldConstraint) and
[`HingeConstraints`](https://create.roblox.com/docs/reference/engine/classes/HingeConstraint) instead.

Goes through all [`Parts`](https://create.roblox.com/docs/reference/engine/classes/BasePart) in the [`Model`](https://create.roblox.com/docs/reference/engine/classes/Model) and creates
joints between the specified Parts and any planar touching surfaces,
depending on the parts' surfaces.

- Smooth surfaces will not create joints
- Glue surfaces will create a [`Glue`](https://create.roblox.com/docs/reference/engine/classes/Glue) joint
- Weld will create a [`Weld`](https://create.roblox.com/docs/reference/engine/classes/Weld) joint with any surface except for
Unjoinable
- Studs, Inlet, or Universal will each create a [`Snap`](https://create.roblox.com/docs/reference/engine/classes/Snap) joint with
either of other the other two surfaces (e.g. Studs with Inlet and
Universal)
- Hinge and Motor surfaces create [`Rotate`](https://create.roblox.com/docs/reference/engine/classes/Rotate) and [`RotateV`](https://create.roblox.com/docs/reference/engine/classes/RotateV) joint
instances

This function doesn't work if the Part is not a descendant of
[`Workspace`](https://create.roblox.com/docs/reference/engine/classes/Workspace). Therefore, you must first ensure the Model is parented
to Workspace before using MakeJoints.