The CylinderMesh object applies a 'cylinder' mesh to the [`BasePart`](https://create.roblox.com/docs/reference/engine/classes/BasePart) it
is parented to.
## What does a CylinderMesh do?

A CylinderMesh gives the [`BasePart`](https://create.roblox.com/docs/reference/engine/classes/BasePart) it was applied to a cylinder shaped
mesh.

The mesh applied gives the same appearance as that due to the
[`SpecialMesh.MeshType`](https://create.roblox.com/docs/reference/engine/classes/SpecialMesh#MeshType) of a [`SpecialMesh`](https://create.roblox.com/docs/reference/engine/classes/SpecialMesh) being set to 'Cylinder'
or [`Part.Shape`](https://create.roblox.com/docs/reference/engine/classes/Part#Shape) being set to 'Cylinder'. However, unlike those two
cases, it is orientated so that the height of the cylinder is along the
[`BasePart`](https://create.roblox.com/docs/reference/engine/classes/BasePart)'s Y axis.

The dimensions of the mesh scale relative to the [`BasePart.Size`](https://create.roblox.com/docs/reference/engine/classes/BasePart#Size) of the
[`BasePart`](https://create.roblox.com/docs/reference/engine/classes/BasePart). This scale is uniformly along the [`BasePart`](https://create.roblox.com/docs/reference/engine/classes/BasePart)'s Y axis
and maintaining a 1:1 ratio for the part's X and Z axis, using the lowest
value. This means the [`BasePart`](https://create.roblox.com/docs/reference/engine/classes/BasePart) can be resized normally, but the cross
section of the cylinder will always remain a circle and cannot be stretched or
compressed.

Note as the CylinderMesh object does not include a texture the
[`DataModelMesh.VertexColor`](https://create.roblox.com/docs/reference/engine/classes/DataModelMesh#VertexColor) property does not do anything.
## Why use a CylinderMesh?

The advantage of using a mesh over setting the [`Part.Shape`](https://create.roblox.com/docs/reference/engine/classes/Part#Shape) property of
a part to 'Cylinder' is that the [`DataModelMesh.Scale`](https://create.roblox.com/docs/reference/engine/classes/DataModelMesh#Scale) and
[`DataModelMesh.Offset`](https://create.roblox.com/docs/reference/engine/classes/DataModelMesh#Offset) properties are exposed. These allow the position
and dimensions of the mesh that is displayed to be changed without changing
the [`BasePart.Position`](https://create.roblox.com/docs/reference/engine/classes/BasePart#Position) or [`BasePart.Size`](https://create.roblox.com/docs/reference/engine/classes/BasePart#Size) of the [`Part`](https://create.roblox.com/docs/reference/engine/classes/Part) the
mesh is parented to.

The key difference between a CylinderMesh or a [`SpecialMesh`](https://create.roblox.com/docs/reference/engine/classes/SpecialMesh) with
[`SpecialMesh.MeshType`](https://create.roblox.com/docs/reference/engine/classes/SpecialMesh#MeshType) set to 'Cylinder' is the orientation of the
cylinder mesh. With a CylinderMesh, the height of the cylinder is aligned with
the height (Y axis) of the part. With a [`SpecialMesh`](https://create.roblox.com/docs/reference/engine/classes/SpecialMesh) (or [`Part`](https://create.roblox.com/docs/reference/engine/classes/Part)
with [`Part.Shape`](https://create.roblox.com/docs/reference/engine/classes/Part#Shape) set to 'Cylinder'), the height of the cylinder is
aligned with the X axis.