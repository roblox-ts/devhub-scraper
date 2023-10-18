ReplaceMaterial replaces terrain of a certain [`Enum.Material`](https://create.roblox.com/docs/reference/engine/enums/Material) within a
[`Region3`](https://create.roblox.com/docs/reference/engine/datatypes/Region3) with another material. Essentially, it is a
find-and-replace operation on [`Terrain`](https://create.roblox.com/docs/reference/engine/classes/Terrain) materials.
#### Constraints

When calling this method, the `resolution` parameter must be exactly 4.
Additionally, the Region3 must be aligned to the terrain materials grid,
i.e. the components of the Region3's minimum and maximum points must be
divisible by 4. Use [`Region3:ExpandToGrid()`](https://create.roblox.com/docs/reference/engine/datatypes/Region3:ExpandToGrid()) to make a region
compatible with this function.