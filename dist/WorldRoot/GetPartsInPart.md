[`WorldRoot:GetPartsInPart()`](https://create.roblox.com/docs/reference/engine/classes/WorldRoot#GetPartsInPart) returns an array of parts whose
occupied space is shared with the given part (which must exist in the same
[`WorldRoot`](https://create.roblox.com/docs/reference/engine/classes/WorldRoot) as the parts to be queried). This method can be used in
place of [`BasePart:GetTouchingParts()`](https://create.roblox.com/docs/reference/engine/classes/BasePart#GetTouchingParts) and is generally a better
choice.

As noted, this spatial query method considers the **exact volume**
occupied by the given part using a full geometric collision check. As an
example, a concave/hollow part won't match queried parts within it unless
they actually overlap/touch such a part. For simpler volumes, consider
using [`WorldRoot:GetPartBoundsInBox()`](https://create.roblox.com/docs/reference/engine/classes/WorldRoot#GetPartBoundsInBox) or
[`WorldRoot:GetPartBoundsInRadius()`](https://create.roblox.com/docs/reference/engine/classes/WorldRoot#GetPartBoundsInRadius), as they are less accurate but
perform more efficiently.

This method uses a [`OverlapParams`](https://create.roblox.com/docs/reference/engine/datatypes/OverlapParams) object to describe reusable
portions of the spatial query, such as an inclusion or exclusion list, the
maximum number of parts to query, what
[collision group](https://create.roblox.com/docs/workspace/collisions#collision-filtering) to
use, and whether the query favors an intersected part's
[`BasePart.CanCollide`](https://create.roblox.com/docs/reference/engine/classes/BasePart#CanCollide) value over its [`BasePart.CanQuery`](https://create.roblox.com/docs/reference/engine/classes/BasePart#CanQuery)
value.