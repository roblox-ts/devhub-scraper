**CanQuery** determines whether the part is considered during spatial
query operations, namely
[GetPartBoundsInBox](https://create.roblox.com/docs/reference/engine/classes/WorldRoot#GetPartBoundsInBox),
[GetPartBoundsInRadius](https://create.roblox.com/docs/reference/engine/classes/WorldRoot#GetPartBoundsInRadius) and
[GetPartsInPart](https://create.roblox.com/docs/reference/engine/classes/WorldRoot#GetPartsInPart). These functions will never
include parts whose CanQuery is false.

Beyond this property, it is also possible to blacklist parts which are
descendants of a given list of parts using an [OverlapParams](https://developer.roblox.com/en-us/api-reference/datatype/OverlapParams)
object when calling the spatial query functions.