JointInstance is the base class for joints, such as Connectors, Welds, and
Snaps.

[`Weld`](https://create.roblox.com/docs/reference/engine/classes/Weld), [`Snap`](https://create.roblox.com/docs/reference/engine/classes/Snap), [`WeldConstraint`](https://create.roblox.com/docs/reference/engine/classes/WeldConstraint), [`Motor`](https://create.roblox.com/docs/reference/engine/classes/Motor), and
[`Motor6D`](https://create.roblox.com/docs/reference/engine/classes/Motor6D) joints all combine multiple parts into the same Assembly. An
assembly is a rigid body if none of its parts are anchored. No physical forces
can ever separate the parts of an Assembly or move them relative to each other
unless the joints are removed or updated. They're a single body.

Every Assembly has a root part, see [`BasePart:GetRootPart()`](https://create.roblox.com/docs/reference/engine/classes/BasePart#GetRootPart). When a
JointInstance's [`C0`](https://create.roblox.com/docs/reference/engine/classes/JointInstance#C0)/[`C1`](https://create.roblox.com/docs/reference/engine/classes/JointInstance#C1) is
modified the root part will stay where it was.

Welds do not have any directionality. [`Part0`](https://create.roblox.com/docs/reference/engine/classes/JointInstance#Part0) or
[`Part1`](https://create.roblox.com/docs/reference/engine/classes/JointInstance#Part1), doesn't matter. You can imagine rigid
joints forming a tree branching down from the root part. All the parts down
the tree from root will move, and their welded "children" in this tree will
move with them.

A typical Roblox avatar is a single assembly. Here's a visualization of this
tree in a basic R15 humanoid rig on the left, and a representation of this
implicit tree of which parts move relative to which parts on the right.

![Assembly Representation](https://prod.docsiteassets.roblox.com/assets/legacy/AssemblyTree.png)