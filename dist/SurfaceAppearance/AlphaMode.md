This property determines how the alpha channel of the [SurfaceAppearance.ColorMap](https://developer.roblox.com/en-us/api-reference/property/SurfaceAppearance/ColorMap) of a [SurfaceAppearance](https://developer.roblox.com/en-us/api-reference/class/SurfaceAppearance) is used.

When AlphaMode is set to [Transparency](https://developer.roblox.com/en-us/api-reference/enum/AlphaMode) and the `BasePart/Transparency|MeshPart.Transparency` is set to 0, opaque pixels in the SurfaceAppearance's ColorMap will render as completely opaque in the 3D scene. This solves various problems for textures with different transparent and opaque areas, such as foliage. When parts of the surface are fully opaque, the Roblox engine can render them with proper depth-based occlusion. Opaque surfaces also generally work better with depth-based effects like DepthOfField, glass and water refraction, and water reflection.

MeshPart.TextureId vs SurfaceAppearance:

![Foliage comparison](https://developer.roblox.com/assets/bltc11b6d62483163b0/leaves-comparison.gif)

Here is an example of a fern color map. Only the pixels on the leaves have full alpha.

![Alpha fern](https://developer.roblox.com/assets/blt1a2e3175d2522842/fern-color.png)