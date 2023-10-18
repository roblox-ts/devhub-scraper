Creates a new [`UnionOperation`](https://create.roblox.com/docs/reference/engine/classes/UnionOperation) from the part, plus the geometry
occupied by the parts in the given array. Only [`Parts`](https://create.roblox.com/docs/reference/engine/classes/Part) are
supported, not [`Terrain`](https://create.roblox.com/docs/reference/engine/classes/Terrain) or [`MeshParts`](https://create.roblox.com/docs/reference/engine/classes/MeshPart). Similar to
[`Clone()`](https://create.roblox.com/docs/reference/engine/classes/Instance#Clone), the returned object has no set
[`Parent`](https://create.roblox.com/docs/reference/engine/classes/Instance#Parent).

The following properties from the calling part are applied to the
resulting [`UnionOperation`](https://create.roblox.com/docs/reference/engine/classes/UnionOperation):

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
[`UnionAsync()`](https://create.roblox.com/docs/reference/engine/classes/BasePart#UnionAsync) is called on the blue block
using a table containing the purple cylinder. The resulting
[`UnionOperation`](https://create.roblox.com/docs/reference/engine/classes/UnionOperation) resolves into a shape of the combined geometry of
both parts.

![Block and cylinder parts overlapping](https://prod.docsiteassets.roblox.com/assets/modeling/solid-modeling/Separate-Parts-To-Union.jpg)
Separate parts

![Parts joined together into a single solid union](https://prod.docsiteassets.roblox.com/assets/modeling/solid-modeling/Union-Result.jpg)
Resulting [`UnionOperation`](https://create.roblox.com/docs/reference/engine/classes/UnionOperation)

#### Notes

- The original parts remain intact following a successful union operation.
In most cases, you should [`Destroy()`](https://create.roblox.com/docs/reference/engine/classes/Instance#Destroy) all of the
original parts and parent the returned [`UnionOperation`](https://create.roblox.com/docs/reference/engine/classes/UnionOperation) to the
same place as the calling [`BasePart`](https://create.roblox.com/docs/reference/engine/classes/BasePart).
- By default, the resulting union respects the
[`Color`](https://create.roblox.com/docs/reference/engine/classes/BasePart#Color) property of each of its parts. To change
the entire union to a specific color, set its
[`UsePartColor`](https://create.roblox.com/docs/reference/engine/classes/PartOperation#UsePartColor) property to `true`.
- If an union operation would result in a part with more than 20,000
triangles, it will be simplified to 20,000 triangles.