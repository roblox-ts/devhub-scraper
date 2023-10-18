**FindPartOnRay** uses [raycasting](https://create.roblox.com/docs/workspace/raycasting) to
find the first [`BasePart`](https://create.roblox.com/docs/reference/engine/classes/BasePart) or [`Terrain`](https://create.roblox.com/docs/reference/engine/classes/Terrain) cell intersecting with
a given [`Ray`](https://create.roblox.com/docs/reference/engine/datatypes/Ray). This function returns the [`BasePart`](https://create.roblox.com/docs/reference/engine/classes/BasePart) or
terrain cell hit, the point of intersection, the surface normal at the
point of intersection, and the associated [`Enum.Material`](https://create.roblox.com/docs/reference/engine/enums/Material) hit.

If the `ignoreDescendantsInstance` parameter is provided, the raycasting
calculation will ignore the given object and all of its descendants. It
behaves similar to the [`Mouse.TargetFilter`](https://create.roblox.com/docs/reference/engine/classes/Mouse#TargetFilter) property.

The `terrainCellsAreCubes` and `ignoreWater` parameters determine whether
[`Terrain`](https://create.roblox.com/docs/reference/engine/classes/Terrain) cells should be treated as cubes or not, and whether water
should be ignored or not.

In order to include or exclude multiple objects and their descendants, use
the [`WorldRoot:FindPartOnRayWithWhitelist()`](https://create.roblox.com/docs/reference/engine/classes/WorldRoot#FindPartOnRayWithWhitelist) and
[`WorldRoot:FindPartOnRayWithIgnoreList()`](https://create.roblox.com/docs/reference/engine/classes/WorldRoot#FindPartOnRayWithIgnoreList) variants.
#### Notes

- Theoretically, a ray extends infinitely in one direction. However, the
max length of the direction vector on Roblox is 15000 studs.
- The length (magnitude) of the directional vector is important, as parts
further away than its length will not be tested.
- If the ray does not intersect anything, the return values will be `nil`
and the point at the end of the ray, respectively.
- Parts that are in a
[collision group](https://create.roblox.com/docs/workspace/collisions#collision-filtering)
that does not collide with the "Default" collision group are ignored
implicitly.