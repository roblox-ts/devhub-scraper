Creates a new [`UnionOperation`](https://create.roblox.com/docs/reference/engine/classes/UnionOperation) from the part, minus the geometry
occupied by the parts in the given array. Only [`Parts`](https://create.roblox.com/docs/reference/engine/classes/Part) are
supported, not [`Terrain`](https://create.roblox.com/docs/reference/engine/classes/Terrain) or [`MeshParts`](https://create.roblox.com/docs/reference/engine/classes/MeshPart). Similar to
[`Clone()`](https://create.roblox.com/docs/reference/engine/classes/Instance#Clone), the returned object has no set
[`Parent`](https://create.roblox.com/docs/reference/engine/classes/Instance#Parent).

Note that the resulting union cannot be empty due to subtractions. If the
operation would result in completely empty geometry, it will fail.

In the following image comparison,
[`SubtractAsync()`](https://create.roblox.com/docs/reference/engine/classes/BasePart#SubtractAsync) is called on the blue
cylinder using a table containing the purple block. The resulting
[`UnionOperation`](https://create.roblox.com/docs/reference/engine/classes/UnionOperation) resolves into a shape that omits the block's
geometry from that of the cylinder.

![Longer block overlapping a cylinder](https://prod.docsiteassets.roblox.com/assets/modeling/solid-modeling/Separate-Parts-To-Subtract.jpg)
Separate parts

![Block part subtracted from cylinder](https://prod.docsiteassets.roblox.com/assets/modeling/solid-modeling/Negate-Result.jpg)
Resulting [`UnionOperation`](https://create.roblox.com/docs/reference/engine/classes/UnionOperation)