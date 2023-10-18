Casts a block shape in a given direction and returns the first collision
with a [`BasePart`](https://create.roblox.com/docs/reference/engine/classes/BasePart) or [`Terrain`](https://create.roblox.com/docs/reference/engine/classes/Terrain) cell. This is analogous to how
[`WorldRoot:Raycast()`](https://create.roblox.com/docs/reference/engine/classes/WorldRoot#Raycast) casts a linear ray in a direction to find a
collision, but it uses a 3D shape instead of a ray.

Unlike [`WorldRoot:GetPartsInPart()`](https://create.roblox.com/docs/reference/engine/classes/WorldRoot#GetPartsInPart), this method does not detect
[`BaseParts`](https://create.roblox.com/docs/reference/engine/classes/BasePart) that **initially** intersect the shape.

If a hit is detected, a [`RaycastResult`](https://create.roblox.com/docs/reference/engine/datatypes/RaycastResult) is returned containing
the hit information. The [`Distance`](https://create.roblox.com/docs/reference/engine/datatypes/RaycastResult)
property represents the distance the shape has to travel to find a hit,
and the [`Position`](https://create.roblox.com/docs/reference/engine/datatypes/RaycastResult) property represents the
intersection point that causes the hit.

This method throws an error if it is passed invalid [`CFrame`](https://create.roblox.com/docs/reference/engine/datatypes/CFrame),
size, or direction inputs.