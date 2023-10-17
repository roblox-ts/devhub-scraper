The mesh that the [`SpecialMesh`](https://create.roblox.com/docs/reference/engine/classes/SpecialMesh)object applies to the
[`BasePart`](https://create.roblox.com/docs/reference/engine/classes/BasePart) depends on the MeshType property. A number of options are
available.

- **Brick** - A block shape, equivalent to a [`BlockMesh`](https://create.roblox.com/docs/reference/engine/classes/BlockMesh)
- **Cylinder** - A cylinder, identical to a [`Part`](https://create.roblox.com/docs/reference/engine/classes/Part) with a
[`Part.Shape`](https://create.roblox.com/docs/reference/engine/classes/Part#Shape) of 'Cylinder'
- **FileMesh** - A user uploaded Mesh, equivalent to [`FileMesh`](https://create.roblox.com/docs/reference/engine/classes/FileMesh) that
a texture can be applied to using the [`FileMesh.TextureId`](https://create.roblox.com/docs/reference/engine/classes/FileMesh#TextureId)
property
- **Head** - A character head shape
- **Sphere** - A sphere shape, similar to a [`Part`](https://create.roblox.com/docs/reference/engine/classes/Part) with a
[`Part.Shape`](https://create.roblox.com/docs/reference/engine/classes/Part#Shape) of 'Ball' but can be freely resized on all axis
- **Wedge** - A wedge shape, identical to a [`WedgePart`](https://create.roblox.com/docs/reference/engine/classes/WedgePart)
- **Torso** - A block with sloped sides, due to be deprecated

Note, each MeshType will scale differently when using
[`DataModelMesh.Scale`](https://create.roblox.com/docs/reference/engine/classes/DataModelMesh#Scale), for more information on this please see the
page on [`DataModelMesh.Scale`](https://create.roblox.com/docs/reference/engine/classes/DataModelMesh#Scale).