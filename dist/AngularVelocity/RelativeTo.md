The `Datatype.CFrame` in which the [`AngularVelocity`](https://create.roblox.com/docs/reference/engine/classes/AngularVelocity) force is
specified. If set to [`World`](https://create.roblox.com/docs/reference/engine/enums/ActuatorRelativeTo), the angular velocity
vector is used as is. If set to [`Attachment1`](https://create.roblox.com/docs/reference/engine/enums/ActuatorRelativeTo), the
angular velocity is transformed by the `Datatype.CFrame` of the assigned
attachment.

[`RelativeTo`](https://create.roblox.com/docs/reference/engine/classes/AngularVelocity#RelativeTo) can also be set to
[`Attachment0`](https://create.roblox.com/docs/reference/engine/enums/ActuatorRelativeTo), but it makes no physical sense and
will lead to unpredictable behaviors.