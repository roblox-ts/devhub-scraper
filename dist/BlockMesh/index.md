The BlockMesh object applies a 'brick' mesh to the [BasePart](https://developer.roblox.com/en-us/api-reference/class/BasePart) it is parented to. It behaves identically to a [SpecialMesh](https://developer.roblox.com/en-us/api-reference/class/SpecialMesh) with [SpecialMesh.MeshType](https://developer.roblox.com/en-us/api-reference/property/SpecialMesh/MeshType) set to 'brick'.

What does a BlockMesh do?
-------------------------

A BlockMesh gives the [BasePart](https://developer.roblox.com/en-us/api-reference/class/BasePart) it was applied to a brick shaped mesh. It is identical in appearance to a standard Roblox [Part](https://developer.roblox.com/en-us/api-reference/class/Part).

The dimensions of the mesh will scale linearly in all directions with [BasePart.Size](https://developer.roblox.com/en-us/api-reference/property/BasePart/Size), this means a part containing a BlockMesh can be resized the same way as any other part.

The additional functionality a BlockMesh brings however, is the ability to set the [DataModelMesh.Scale](https://developer.roblox.com/en-us/api-reference/property/DataModelMesh/Scale) and [DataModelMesh.Offset](https://developer.roblox.com/en-us/api-reference/property/DataModelMesh/Offset) properties. These allow the position and dimensions of the mesh that is displayed to be changed without changing the [BasePart.Position](https://developer.roblox.com/en-us/api-reference/property/BasePart/Position) or [BasePart.Size](https://developer.roblox.com/en-us/api-reference/property/BasePart/Size) of the [BasePart](https://developer.roblox.com/en-us/api-reference/class/BasePart) the mesh is parented to.

Note as the [BlockMesh](https://developer.roblox.com/en-us/api-reference/class/BlockMesh) object does not include a texture the [DataModelMesh.VertexColor](https://developer.roblox.com/en-us/api-reference/property/DataModelMesh/VertexColor) property does not do anything.