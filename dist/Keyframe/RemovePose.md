This function removes a [`Pose`](https://create.roblox.com/docs/reference/engine/classes/Pose) from the [`Keyframe`](https://create.roblox.com/docs/reference/engine/classes/Keyframe) by setting
its [`Instance.Parent`](https://create.roblox.com/docs/reference/engine/classes/Instance#Parent) to nil.

The [`Pose`](https://create.roblox.com/docs/reference/engine/classes/Pose)'s [`Instance.Parent`](https://create.roblox.com/docs/reference/engine/classes/Instance#Parent) is set to nil, but it is not
destroyed. This means, provided the pose is referenced it can be
re-parented later.

Note, this function will not error when an instance other than a
[`Pose`](https://create.roblox.com/docs/reference/engine/classes/Pose) is given as the pose parameter.