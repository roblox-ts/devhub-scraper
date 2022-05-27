This `CFrame` applies to the [Motor6D](https://create.roblox.com/docs/reference/engine/classes/Motor6D) corresponding with the [Pose](https://create.roblox.com/docs/reference/engine/classes/Pose) when
the `Motor6D\Transform` is changed. The original [Motor6D.C0](https://create.roblox.com/docs/reference/engine/classes/Motor6D#C0) and
[Motor6D.C1](https://create.roblox.com/docs/reference/engine/classes/Motor6D#C1) values are not changed.

[Pose](https://create.roblox.com/docs/reference/engine/classes/Pose) objects are arranged in a [Keyframe](https://create.roblox.com/docs/reference/engine/classes/Keyframe) based on joint hierarchy. This
means, that the [Pose.CFrame](https://create.roblox.com/docs/reference/engine/classes/Pose#CFrame) is applied to the motor connecting the part
associated with the pose to the part associated with the pose's parent.