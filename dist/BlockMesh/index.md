The BlockMesh object applies a 'brick' mesh to the [`BasePart`](https://create.roblox.com/docs/reference/engine/classes/BasePart) it is
parented to. It behaves identically to a [`SpecialMesh`](https://create.roblox.com/docs/reference/engine/classes/SpecialMesh) with
[`SpecialMesh.MeshType`](https://create.roblox.com/docs/reference/engine/classes/SpecialMesh#MeshType) set to 'brick'.
## What does a BlockMesh do?

A BlockMesh gives the [`BasePart`](https://create.roblox.com/docs/reference/engine/classes/BasePart) it was applied to a brick shaped mesh.
It is identical in appearance to a standard Roblox [`Part`](https://create.roblox.com/docs/reference/engine/classes/Part).

The dimensions of the mesh will scale linearly in all directions with
[`BasePart.Size`](https://create.roblox.com/docs/reference/engine/classes/BasePart#Size), this means a part containing a BlockMesh can be resized
the same way as any other part.

The additional functionality a BlockMesh brings however, is the ability to set
the [`DataModelMesh.Scale`](https://create.roblox.com/docs/reference/engine/classes/DataModelMesh#Scale) and [`DataModelMesh.Offset`](https://create.roblox.com/docs/reference/engine/classes/DataModelMesh#Offset) properties.
These allow the position and dimensions of the mesh that is displayed to be
changed without changing the [`BasePart.Position`](https://create.roblox.com/docs/reference/engine/classes/BasePart#Position) or
[`BasePart.Size`](https://create.roblox.com/docs/reference/engine/classes/BasePart#Size) of the [`BasePart`](https://create.roblox.com/docs/reference/engine/classes/BasePart) the mesh is parented to.

Note as the [`BlockMesh`](https://create.roblox.com/docs/reference/engine/classes/BlockMesh) object does not include a texture the
[`DataModelMesh.VertexColor`](https://create.roblox.com/docs/reference/engine/classes/DataModelMesh#VertexColor) property does not do anything.