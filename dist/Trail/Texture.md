The Texture property is the texture to draw on a [`Trail`](https://create.roblox.com/docs/reference/engine/classes/Trail)'s segments.
This property sets which image asset to use for the texture. This is set
the same way as textures in other objects, such as [`ImageLabel`](https://create.roblox.com/docs/reference/engine/classes/ImageLabel) or
[`ParticleEmitter`](https://create.roblox.com/docs/reference/engine/classes/ParticleEmitter). The simplest way to set this property is to use
an image uploaded to the Asset Manager (this requires the current place to
be Published to Roblox).

If a texture is not provided, then just the [`Trail.Color`](https://create.roblox.com/docs/reference/engine/classes/Trail#Color) of the
Trail will be used. With a texture, the trail will draw the texture as its
attachments move.

![A trail with a pawprint texture.](https://prod.docsiteassets.roblox.com/assets/legacy/TrailTexture.gif)

Textures can be displayed in a variety of different ways based on the
trail's [`Trail.TextureMode`](https://create.roblox.com/docs/reference/engine/classes/Trail#TextureMode) and [`Trail.TextureLength`](https://create.roblox.com/docs/reference/engine/classes/Trail#TextureLength)
properties.