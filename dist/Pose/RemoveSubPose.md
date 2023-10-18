Removes a sub [`Pose`](https://create.roblox.com/docs/reference/engine/classes/Pose) from the [`Pose`](https://create.roblox.com/docs/reference/engine/classes/Pose) by parenting it to nil.
This is functionally identical to setting the new pose's
[`Instance.Parent`](https://create.roblox.com/docs/reference/engine/classes/Instance#Parent) to nil.

Note: If an [`Instance`](https://create.roblox.com/docs/reference/engine/classes/Instance) other than [`Pose`](https://create.roblox.com/docs/reference/engine/classes/Pose) is used as a
[`Pose`](https://create.roblox.com/docs/reference/engine/classes/Pose) parameter, this function removes that [`Instance`](https://create.roblox.com/docs/reference/engine/classes/Instance) and
does not provide an error.