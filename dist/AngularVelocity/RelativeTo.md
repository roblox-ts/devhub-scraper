The `Datatype.CFrame` in which the [`AngularVelocity`](https://create.roblox.com/docs/reference/engine/classes/AngularVelocity) force is
specified. If set to `Enum.ActuatorRelativeTo|World`, the angular velocity
vector is used as is. If set to `Enum.ActuatorRelativeTo|Attachment1`, the
angular velocity is transformed by the `Datatype.CFrame` of the assigned
attachment.

[`RelativeTo`](https://create.roblox.com/docs/reference/engine/classes/AngularVelocity#RelativeTo) can also be set to
`Enum.ActuatorRelativeTo|Attachment0`, but it makes no physical sense and
will lead to unpredictable behaviors.