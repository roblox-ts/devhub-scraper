The mesh that the [SpecialMesh](https://developer.roblox.com/en-us/api-reference/class/SpecialMesh)object applies to the [BasePart](https://developer.roblox.com/en-us/api-reference/class/BasePart) depends on the MeshType property. A number of options are available.

*   **Brick** - A block shape, equivalent to a [BlockMesh](https://developer.roblox.com/en-us/api-reference/class/BlockMesh)
*   **Cylinder** - A cylinder, identical to a [Part](https://developer.roblox.com/en-us/api-reference/class/Part) with a [Part.Shape](https://developer.roblox.com/en-us/api-reference/property/Part/Shape) of 'Cylinder'
*   **FileMesh** - A user uploaded Mesh, equivalent to [FileMesh](https://developer.roblox.com/en-us/api-reference/class/FileMesh) that a texture can be applied to using the [FileMesh.TextureId](https://developer.roblox.com/en-us/api-reference/property/FileMesh/TextureId) property
*   **Head** - A character head shape
*   **Sphere** - A sphere shape, similar to a [Part](https://developer.roblox.com/en-us/api-reference/class/Part) with a [Part.Shape](https://developer.roblox.com/en-us/api-reference/property/Part/Shape) of 'Ball' but can be freely resized on all axis
*   **Wedge** - A wedge shape, identical to a [WedgePart](https://developer.roblox.com/en-us/api-reference/class/WedgePart)
*   **Torso** - A block with sloped sides, due to be deprecated

Note, each MeshType will scale differently when using [DataModelMesh.Scale](https://developer.roblox.com/en-us/api-reference/property/DataModelMesh/Scale), for more information on this please see the page on [DataModelMesh.Scale](https://developer.roblox.com/en-us/api-reference/property/DataModelMesh/Scale).