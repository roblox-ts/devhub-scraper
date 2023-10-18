The **CFrame** property determines both the position and orientation of
the [`BasePart`](https://create.roblox.com/docs/reference/engine/classes/BasePart) in the world. It acts as an arbitrary reference
location on the geometry, but [`ExtentsCFrame`](https://create.roblox.com/docs/reference/engine/classes/BasePart#ExtentsCFrame)
represents the actual [`CFrame`](https://create.roblox.com/docs/reference/engine/datatypes/CFrame) of its physical center.

When setting **CFrame** on a part, other joined parts are also moved
relative to the part, but it is recommended that you use
[`PVInstance:PivotTo()`](https://create.roblox.com/docs/reference/engine/classes/PVInstance#PivotTo) to move an entire model, such as when
teleporting a player's character.

Unlike setting [`BasePart.Position`](https://create.roblox.com/docs/reference/engine/classes/BasePart#Position), setting [`BasePart.CFrame`](https://create.roblox.com/docs/reference/engine/classes/BasePart#CFrame)
will always move the part to the exact given [`CFrame`](https://create.roblox.com/docs/reference/engine/datatypes/CFrame); in other
words: **no overlap checking is done** and the physics solver will attempt
to resolve any overlap unless both parts are
[`Anchored`](https://create.roblox.com/docs/reference/engine/classes/BasePart#Anchored).

For keeping track of positions relative to a part's [`CFrame`](https://create.roblox.com/docs/reference/engine/datatypes/CFrame), an
[`Attachment`](https://create.roblox.com/docs/reference/engine/classes/Attachment) may be useful.