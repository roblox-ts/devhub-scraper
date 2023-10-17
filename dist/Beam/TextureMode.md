Determines the manner in which the [`Beam.Texture`](https://create.roblox.com/docs/reference/engine/classes/Beam#Texture) scales and
repeats.
#### Beam Texture Behavior

How a [`Beam`](https://create.roblox.com/docs/reference/engine/classes/Beam)'s texture scales or repeats is dependent on the
TextureMode property.

When TextureMode is 'Wrap' the size of the repeating texture corresponds
to [`Beam.TextureLength`](https://create.roblox.com/docs/reference/engine/classes/Beam#TextureLength) in studs. For an example of this see the
image below:
![undefined](https://prod.docsiteassets.roblox.com/assets/legacy/textureMode_wrap.jpg)

Note, the 'Static' `Enum.TextureMode` type is not used for [`Beam`](https://create.roblox.com/docs/reference/engine/classes/Beam)s
and therefore behaves identically to 'Wrap'.

When [`Beam.TextureMode`](https://create.roblox.com/docs/reference/engine/classes/Beam#TextureMode) is set to 'Stretch' however the texture will
be stretched relative to the beam's length. The size of the texture
relative to the [`Beam`](https://create.roblox.com/docs/reference/engine/classes/Beam)'s length will be one over the
[`Beam.TextureLength`](https://create.roblox.com/docs/reference/engine/classes/Beam#TextureLength). In practice, this means the texture will
repeat [`Beam.TextureLength`](https://create.roblox.com/docs/reference/engine/classes/Beam#TextureLength) times. For an example of this see the
image below:
![undefined](https://prod.docsiteassets.roblox.com/assets/legacy/textureMode_strech.jpg)