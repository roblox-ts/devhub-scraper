The SpecialMesh is an object that allows developers to provide a standard template or user uploaded mesh to a [BasePart](https://developer.roblox.com/en-us/api-reference/class/BasePart).

What does a SpecialMesh do?
---------------------------

The SpecialMesh object applies a mesh to a [BasePart](https://developer.roblox.com/en-us/api-reference/class/BasePart) depending on the the [SpecialMesh.MeshType](https://developer.roblox.com/en-us/api-reference/property/SpecialMesh/MeshType) property. A number of options are available.

*   **Brick** - A block shape, equivalent to a [BlockMesh](https://developer.roblox.com/en-us/api-reference/class/BlockMesh)
*   **Cylinder** - A cylinder, identical to a [Part](https://developer.roblox.com/en-us/api-reference/class/Part) with a [Part.Shape](https://developer.roblox.com/en-us/api-reference/property/Part/Shape) of 'Cylinder'
*   **FileMesh** - A user uploaded Mesh, equivalent to [FileMesh](https://developer.roblox.com/en-us/api-reference/class/FileMesh) that a texture can be applied to using the [FileMesh.TextureId](https://developer.roblox.com/en-us/api-reference/property/FileMesh/TextureId) property
*   **Head** - A character head shape
*   **Sphere** - A sphere shape, similar to a [Part](https://developer.roblox.com/en-us/api-reference/class/Part) with a [Part.Shape](https://developer.roblox.com/en-us/api-reference/property/Part/Shape) of 'Ball' but can be freely resized on all axis
*   **Wedge** - A wedge shape, identical to a [WedgePart](https://developer.roblox.com/en-us/api-reference/class/WedgePart)
*   **Torso** - A block with sloped sides, due to be deprecated

Note, each [SpecialMesh.MeshType](https://developer.roblox.com/en-us/api-reference/property/SpecialMesh/MeshType) will scale differently when using [DataModelMesh.Scale](https://developer.roblox.com/en-us/api-reference/property/DataModelMesh/Scale), for more information on this please see the page on [DataModelMesh.Scale](https://developer.roblox.com/en-us/api-reference/property/DataModelMesh/Scale). The SpecialMesh object also exposes the [DataModelMesh.Offset](https://developer.roblox.com/en-us/api-reference/property/DataModelMesh/Offset) property.

It is important to remember that when using a SpecialMesh, only the appearance of a part changes. The collision model of the part remains the same. For example, a character will not be able to walk correctly over a mesh as the mesh geometry is not taken into account.

SpecialMesh or MeshPart?
------------------------

There are currently two ways of using a developer created mesh. They are using a SpecialMesh with the `SpecialMesh/FileType` set to 'FileMesh', or by using a [MeshPart](https://developer.roblox.com/en-us/api-reference/class/MeshPart). Although, on the whole, the [MeshPart](https://developer.roblox.com/en-us/api-reference/class/MeshPart) object has superseded the SpecialMesh there are some differences developers should be aware of.

*   [BasePart.Material](https://developer.roblox.com/en-us/api-reference/property/BasePart/Material) displays correctly on the mesh when using a [MeshPart](https://developer.roblox.com/en-us/api-reference/class/MeshPart) and not when using a SpecialMesh
*   [MeshPart](https://developer.roblox.com/en-us/api-reference/class/MeshPart)s include the `MeshPart/CollisionFidelity` property, meaning the collision model of a [MeshPart](https://developer.roblox.com/en-us/api-reference/class/MeshPart) can be set to resemble the geometry of the mesh. The SpecialMesh object by contrast, uses the parent [BasePart](https://developer.roblox.com/en-us/api-reference/class/BasePart)s collision model
*   The mesh of a [MeshPart](https://developer.roblox.com/en-us/api-reference/class/MeshPart) scales on all axis depending on the [Size](https://developer.roblox.com/en-us/api-reference/property/BasePart/Size) property of the [MeshPart](https://developer.roblox.com/en-us/api-reference/class/MeshPart), the mesh of a SpecialMesh does not
*   The SpecialMesh object includes the [Offset](https://developer.roblox.com/en-us/api-reference/property/DataModelMesh/Offset) and [Scale](https://developer.roblox.com/en-us/api-reference/property/DataModelMesh/Scale) properties whereas [MeshPart](https://developer.roblox.com/en-us/api-reference/class/MeshPart)s do not
*   The [MeshId](https://developer.roblox.com/en-us/api-reference/property/FileMesh/MeshId) property of a [SpecialMesh](https://developer.roblox.com/en-us/api-reference/class/SpecialMesh) can be changed by a [Script](https://developer.roblox.com/en-us/api-reference/class/Script) or [LocalScript](https://developer.roblox.com/en-us/api-reference/class/LocalScript) during runtime. The [MeshId](https://developer.roblox.com/en-us/api-reference/property/MeshPart/MeshId) property of a [MeshPart](https://developer.roblox.com/en-us/api-reference/class/MeshPart) can not.

In most, but not all cases, using a [MeshPart](https://developer.roblox.com/en-us/api-reference/class/MeshPart) is more suitable. As [MeshPart](https://developer.roblox.com/en-us/api-reference/class/MeshPart)s are a relatively new feature however, developers should expect some of the above behaviour to change.

Uploading a custom mesh
-----------------------

Although a developer uploaded mesh can be used on a [SpecialMesh](https://developer.roblox.com/en-us/api-reference/class/SpecialMesh), meshes can currently only be be uploaded using [MeshPart](https://developer.roblox.com/en-us/api-reference/class/MeshPart)s or the game explorer. For more information on how to do this please see [this tutorial](https://developer.roblox.com/en-us/articles/mesh-parts).