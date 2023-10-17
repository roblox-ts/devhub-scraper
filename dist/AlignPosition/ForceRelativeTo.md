Determines the axes that the constraint uses to limit the force. Only
applies when [`RigidityEnabled`](https://create.roblox.com/docs/reference/engine/classes/AlignPosition#RigidityEnabled) is
false and [`AlignPosition.ForceLimitMode`](https://create.roblox.com/docs/reference/engine/classes/AlignPosition#ForceLimitMode) is
`Enum.ForceLimitMode|PerAxis`. When set to
`Enum.ActuatorRelativeTo|World`, the constraint force is computed in the
world reference frame and the force limits specified in
[`MaxAxesForce`](https://create.roblox.com/docs/reference/engine/classes/AlignPosition#MaxAxesForce) refer to the axes of the
world coordinate system. When set to `Enum.ActuatorRelativeTo|Attachment0`
or `Enum.ActuatorRelativeTo|Attachment1`, the force limits specified in
[`MaxAxesForce`](https://create.roblox.com/docs/reference/engine/classes/AlignPosition#MaxAxesForce) refer to the axes of the
specified attachment coordinate system.