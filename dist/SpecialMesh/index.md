The [`SpecialMesh`](https://create.roblox.com/docs/reference/engine/classes/SpecialMesh) object applies a mesh to a [`BasePart`](https://create.roblox.com/docs/reference/engine/classes/BasePart) depending
on the the [`MeshType`](https://create.roblox.com/docs/reference/engine/classes/SpecialMesh#MeshType) property. A number of options
are available.

- **Brick** - A block shape, equivalent to a [`BlockMesh`](https://create.roblox.com/docs/reference/engine/classes/BlockMesh)
- **Cylinder** - A cylinder, identical to a [`Part`](https://create.roblox.com/docs/reference/engine/classes/Part) with a
[`Part.Shape`](https://create.roblox.com/docs/reference/engine/classes/Part#Shape) of 'Cylinder'
- **FileMesh** - A user uploaded Mesh, equivalent to [`FileMesh`](https://create.roblox.com/docs/reference/engine/classes/FileMesh) that a
texture can be applied to using the [`FileMesh.TextureId`](https://create.roblox.com/docs/reference/engine/classes/FileMesh#TextureId) property
- **Head** - A character head shape
- **Sphere** - A sphere shape, similar to a [`Part`](https://create.roblox.com/docs/reference/engine/classes/Part) with a
[`Part.Shape`](https://create.roblox.com/docs/reference/engine/classes/Part#Shape) of 'Ball' but can be freely resized on all axis
- **Wedge** - A wedge shape, identical to a [`WedgePart`](https://create.roblox.com/docs/reference/engine/classes/WedgePart)
- **Torso** - A block with sloped sides, due to be deprecated

Note, each [`SpecialMesh.MeshType`](https://create.roblox.com/docs/reference/engine/classes/SpecialMesh#MeshType) will scale differently when using
[`DataModelMesh.Scale`](https://create.roblox.com/docs/reference/engine/classes/DataModelMesh#Scale), for more information on this please see the page
on [`DataModelMesh.Scale`](https://create.roblox.com/docs/reference/engine/classes/DataModelMesh#Scale). The SpecialMesh object also exposes the
[`DataModelMesh.Offset`](https://create.roblox.com/docs/reference/engine/classes/DataModelMesh#Offset) property.

It is important to remember that when using a SpecialMesh, only the appearance
of a part changes. The collision model of the part remains the same. For
example, a character will not be able to walk correctly over a mesh as the
mesh geometry is not taken into account.
#### SpecialMesh vs MeshPart

There are currently two ways of using a developer created mesh. They are using
a SpecialMesh with the [`SpecialMesh.FileType`](https://create.roblox.com/docs/reference/engine/classes/SpecialMesh#FileType) set to 'FileMesh', or by
using a [`MeshPart`](https://create.roblox.com/docs/reference/engine/classes/MeshPart). Although, on the whole, the [`MeshPart`](https://create.roblox.com/docs/reference/engine/classes/MeshPart) object
has superseded the SpecialMesh there are some differences developers should be
aware of.

- [`BasePart.Material`](https://create.roblox.com/docs/reference/engine/classes/BasePart#Material) displays correctly on the mesh when using a
[`MeshPart`](https://create.roblox.com/docs/reference/engine/classes/MeshPart) and not when using a SpecialMesh
- [`MeshPart`](https://create.roblox.com/docs/reference/engine/classes/MeshPart)s include the [`MeshPart.CollisionFidelity`](https://create.roblox.com/docs/reference/engine/classes/MeshPart#CollisionFidelity) property,
meaning the collision model of a [`MeshPart`](https://create.roblox.com/docs/reference/engine/classes/MeshPart) can be set to resemble the
geometry of the mesh. The SpecialMesh object by contrast, uses the parent
[`BasePart`](https://create.roblox.com/docs/reference/engine/classes/BasePart)s collision model
- The mesh of a [`MeshPart`](https://create.roblox.com/docs/reference/engine/classes/MeshPart) scales on all axis depending on the
[`Size`](https://create.roblox.com/docs/reference/engine/classes/BasePart#Size) property of the [`MeshPart`](https://create.roblox.com/docs/reference/engine/classes/MeshPart), the mesh of a
SpecialMesh does not
- The SpecialMesh object includes the [`Offset`](https://create.roblox.com/docs/reference/engine/classes/DataModelMesh#Offset) and
[`Scale`](https://create.roblox.com/docs/reference/engine/classes/DataModelMesh#Scale) properties whereas [`MeshPart`](https://create.roblox.com/docs/reference/engine/classes/MeshPart)s do
not
- The [`MeshId`](https://create.roblox.com/docs/reference/engine/classes/FileMesh#MeshId) property of a [`SpecialMesh`](https://create.roblox.com/docs/reference/engine/classes/SpecialMesh) can be
changed by a [`Script`](https://create.roblox.com/docs/reference/engine/classes/Script) or [`LocalScript`](https://create.roblox.com/docs/reference/engine/classes/LocalScript) during runtime. The
[`MeshId`](https://create.roblox.com/docs/reference/engine/classes/MeshPart#MeshId) property of a [`MeshPart`](https://create.roblox.com/docs/reference/engine/classes/MeshPart) can not.