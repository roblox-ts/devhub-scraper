Sets the length of the [`Beam`](https://create.roblox.com/docs/reference/engine/classes/Beam)s texture if [`Beam.TextureMode`](https://create.roblox.com/docs/reference/engine/classes/Beam#TextureMode)
is 'Wrap' or 'Static'. If [`Beam.TextureMode`](https://create.roblox.com/docs/reference/engine/classes/Beam#TextureMode) is 'Stretch' then it
determines the size of the texture relative to the [`Beam`](https://create.roblox.com/docs/reference/engine/classes/Beam)'s length.
#### Beam texture behavior

How a [`Beam's`](https://create.roblox.com/docs/reference/engine/classes/Beam) texture scales or repeats is dependent on the
[`Beam.TextureMode`](https://create.roblox.com/docs/reference/engine/classes/Beam#TextureMode) property.

When [`Beam.TextureMode`](https://create.roblox.com/docs/reference/engine/classes/Beam#TextureMode) is 'Wrap' the size of the repeating texture
is equal to TextureLength in studs. For an example of this see the image
below:

![Bean texture](https://prod.docsiteassets.roblox.com/assets/legacy/beamTexture.gif)

Note, the 'Static' [`Enum.TextureMode`](https://create.roblox.com/docs/reference/engine/enums/TextureMode) type is not used for [`Beam`](https://create.roblox.com/docs/reference/engine/classes/Beam)s
and therefore behaves identically to 'Wrap'.

When [`Beam.TextureMode`](https://create.roblox.com/docs/reference/engine/classes/Beam#TextureMode) is set to 'Stretch' however the texture will
be stretched relative to the beam's length. The size of the texture
relative to the [`Beam`](https://create.roblox.com/docs/reference/engine/classes/Beam)'s length will be one over the TextureLength.
In practice, this means the texture will repeat TextureLength times. For
an example of this see the image below:

![Beam texture](https://prod.docsiteassets.roblox.com/assets/legacy/beamTexture2.gif)