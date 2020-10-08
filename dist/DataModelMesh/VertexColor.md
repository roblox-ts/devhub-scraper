**VertexColor** determines the huge change of the [Texture](https://developer.roblox.com/en-us/api-reference/property/FileMesh/TextureId) of a [FileMesh](https://developer.roblox.com/en-us/api-reference/class/FileMesh).

The image below shows two versions of the hat [“Ozzy's Formal Top Hat”](https://www.roblox.com/catalog/3690516671/Ozzys-Formal-Top-Hat). The left has a default VertexColor of (1, 1, 1), or white. The right has a VertexColor of (0, 0, 1), or blue. The RGB colors on the texture of the red and white hat are multiplied with that of the VertexColor's XYZ components.

![](https://developer.roblox.com/assets/blt0793b0fc6df03875/DataModelMesh.VertexColor.jpg)

It should be noted that this property is a [Vector3](https://developer.roblox.com/en-us/api-reference/datatype/Vector3) rather than a [Color3](https://developer.roblox.com/en-us/api-reference/datatype/Color3). To convert, use the following function:

```Lua
local function color3ToVector3(c3)
   return Vector3.new(c3.r, c3.g, c3.b)
end
``` 

Although this property allows basic modification of a texture, changing a texture entirely provides more control. See [MeshPart](https://developer.roblox.com/en-us/api-reference/class/MeshPart) for more details.