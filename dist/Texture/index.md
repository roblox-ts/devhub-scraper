A Texture object applies a repeating texture to the face of a
[`BasePart`](https://create.roblox.com/docs/reference/engine/classes/BasePart).
## How does a Texture work?

A Texture will apply an image to the [`BasePart`](https://create.roblox.com/docs/reference/engine/classes/BasePart) it is parented to. The
surface this image is applied to is dependent on the [`FaceInstance.Face`](https://create.roblox.com/docs/reference/engine/classes/FaceInstance#Face)
property. When the [`BasePart`](https://create.roblox.com/docs/reference/engine/classes/BasePart) is resized, the image will repeat. The
size of the repeating textures is determined by the
[`Texture.StudsPerTileU`](https://create.roblox.com/docs/reference/engine/classes/Texture#StudsPerTileU) and `StudsPerTileV` properties.
```lua
local texture = Instance.new("Texture")
texture.Texture = "http://www.roblox.com/asset/?id=732339893" -- roblox logo
-- 1x1 studs repeating texture
texture.StudsPerTileU = 1
texture.StudsPerTileV = 1
```

The image a Texture applies is determined by its [`Decal.Texture`](https://create.roblox.com/docs/reference/engine/classes/Decal#Texture)
property. Images can be uploaded to Roblox provided they adhere to the
community guidelines. For information on how to upload images, see
[Textures and Decals](https://create.roblox.com/docs/parts/textures-decals).
## What is the difference between Textures and Decals?

The texture object is very similar to the [`Decal`](https://create.roblox.com/docs/reference/engine/classes/Decal) object. However,
whereas the image applied by a [`Decal`](https://create.roblox.com/docs/reference/engine/classes/Decal) scales when the [`BasePart`](https://create.roblox.com/docs/reference/engine/classes/BasePart)
is resized, the image applied by a Texture repeats.

Repeating textures have a wide range of applications such as floor tiles and
wall textures.
## Alternatives to Textures

Although Decals have a wide variety of applications, in some cases developers
may wish to pick one of the following classes instead.

- For non repeating images [`Decal`](https://create.roblox.com/docs/reference/engine/classes/Decal) object should be used
- To apply GUI elements, the [`SurfaceGui`](https://create.roblox.com/docs/reference/engine/classes/SurfaceGui) object should be used
- If the effect of lighting on the image needs to be altered, the
[`SurfaceGui`](https://create.roblox.com/docs/reference/engine/classes/SurfaceGui) object should be used