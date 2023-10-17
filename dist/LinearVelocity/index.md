The **LinearVelocity** constraint applies force on an assembly to maintain a
**constant** linear velocity. It can be set to apply force along a
`Datatype.Vector3`, line, or 2D plane. Alternatively:

- If you want to control the amount of force applied, use a
[`VectorForce`](https://create.roblox.com/docs/reference/engine/classes/VectorForce) constraint.
- If you only need **initial** linear velocity, set the
[`AssemblyLinearVelocity`](https://create.roblox.com/docs/reference/engine/classes/BasePart#AssemblyLinearVelocity) property
directly on the assembly.

When configuring this constraint, it may be helpful to study
[Roblox Units](https://create.roblox.com/docs/physics/units) to understand how Roblox units
compare to metric units.
#### Relativity

Application of velocity can be controlled through the constraint's
[`RelativeTo`](https://create.roblox.com/docs/reference/engine/classes/LinearVelocity#RelativeTo) property. If set to
`Enum.ActuatorRelativeTo|World`, force will be applied in world coordinates,
independent of the parent or attachment orientations. If set to
`Enum.ActuatorRelativeTo|Attachment0` or
`Enum.ActuatorRelativeTo|Attachment1`, force will be applied relative to
[`Attachment0`](https://create.roblox.com/docs/reference/engine/classes/Constraint#Attachment0) or
[`Attachment1`](https://create.roblox.com/docs/reference/engine/classes/Constraint#Attachment1) respectively.