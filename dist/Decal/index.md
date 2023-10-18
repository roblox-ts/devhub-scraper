The Decal object is an object which applies an image to a face of a
[`BasePart`](https://create.roblox.com/docs/reference/engine/classes/BasePart).
## How does a Decal work?

A Decal will apply an image to the [`BasePart`](https://create.roblox.com/docs/reference/engine/classes/BasePart) it is parented to. The
surface this image is applied to is dependent on the [`FaceInstance.Face`](https://create.roblox.com/docs/reference/engine/classes/FaceInstance#Face)
property. The size of the decal is dependent on the size of the face, meaning
the size and aspect ratio of a decal can be changed by changing its parent's
[`BasePart.Size`](https://create.roblox.com/docs/reference/engine/classes/BasePart#Size).

The image a Decal applies is determined by its [`Decal.Texture`](https://create.roblox.com/docs/reference/engine/classes/Decal#Texture) property.
Images can be uploaded to Roblox provided they adhere to the community
guidelines.For information on how to upload images, see
[Textures and Decals](https://create.roblox.com/docs/parts/textures-decals).
## Alternatives to Decals

Although Decals have a wide variety of applications, in some cases developers
may wish to pick one of the following classes instead.

- For repeated tiled textures, the [`Texture`](https://create.roblox.com/docs/reference/engine/classes/Texture) object should be used
- To apply GUI elements, the [`SurfaceGui`](https://create.roblox.com/docs/reference/engine/classes/SurfaceGui) object should be used
- If the effect of lighting on the image needs to be altered, the
[`SurfaceGui`](https://create.roblox.com/docs/reference/engine/classes/SurfaceGui) object should be used