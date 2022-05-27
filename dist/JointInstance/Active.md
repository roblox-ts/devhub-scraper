This property determines if the joint is currently active in the world. If
true, the joint is active.

If the [JointInstance](https://create.roblox.com/docs/reference/engine/classes/JointInstance) is not in [Workspace](https://create.roblox.com/docs/reference/engine/classes/Workspace) or [JointsService](https://create.roblox.com/docs/reference/engine/classes/JointsService), or one of
its parts is not in Workspace the joint will be inactive.

Rigid joints like [Weld](https://create.roblox.com/docs/reference/engine/classes/Weld), [Snap](https://create.roblox.com/docs/reference/engine/classes/Snap), [WeldConstraint](https://create.roblox.com/docs/reference/engine/classes/WeldConstraint), [Motor](https://create.roblox.com/docs/reference/engine/classes/Motor), or [Motor6D](https://create.roblox.com/docs/reference/engine/classes/Motor6D)
may also be disabled due to conflicts with other rigid joints, such as
joints between the same two parts or indirect cycles in the weld graph.
Joints disabled this way may be re-enabled later when another joint or
part is added or removed.