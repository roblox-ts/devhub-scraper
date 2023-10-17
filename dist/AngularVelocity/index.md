The **AngularVelocity** constraint applies torque on an assembly to maintain a
**constant** angular velocity. Alternatively:

- If you want to control the amount of torque applied, use a [`Torque`](https://create.roblox.com/docs/reference/engine/classes/Torque)
constraint.
- If you only need **initial** angular velocity, set the
[`AssemblyAngularVelocity`](https://create.roblox.com/docs/reference/engine/classes/BasePart#AssemblyAngularVelocity) method
directly on the assembly.

When configuring this constraint, it may be helpful to study
[Roblox Units](https://create.roblox.com/docs/physics/units) to understand how Roblox units
compare to metric units.
#### Relativity

Application of velocity can be controlled through the constraint's
[`RelativeTo`](https://create.roblox.com/docs/reference/engine/classes/AngularVelocity#RelativeTo) property. If set to
`Enum.ActuatorRelativeTo|World`, the angular velocity vector is used as is. If
set to `Enum.ActuatorRelativeTo|Attachment1` and the constraint's
[`Attachment1`](https://create.roblox.com/docs/reference/engine/classes/Constraint#Attachment1) property is set to another
attachment, the angular velocity will be affected by that of the other
attachment. Setting [`RelativeTo`](https://create.roblox.com/docs/reference/engine/classes/AngularVelocity#RelativeTo) to
`Enum.ActuatorRelativeTo|Attachment1` also exposes the
[`ReactionTorqueEnabled`](https://create.roblox.com/docs/reference/engine/classes/AngularVelocity#ReactionTorqueEnabled) property.