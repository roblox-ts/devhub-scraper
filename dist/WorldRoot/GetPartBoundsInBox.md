[`WorldRoot:GetPartBoundsInBox()`](https://create.roblox.com/docs/reference/engine/classes/WorldRoot#GetPartBoundsInBox) returns an array of parts whose
**bounding boxes** overlap a box whose volume is described using the given
center ([`CFrame`](https://create.roblox.com/docs/reference/engine/datatypes/CFrame)) and size ([`Vector3`](https://create.roblox.com/docs/reference/engine/datatypes/Vector3)).

As emphasized, this spatial query method efficiently considers the volume
of parts' bounding boxes rather than their actual occupied volume. This
may be important when considering cylinders, spheres, unions, and
[`MeshParts`](https://create.roblox.com/docs/reference/engine/classes/MeshPart) which have non-block shapes. For cases where
accuracy especially matters, use [`WorldRoot:GetPartsInPart()`](https://create.roblox.com/docs/reference/engine/classes/WorldRoot#GetPartsInPart)
instead, or further filter the results of this method yourself.

This method uses a [`OverlapParams`](https://create.roblox.com/docs/reference/engine/datatypes/OverlapParams) object to describe reusable
portions of the spatial query, such as an inclusion or exclusion list, the
maximum number of parts to query, what
[collision group](https://create.roblox.com/docs/workspace/collisions#collision-filtering) to
use, and whether the query favors an intersected part's
[`BasePart.CanCollide`](https://create.roblox.com/docs/reference/engine/classes/BasePart#CanCollide) value over its [`BasePart.CanQuery`](https://create.roblox.com/docs/reference/engine/classes/BasePart#CanQuery)
value.