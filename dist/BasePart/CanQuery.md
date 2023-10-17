CanQuery determines whether the part is considered during spatial query
operations, such as
[`GetPartBoundsInBox`](https://create.roblox.com/docs/reference/engine/classes/WorldRoot#GetPartBoundsInBox) or
[`Raycast`](https://create.roblox.com/docs/reference/engine/classes/WorldRoot#Raycast). `CanCollide` must also be disabled
when disabling CanQuery. These functions will never include parts whose
CanQuery and `CanCollide` is false.

Beyond this property, it is also possible to exclude parts which are
descendants of a given list of parts using an `Datatype.OverlapParams` or
`Datatype.RaycastParams` object when calling the spatial query functions.