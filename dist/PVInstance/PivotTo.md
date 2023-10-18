Transforms the [`PVInstance`](https://create.roblox.com/docs/reference/engine/classes/PVInstance) along with all of its descendant
[`PVInstances`](https://create.roblox.com/docs/reference/engine/classes/PVInstance) such that the pivot is now located at the
specified [`CFrame`](https://create.roblox.com/docs/reference/engine/datatypes/CFrame). This is the primary function that should be
used to move [`Models`](https://create.roblox.com/docs/reference/engine/classes/Model) via scripting.

[`BaseParts`](https://create.roblox.com/docs/reference/engine/classes/BasePart) are moved in this way by having their
[`CFrame`](https://create.roblox.com/docs/reference/engine/datatypes/CFrame) transformed by the necessary offset.
[`Models`](https://create.roblox.com/docs/reference/engine/classes/Model) are moved in this way by having their
[`Model.WorldPivot`](https://create.roblox.com/docs/reference/engine/classes/Model#WorldPivot) transformed by the necessary offset.

Note that for efficiency purposes, [`Instance.Changed`](https://create.roblox.com/docs/reference/engine/classes/Instance#Changed) events are not
fired for [`Position`](https://create.roblox.com/docs/reference/engine/classes/BasePart#Position) and
[`Orientation`](https://create.roblox.com/docs/reference/engine/classes/BasePart#Orientation) of [`BaseParts`](https://create.roblox.com/docs/reference/engine/classes/BasePart)
moved in this way; they are only fired for [`CFrame`](https://create.roblox.com/docs/reference/engine/datatypes/CFrame).

When calling [`PivotTo`](https://create.roblox.com/docs/reference/engine/classes/PVInstance#PivotTo) on [`Models`](https://create.roblox.com/docs/reference/engine/classes/Model),
the offsets of the descendant parts and models are cached, such that
subsequent calls to [`PivotTo`](https://create.roblox.com/docs/reference/engine/classes/PVInstance#PivotTo) on the same model
do not accumulate floating point drift between the parts making up the
model.

[`Models`](https://create.roblox.com/docs/reference/engine/classes/Model) and [`BaseParts`](https://create.roblox.com/docs/reference/engine/classes/BasePart) are both
[`PVInstances`](https://create.roblox.com/docs/reference/engine/classes/PVInstance) ("Position Velocity Instances") and so both
have this function.