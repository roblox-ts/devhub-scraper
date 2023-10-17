This property modifies the lighting of the surface by adding bumps, dents,
cracks, and curves without adding more polygons.

Normal maps are RGB images that modify the surface's normal vector used
for lighting calculations. The R, G, and B channels of the NormalMap
correspond to the X, Y, and Z components of the local surface vector
respectively, and byte values of 0 and 255 for each channel correspond
linearly to normal vector components of -1 and 1.016 respectively. This
range is stretched slightly from -1 to 1 so that a byte value of 127 maps
to exactly 0. The normal vector's Z axis is always defined as the
direction of the underlying mesh's normal. A uniform (127,127,255) image
translates to a completely flat normal map where the normal is everywhere
perpendicular to the mesh surface. This format is called "tangent space"
normal maps. Roblox does not support world space or object space normal
maps.

Incorrectly flipped normal components can make bumps appear like indents.
If you import a normal map and notice the lighting looks off, you may need
to invert the G channel of the image. The X and Y axes of the tangent
space frame correspond to the X and Y directions in the image after it's
transformed by the mesh UVs. If you view your normal map in an image
editor as if it were displayed on a surface, normals pointing towards the
right side of the screen should appear more red, and normals pointing
towards the top side of your screen should appear more green.

![Bread normal map](https://prod.docsiteassets.roblox.com/assets/legacy/bread-nmap.png)

The terms "DirectX format" and "OpenGL format" are sometimes used to
describe whether the G channel of the normal map is inverted or not.
Roblox expects the OpenGL format.

Roblox expects imported meshes to include tangents. Modeling software may
also refer to this as "tangent space" information. If you apply a normal
map and it does not seem to make any visual difference, you may need to
re-export your mesh along with its tangent information from modeling
software.