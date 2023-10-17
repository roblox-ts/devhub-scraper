An object that holds two parts together. It is commonly created when the *Join
Always* setting in Studio is turned on.

Functions identically to [`Weld`](https://create.roblox.com/docs/reference/engine/classes/Weld).

See also [`WeldConstraint`](https://create.roblox.com/docs/reference/engine/classes/WeldConstraint) for a newer alternative using the
[constraints](https://create.roblox.com/docs/physics/mechanical-constraints) system that does not
require [`C0`](https://create.roblox.com/docs/reference/engine/classes/JointInstance#C0) or [`C1`](https://create.roblox.com/docs/reference/engine/classes/JointInstance#C1) properties
to be manually set.
## Root part

Every Assembly has a root part, see [`BasePart:GetRootPart()`](https://create.roblox.com/docs/reference/engine/classes/BasePart#GetRootPart). When a
ManualWeld's [`C0`](https://create.roblox.com/docs/reference/engine/classes/JointInstance#C0)/[`C1`](https://create.roblox.com/docs/reference/engine/classes/JointInstance#C1) is
modified the root part will stay where it was.
## Directionality

ManualWelds do not have any directionality. [`Part0`](https://create.roblox.com/docs/reference/engine/classes/JointInstance#Part0)
or [`Part1`](https://create.roblox.com/docs/reference/engine/classes/JointInstance#Part1), doesn't matter. You can imagine rigid
joints forming a tree branching down from the root part. All the parts down
the tree from root will move, and their welded "children" in this tree will
move with them.