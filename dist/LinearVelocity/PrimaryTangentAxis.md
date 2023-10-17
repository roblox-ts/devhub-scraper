The primary axis in the plane, when
[`VelocityConstraintMode`](https://create.roblox.com/docs/reference/engine/classes/LinearVelocity#VelocityConstraintMode) is
set to `Enum.VelocityConstraintMode|Plane`. Value depends on the value of
[`RelativeTo`](https://create.roblox.com/docs/reference/engine/classes/LinearVelocity#RelativeTo) as follows:

- If [`RelativeTo`](https://create.roblox.com/docs/reference/engine/classes/LinearVelocity#RelativeTo) is set to
`Enum.ActuatorRelativeTo|Attachment0`, this axis is the
[`Axis`](https://create.roblox.com/docs/reference/engine/classes/Attachment#Axis) of
[`Attachment0`](https://create.roblox.com/docs/reference/engine/classes/Constraint#Attachment0).
- If [`RelativeTo`](https://create.roblox.com/docs/reference/engine/classes/LinearVelocity#RelativeTo) is set to
`Enum.ActuatorRelativeTo|Attachment1`, this axis is the
[`Axis`](https://create.roblox.com/docs/reference/engine/classes/Attachment#Axis) of
[`Attachment1`](https://create.roblox.com/docs/reference/engine/classes/Constraint#Attachment1).
- If [`RelativeTo`](https://create.roblox.com/docs/reference/engine/classes/LinearVelocity#RelativeTo) is set to
`Enum.ActuatorRelativeTo|World`, this value must be specified in the
world space.