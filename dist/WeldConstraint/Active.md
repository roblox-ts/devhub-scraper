True if the WeldConstraint is currently active in the world.

If the WeldConstraint or one of its parts is not in [Workspace](https://create.roblox.com/docs/reference/engine/classes/Workspace) the weld
will be inactive.

Rigid joints like [Weld](https://create.roblox.com/docs/reference/engine/classes/Weld), [Snap](https://create.roblox.com/docs/reference/engine/classes/Snap), [WeldConstraint](https://create.roblox.com/docs/reference/engine/classes/WeldConstraint), [Motor](https://create.roblox.com/docs/reference/engine/classes/Motor), or [Motor6D](https://create.roblox.com/docs/reference/engine/classes/Motor6D)
may also be disabled due to conflicts with other rigid joints, such as
joints between the same two parts or indirect cycles in the weld graph.
Joints disabled this way may be re-enabled later when another joint or
part is added or removed.

Duplicate WeldConstraints do not conflict because WeldConstraints derive
their internal CFrames from the relative positions of their parts when
they are enabled and all update when [BasePart.Position](https://create.roblox.com/docs/reference/engine/classes/BasePart#Position) or
[BasePart.Orientation](https://create.roblox.com/docs/reference/engine/classes/BasePart#Orientation) is set on a part. The spanning tree may still
disable them if they are redundant or form a cycle.