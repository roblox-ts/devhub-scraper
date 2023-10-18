Shifts a [`Model`](https://create.roblox.com/docs/reference/engine/classes/Model) by the given [`Vector3`](https://create.roblox.com/docs/reference/engine/datatypes/Vector3) offset, preserving
the [`Model`](https://create.roblox.com/docs/reference/engine/classes/Model)'s orientation. If another [`BasePart`](https://create.roblox.com/docs/reference/engine/classes/BasePart) or
[`Terrain`](https://create.roblox.com/docs/reference/engine/classes/Terrain) already exists at the new position then the [`Model`](https://create.roblox.com/docs/reference/engine/classes/Model)
will overlap said object.

The translation is applied in world space rather than object space,
meaning even if the model's parts are orientated differently it will still
move along the standard axis.