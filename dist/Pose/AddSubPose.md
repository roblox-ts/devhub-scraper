Adds a sub [`Pose`](https://create.roblox.com/docs/reference/engine/classes/Pose) to the [`Pose`](https://create.roblox.com/docs/reference/engine/classes/Pose) by parenting it to it. It is
functionally identical to setting the new pose's [`Instance.Parent`](https://create.roblox.com/docs/reference/engine/classes/Instance#Parent)
to the pose.

Note, this function will not error when an instance other than a
[`Pose`](https://create.roblox.com/docs/reference/engine/classes/Pose) is given as the pose parameter and will parent it
successfully.