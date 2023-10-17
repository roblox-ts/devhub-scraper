**VertexColor** determines the hue change of the
[`Texture`](https://create.roblox.com/docs/reference/engine/classes/FileMesh#TextureId) of a [`FileMesh`](https://create.roblox.com/docs/reference/engine/classes/FileMesh).

The image below shows two versions of the hat
["Ozzy's Formal Top Hat"](https://create.roblox.com/docs/https://www.roblox.com/catalog/3690516671/Ozzys-Formal-Top-Hat).
The left has a default VertexColor of (1, 1, 1), or white. The right has a
VertexColor of (0, 0, 1), or blue. The RGB colors on the texture of the
red and white hat are multiplied with that of the VertexColor's XYZ
components.
![undefined](https://prod.docsiteassets.roblox.com/assets/legacy/DataModelMesh.VertexColor.jpg)

It should be noted that this property is a `Datatype.Vector3` rather than
a `Datatype.Color3`. To convert, use the following function:
```lua
local function color3ToVector3(c3)
   return Vector3.new(c3.r, c3.g, c3.b)
end
```

Although this property allows basic modification of a texture, changing a
texture entirely provides more control. See [`MeshPart`](https://create.roblox.com/docs/reference/engine/classes/MeshPart) for more
details.