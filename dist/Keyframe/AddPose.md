This function adds a [`Pose`](https://create.roblox.com/docs/reference/engine/classes/Pose) to the [`Keyframe`](https://create.roblox.com/docs/reference/engine/classes/Keyframe) by parenting it
to the keyframe. It is functionally identical to setting the pose's
[`Instance.Parent`](https://create.roblox.com/docs/reference/engine/classes/Instance#Parent) to the keyframe.

Note, this function will not error when an instance other than a
[`Pose`](https://create.roblox.com/docs/reference/engine/classes/Pose) is given as the pose parameter and will parent it
successfully.