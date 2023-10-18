This property determines how the alpha channel of the
[`SurfaceAppearance.ColorMap`](https://create.roblox.com/docs/reference/engine/classes/SurfaceAppearance#ColorMap) of a [`SurfaceAppearance`](https://create.roblox.com/docs/reference/engine/classes/SurfaceAppearance) is used.

When AlphaMode is set to [`Transparency`](https://create.roblox.com/docs/reference/engine/enums/AlphaMode) and the
[`MeshPart.Transparency`](https://create.roblox.com/docs/reference/engine/classes/BasePart#Transparency) is set to 0, opaque
pixels in the SurfaceAppearance's ColorMap will render as completely
opaque in the 3D scene. This solves various problems for textures with
different transparent and opaque areas, such as foliage. When parts of the
surface are fully opaque, the Roblox engine can render them with proper
depth-based occlusion. Opaque surfaces also generally work better with
depth-based effects like DepthOfField, glass and water refraction, and
water reflection.

MeshPart.TextureId vs SurfaceAppearance:

![Foliage comparison](https://prod.docsiteassets.roblox.com/assets/legacy/leaves-comparison.gif)

Here is an example of a fern color map. Only the pixels on the leaves have
full alpha.

![Alpha fern](https://prod.docsiteassets.roblox.com/assets/legacy/fern-color.png)