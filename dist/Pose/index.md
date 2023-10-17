A Pose holds the `Datatype.CFrame` applied to the [`Motor6D`](https://create.roblox.com/docs/reference/engine/classes/Motor6D) connected to
its associated [`BasePart`](https://create.roblox.com/docs/reference/engine/classes/BasePart). The part which is controlled depends on the
name of the Pose.

Poses are the fundamental building blocks of animations and, with `Keyframes`,
make up `KeyframeSequences`.
## Poses, joints and hierarchy

Although a Pose is assigned to a [`BasePart`](https://create.roblox.com/docs/reference/engine/classes/BasePart) by name, the object
manipulated during animation playback is actually the [`Motor6D`](https://create.roblox.com/docs/reference/engine/classes/Motor6D)
connected to this part. Animation rigs branch out from the model's root part
through such joints.

In a R15 character rig, the root part is the HumanoidRootPart. The LowerTorso
is connected to the HumanoidRootPart by the a motor named 'Root'. Therefore,
the `Datatype.CFrame` of a Pose named 'LowerTorso' in a [`Keyframe`](https://create.roblox.com/docs/reference/engine/classes/Keyframe) would
be applied to the motor named 'Root', and not the LowerTorso itself.

Poses are arranged in a [`Keyframe`](https://create.roblox.com/docs/reference/engine/classes/Keyframe) based on joint hierarchy. This means,
the Pose's `Datatype.CFrame` is applied to the motor connecting the part
associated with the pose to the part associated with the pose's parent. See
below for a visual example of the structure of Poses on a R15 character.
## Pose CFrame

The Roblox animation system applies [`Pose.CFrame`](https://create.roblox.com/docs/reference/engine/classes/Pose#CFrame) to the corresponding
[`Motor6D`](https://create.roblox.com/docs/reference/engine/classes/Motor6D) by manipulating the relative transformation of the motor, the
[`Motor6D.Transform`](https://create.roblox.com/docs/reference/engine/classes/Motor6D#Transform) property. The original [`C0`](https://create.roblox.com/docs/reference/engine/classes/JointInstance#C1)
and [`C1`](https://create.roblox.com/docs/reference/engine/classes/JointInstance#C1) values are not changed.