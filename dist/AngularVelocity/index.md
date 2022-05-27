**AngularVelocity** is an object that applies a torque (up to
[MaxTorque](https://create.roblox.com/docs/reference/engine/classes/AngularVelocity#MaxTorque)) on a [BasePart](https://create.roblox.com/docs/reference/engine/classes/BasePart) such that the part
maintains a constant [AngularVelocity](https://create.roblox.com/docs/reference/engine/classes/AngularVelocity#AngularVelocity). The
goal angular velocity defined using world- or attachment-space coordinates by
setting [RelativeTo](https://create.roblox.com/docs/reference/engine/classes/AngularVelocity#RelativeTo).

This object maintains all functionality of [BodyAngularVelocity](https://create.roblox.com/docs/reference/engine/classes/BodyAngularVelocity), a legacy
body mover. To instead apply a constant torque, use a [Torque](https://create.roblox.com/docs/reference/engine/classes/Torque) object instead.
To instead apply a torque such that a constant orientation is maintained, use
a [AlignOrientation](https://create.roblox.com/docs/reference/engine/classes/AlignOrientation) instead.