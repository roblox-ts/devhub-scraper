The **Touched** event fires when a part comes in contact with another
part. For instance, if **PartA** bumps into **PartB**, then
[`PartA.Touched`](https://create.roblox.com/docs/reference/engine/classes/BasePart#Touched) fires with **PartB**, and
[`PartB.Touched`](https://create.roblox.com/docs/reference/engine/classes/BasePart#Touched) fires with **PartA**.

This event only fires as a result of physical movement, so it will not
fire if the [`CFrame`](https://create.roblox.com/docs/reference/engine/classes/BasePart#CFrame) property was changed such that
the part overlaps another part. This also means that at least one of the
parts involved must **not** be [`Anchored`](https://create.roblox.com/docs/reference/engine/classes/BasePart#Anchored) at the
time of the collision.

This event works in conjunction with
[`Workspace.TouchesUseCollisionGroups`](https://create.roblox.com/docs/reference/engine/classes/Workspace#TouchesUseCollisionGroups) to specify whether
[collision groups](https://create.roblox.com/docs/workspace/collisions#collision-filtering)
are acknowledged for detection.