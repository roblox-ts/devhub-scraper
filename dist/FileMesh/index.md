The FileMesh object applies a textured mesh to a [`BasePart`](https://create.roblox.com/docs/reference/engine/classes/BasePart) when
parented to it. Its properties are inherited by the [`SpecialMesh`](https://create.roblox.com/docs/reference/engine/classes/SpecialMesh)
object.
## What is a FileMesh?

FileMeshes allow user uploaded meshes to be applied to a [`BasePart`](https://create.roblox.com/docs/reference/engine/classes/BasePart). The
mesh that is applied is dependent on the [`FileMesh.MeshId`](https://create.roblox.com/docs/reference/engine/classes/FileMesh#MeshId) property. A
texture can also be applied to this mesh using [`FileMesh.TextureId`](https://create.roblox.com/docs/reference/engine/classes/FileMesh#TextureId).

Although it is not an abstract class, and can be used by developers, all
[`FileMesh`](https://create.roblox.com/docs/reference/engine/classes/FileMesh) properties are inherited by the [`SpecialMesh`](https://create.roblox.com/docs/reference/engine/classes/SpecialMesh) object. A
[`SpecialMesh`](https://create.roblox.com/docs/reference/engine/classes/SpecialMesh) behaves identically to the FileMesh object when its
[`SpecialMesh.MeshType`](https://create.roblox.com/docs/reference/engine/classes/SpecialMesh#MeshType) is set to 'FileMesh'. Although both objects are
functional, the [`SpecialMesh`](https://create.roblox.com/docs/reference/engine/classes/SpecialMesh) object is the official supported class.

For more information on using meshes, please see the [`SpecialMesh`](https://create.roblox.com/docs/reference/engine/classes/SpecialMesh) page.