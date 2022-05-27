The Orientation property describes the part's rotation in degrees around
the X, Y and Z axes using a Vector3. The rotations are applied in Y → X →
Z order. This differs from proper [Euler angles][1], and is instead
[Tait–Bryan angles][2] which describe **yaw, pitch and roll**. It is also
worth noting how this property differs from the `CFrame.Angles()`
constructor, which applies rotations in a different order (Z → Y → X). For
better control over the rotation of a part, it is recommended that
[BasePart.CFrame](https://create.roblox.com/docs/reference/engine/classes/BasePart#CFrame) is set instead.

[1]: https://en.wikipedia.org/wiki/Euler_angles
[2]: https://en.wikipedia.org/wiki/Euler_angles#Tait-Bryan_angles

When setting this property any [Welds](https://create.roblox.com/docs/reference/engine/classes/Weld), [ManualWelds](https://create.roblox.com/docs/reference/engine/classes/ManualWeld),
[Snap](https://create.roblox.com/docs/reference/engine/classes/Snap), [Motor](https://create.roblox.com/docs/reference/engine/classes/Motor), and [Motor6Ds](https://create.roblox.com/docs/reference/engine/classes/Motor6D) connected to this part will have
the matching [C0](https://create.roblox.com/docs/reference/engine/classes/JointInstance#C0)/[C1](https://create.roblox.com/docs/reference/engine/classes/JointInstance#C1) property updated
and to allow the part to move relative to any other parts it is joined to.

WeldConstraints will also be temporarily disabled and re-enabled during
the move.