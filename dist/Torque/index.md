A **Torque** constraint applies constant torque to an assembly from its center
of mass. Alternatively:

- Because the [`Torque`](https://create.roblox.com/docs/reference/engine/classes/Torque) constraint applies **constant** torque and
angular acceleration, very high speeds may result if no other forces are
involved. If you want to maintain a more steady velocity over time, use an
[`AngularVelocity`](https://create.roblox.com/docs/reference/engine/classes/AngularVelocity) constraint.
- If you only need **initial** velocity, set the
[`AssemblyAngularVelocity`](https://create.roblox.com/docs/reference/engine/classes/BasePart#AssemblyAngularVelocity) property
directly on the assembly.

When configuring this constraint, it may be helpful to study
[Roblox Units](https://create.roblox.com/docs/physics/units) to understand how Roblox units
compare to metric units.
#### Relativity

By default, torque is applied relative to
[`Attachment0`](https://create.roblox.com/docs/reference/engine/classes/Constraint#Attachment0). If the parent assembly rotates,
the torque will change direction to match the adjusted orientation of the
attachment.

If [`RelativeTo`](https://create.roblox.com/docs/reference/engine/classes/Torque#RelativeTo) is set to
`Enum.ActuatorRelativeTo|World`, torque will be applied in world coordinates,
independent of the parent or attachment orientations.

If [`RelativeTo`](https://create.roblox.com/docs/reference/engine/classes/Torque#RelativeTo) is set to
`Enum.ActuatorRelativeTo|Attachment1`, torque will be applied relative to
[`Attachment1`](https://create.roblox.com/docs/reference/engine/classes/Constraint#Attachment1) and, if the attachment rotates,
change to match its orientation.