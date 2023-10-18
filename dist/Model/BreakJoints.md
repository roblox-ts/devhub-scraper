Breaks connections between `BaseParts`, including surface connections with
any adjacent parts, [`WeldConstraint`](https://create.roblox.com/docs/reference/engine/classes/WeldConstraint)s, and all [`Weld`](https://create.roblox.com/docs/reference/engine/classes/Weld)s and
other [`JointInstance`](https://create.roblox.com/docs/reference/engine/classes/JointInstance)s.

When BreakJoints is used on a Player character [`Model`](https://create.roblox.com/docs/reference/engine/classes/Model), the
character's [`Humanoid`](https://create.roblox.com/docs/reference/engine/classes/Humanoid) will die as it relies on the Neck joint.

Note that although joints produced by surface connections with adjacent
Parts can technically be recreated using [`Model:MakeJoints()`](https://create.roblox.com/docs/reference/engine/classes/Model#MakeJoints), this
will only recreate joints produced by surfaces. Developers should not rely
on this as following the joints being broken parts may no longer be in
contact with each other.