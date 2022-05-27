The texture applied to the [MeshPart](https://create.roblox.com/docs/reference/engine/classes/MeshPart). When this property is set to an
empty string, no texture will be applied to the mesh.

```
MeshPart.TextureID = "" -- no texture
```

Note, although the `MeshPart/MeshId` property cannot be changed during
runtime, the texture can.

#### How can I change the texture of a mesh?

Using the TextureId property, the texture of a mesh can be changed without
having to reupload the mesh. To do this, a new image will need to be
uploaded to Roblox with the desired texture. The original texture image
file can be obtained by exporting the mesh using the 'Export Selection'
option in Roblox Studio. The image file will be saved alongside the
exported .obj file.

The new texture can then be re-uploaded to Roblox as a Decal and its
content ID can be applied to the mesh using the TextureId property.

#### How can I make a textured mesh?

A mesh can only be textured if the mesh has been UV mapped. UV mapping
refers to the practice of projecting a texture map onto a mesh. This
cannot be done using Roblox Studio and has to be done using an external 3D
modelling application such as [Blender][1].

[1]: https://www.blender.org/