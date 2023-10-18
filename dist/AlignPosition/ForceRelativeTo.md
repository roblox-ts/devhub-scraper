Determines the axes that the constraint uses to limit the force. Only
applies when [`RigidityEnabled`](https://create.roblox.com/docs/reference/engine/classes/AlignPosition#RigidityEnabled) is
false and [`AlignPosition.ForceLimitMode`](https://create.roblox.com/docs/reference/engine/classes/AlignPosition#ForceLimitMode) is
[`PerAxis`](https://create.roblox.com/docs/reference/engine/enums/ForceLimitMode). When set to
[`World`](https://create.roblox.com/docs/reference/engine/enums/ActuatorRelativeTo), the constraint force is computed in the
world reference frame and the force limits specified in
[`MaxAxesForce`](https://create.roblox.com/docs/reference/engine/classes/AlignPosition#MaxAxesForce) refer to the axes of the
world coordinate system. When set to [`Attachment0`](https://create.roblox.com/docs/reference/engine/enums/ActuatorRelativeTo)
or [`Attachment1`](https://create.roblox.com/docs/reference/engine/enums/ActuatorRelativeTo), the force limits specified in
[`MaxAxesForce`](https://create.roblox.com/docs/reference/engine/classes/AlignPosition#MaxAxesForce) refer to the axes of the
specified attachment coordinate system.