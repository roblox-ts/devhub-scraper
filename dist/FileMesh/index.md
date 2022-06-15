The FileMesh object applies a textured mesh to a [BasePart](https://developer.roblox.com/en-us/api-reference/class/BasePart) when parented to it. Its properties are inherited by the [SpecialMesh](https://developer.roblox.com/en-us/api-reference/class/SpecialMesh) object.

What is a FileMesh?
-------------------

FileMeshes allow user uploaded meshes to be applied to a [BasePart](https://developer.roblox.com/en-us/api-reference/class/BasePart). The mesh that is applied is dependent on the [FileMesh.MeshId](https://developer.roblox.com/en-us/api-reference/property/FileMesh/MeshId) property. A texture can also be applied to this mesh using [FileMesh.TextureId](https://developer.roblox.com/en-us/api-reference/property/FileMesh/TextureId).

Although it is not an abstract class, and can be used by developers, all [FileMesh](https://developer.roblox.com/en-us/api-reference/class/FileMesh) properties are inherited by the [SpecialMesh](https://developer.roblox.com/en-us/api-reference/class/SpecialMesh) object. A [SpecialMesh](https://developer.roblox.com/en-us/api-reference/class/SpecialMesh) behaves identically to the FileMesh object when its [SpecialMesh.MeshType](https://developer.roblox.com/en-us/api-reference/property/SpecialMesh/MeshType) is set to 'FileMesh'. Although both objects are functional, the [SpecialMesh](https://developer.roblox.com/en-us/api-reference/class/SpecialMesh) object is the official supported class.

For more information on using meshes, please see the [SpecialMesh](https://developer.roblox.com/en-us/api-reference/class/SpecialMesh) page.