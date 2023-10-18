Creates a new [`IntersectOperation`](https://create.roblox.com/docs/reference/engine/classes/IntersectOperation) from the intersecting geometry of
the part and the other parts in the given array. Only [`Parts`](https://create.roblox.com/docs/reference/engine/classes/Part)
are supported, not [`Terrain`](https://create.roblox.com/docs/reference/engine/classes/Terrain) or [`MeshParts`](https://create.roblox.com/docs/reference/engine/classes/MeshPart). Similar
to [`Clone()`](https://create.roblox.com/docs/reference/engine/classes/Instance#Clone), the returned object has no set
[`Parent`](https://create.roblox.com/docs/reference/engine/classes/Instance#Parent).

The following properties from the calling part are applied to the
resulting [`IntersectOperation`](https://create.roblox.com/docs/reference/engine/classes/IntersectOperation):

- [`Color`](https://create.roblox.com/docs/reference/engine/classes/BasePart#Color), [`Material`](https://create.roblox.com/docs/reference/engine/classes/BasePart#Material),
[`MaterialVariant`](https://create.roblox.com/docs/reference/engine/classes/BasePart#MaterialVariant),
[`Reflectance`](https://create.roblox.com/docs/reference/engine/classes/BasePart#Reflectance),
[`Transparency`](https://create.roblox.com/docs/reference/engine/classes/BasePart#Transparency)
- [`CanCollide`](https://create.roblox.com/docs/reference/engine/classes/BasePart#CanCollide)
- [`Anchored`](https://create.roblox.com/docs/reference/engine/classes/BasePart#Anchored), [`Density`](https://create.roblox.com/docs/reference/engine/classes/BasePart#Density),
[`Elasticity`](https://create.roblox.com/docs/reference/engine/classes/BasePart#Elasticity),
[`ElasticityWeight`](https://create.roblox.com/docs/reference/engine/classes/BasePart#ElasticityWeight),
[`Friction`](https://create.roblox.com/docs/reference/engine/classes/BasePart#Friction),
[`FrictionWeight`](https://create.roblox.com/docs/reference/engine/classes/BasePart#FrictionWeight)

In the following image comparison,
[`IntersectAsync()`](https://create.roblox.com/docs/reference/engine/classes/BasePart#IntersectAsync) is called on the purple
block using a table containing the blue block. The resulting
[`IntersectOperation`](https://create.roblox.com/docs/reference/engine/classes/IntersectOperation) resolves into a shape of the intersecting
geometry of both parts.

![Two block parts overlapping](https://prod.docsiteassets.roblox.com/assets/modeling/solid-modeling/Separate-Parts-To-Intersect.jpg)
Separate parts

![Parts intersected into a new solid model](https://prod.docsiteassets.roblox.com/assets/modeling/solid-modeling/Intersect-Result.jpg)
Resulting [`IntersectOperation`](https://create.roblox.com/docs/reference/engine/classes/IntersectOperation)

#### Notes

- The original parts remain intact following a successful intersect
operation. In most cases, you should [`Destroy()`](https://create.roblox.com/docs/reference/engine/classes/Instance#Destroy)
all of the original parts and parent the returned
[`IntersectOperation`](https://create.roblox.com/docs/reference/engine/classes/IntersectOperation) to the same place as the calling
[`BasePart`](https://create.roblox.com/docs/reference/engine/classes/BasePart).
- By default, the face colors of the resulting intersection are borrowed
from the [`Color`](https://create.roblox.com/docs/reference/engine/classes/BasePart#Color) property of the original parts. To
change the entire intersection to a specific color, set its
[`UsePartColor`](https://create.roblox.com/docs/reference/engine/classes/PartOperation#UsePartColor) property to `true`.
- If an intersect operation would result in a part with more than 20,000
triangles, it will be simplified to 20,000 triangles.