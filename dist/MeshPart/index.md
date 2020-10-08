MeshParts are a form of [BasePart](https://developer.roblox.com/en-us/api-reference/class/BasePart) that includes a physically simulated custom mesh. Unlike with other mesh classes, such as [SpecialMesh](https://developer.roblox.com/en-us/api-reference/class/SpecialMesh) and [BlockMesh](https://developer.roblox.com/en-us/api-reference/class/BlockMesh), they are not parented to a [BasePart](https://developer.roblox.com/en-us/api-reference/class/BasePart) but rather behave as a [BasePart](https://developer.roblox.com/en-us/api-reference/class/BasePart) in their own right.

How do I use MeshParts
----------------------

The mesh and texture of a MeshPart are determined by the [MeshPart.MeshId](https://developer.roblox.com/en-us/api-reference/property/MeshPart/MeshId) and [MeshPart.TextureID](https://developer.roblox.com/en-us/api-reference/property/MeshPart/TextureID) properties. For more information on how to use MeshParts please see [here](https://developer.roblox.com/en-us/api-reference/class/Articles/Mesh Parts).

SpecialMesh or MeshPart?
------------------------

There are currently two ways of using a developer created mesh. They are using a [SpecialMesh](https://developer.roblox.com/en-us/api-reference/class/SpecialMesh) with the `SpecialMesh/FileType` set to 'FileMesh', or by using a MeshPart. Although, on the whole, the MeshPart object has superseded the SpecialMesh there are some differences developers should be aware of.

*   [BasePart.Material](https://developer.roblox.com/en-us/api-reference/property/BasePart/Material) displays correctly on the mesh when using a MeshPart and not when using a [SpecialMesh](https://developer.roblox.com/en-us/api-reference/class/SpecialMesh)
*   MeshParts include the `MeshPart/CollisionFidelity` property, meaning the collision model of a MeshPart can be set to resemble the geometry of the mesh. The [SpecialMesh](https://developer.roblox.com/en-us/api-reference/class/SpecialMesh) object by contrast, uses the parent [BasePart](https://developer.roblox.com/en-us/api-reference/class/BasePart)s collision model
*   The mesh of a MeshPart scales on all axis depending on the [BasePart.Size](https://developer.roblox.com/en-us/api-reference/property/BasePart/Size) property of the MeshPart, the mesh of a [SpecialMesh](https://developer.roblox.com/en-us/api-reference/class/SpecialMesh) does not
*   The [SpecialMesh](https://developer.roblox.com/en-us/api-reference/class/SpecialMesh) object includes the [DataModelMesh.Offset](https://developer.roblox.com/en-us/api-reference/property/DataModelMesh/Offset) and [DataModelMesh.Scale](https://developer.roblox.com/en-us/api-reference/property/DataModelMesh/Scale) properties whereas MeshParts do not
*   The `DataModelMesh/MeshId` property of a [SpecialMesh](https://developer.roblox.com/en-us/api-reference/class/SpecialMesh) can be changed by a [Script](https://developer.roblox.com/en-us/api-reference/class/Script) or [LocalScript](https://developer.roblox.com/en-us/api-reference/class/LocalScript) during runtime. The [MeshPart.MeshId](https://developer.roblox.com/en-us/api-reference/property/MeshPart/MeshId) property of a MeshPart can not

In most, but not all cases, using a MeshPart is more suitable. As MeshParts are a relatively new feature however, developers should expect some of the above behaviour to change.