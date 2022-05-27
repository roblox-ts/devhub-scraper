MeshParts are a form of [BasePart](https://create.roblox.com/docs/reference/engine/classes/BasePart) that includes a physically simulated custom
mesh. Unlike with other mesh classes, such as [SpecialMesh](https://create.roblox.com/docs/reference/engine/classes/SpecialMesh) and [BlockMesh](https://create.roblox.com/docs/reference/engine/classes/BlockMesh),
they are not parented to a [BasePart](https://create.roblox.com/docs/reference/engine/classes/BasePart) but rather behave as a [BasePart](https://create.roblox.com/docs/reference/engine/classes/BasePart) in
their own right.

## How do I use MeshParts

The mesh and texture of a MeshPart are determined by the [MeshPart.MeshId](https://create.roblox.com/docs/reference/engine/classes/MeshPart#MeshId) and
[MeshPart.TextureID](https://create.roblox.com/docs/reference/engine/classes/MeshPart#TextureID) properties. For more information, see
[Meshes](/building-and-visuals/modeling/meshes).

## SpecialMesh or MeshPart?

There are currently two ways of using a developer created mesh. They are using
a [SpecialMesh](https://create.roblox.com/docs/reference/engine/classes/SpecialMesh) with the [SpecialMesh.FileType](https://create.roblox.com/docs/reference/engine/classes/SpecialMesh#FileType) set to 'FileMesh', or by using
a MeshPart. Although, on the whole, the MeshPart object has superseded the
SpecialMesh there are some differences developers should be aware of.

- [BasePart.Material](https://create.roblox.com/docs/reference/engine/classes/BasePart#Material) displays correctly on the mesh when using a MeshPart and
  not when using a [SpecialMesh](https://create.roblox.com/docs/reference/engine/classes/SpecialMesh)
- MeshParts include the [MeshPart.CollisionFidelity](https://create.roblox.com/docs/reference/engine/classes/MeshPart#CollisionFidelity) property, meaning the
  collision model of a MeshPart can be set to resemble the geometry of the
  mesh. The [SpecialMesh](https://create.roblox.com/docs/reference/engine/classes/SpecialMesh) object by contrast, uses the parent [BasePart](https://create.roblox.com/docs/reference/engine/classes/BasePart)s
  collision model
- The mesh of a MeshPart scales on all axis depending on the [BasePart.Size](https://create.roblox.com/docs/reference/engine/classes/BasePart#Size)
  property of the MeshPart, the mesh of a [SpecialMesh](https://create.roblox.com/docs/reference/engine/classes/SpecialMesh) does not
- The [SpecialMesh](https://create.roblox.com/docs/reference/engine/classes/SpecialMesh) object includes the [DataModelMesh.Offset](https://create.roblox.com/docs/reference/engine/classes/DataModelMesh#Offset) and
  [DataModelMesh.Scale](https://create.roblox.com/docs/reference/engine/classes/DataModelMesh#Scale) properties whereas MeshParts do not
- The [DataModelMesh.MeshId](https://create.roblox.com/docs/reference/engine/classes/DataModelMesh#MeshId) property of a [SpecialMesh](https://create.roblox.com/docs/reference/engine/classes/SpecialMesh) can be changed by a
  [Script](https://create.roblox.com/docs/reference/engine/classes/Script) or [LocalScript](https://create.roblox.com/docs/reference/engine/classes/LocalScript) during runtime. The [MeshPart.MeshId](https://create.roblox.com/docs/reference/engine/classes/MeshPart#MeshId) property of
  a MeshPart can not

In most, but not all cases, using a MeshPart is more suitable. As MeshParts
are a relatively new feature however, developers should expect some of the
above behaviour to change.

[1]: https://developer.roblox.com/articles/Mesh-Parts