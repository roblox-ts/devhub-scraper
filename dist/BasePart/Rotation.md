The rotation of the part in degrees for the three axes.

When setting this property any [`Welds`](https://create.roblox.com/docs/reference/engine/classes/Weld) or
[`Motor6Ds`](https://create.roblox.com/docs/reference/engine/classes/Motor6D) connected to this part will have the matching
[`C0`](https://create.roblox.com/docs/reference/engine/classes/JointInstance#C0) or [`C1`](https://create.roblox.com/docs/reference/engine/classes/JointInstance#C1) property
updated and to allow the part to move relative to any other parts it is
joined to.

WeldConstraints will also be temporarily disabled and re-enabled during
the move.