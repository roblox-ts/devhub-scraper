Determines the speed at which the [`Beam.Texture`](https://create.roblox.com/docs/reference/engine/classes/Beam#Texture) image moves along
the [`Beam`](https://create.roblox.com/docs/reference/engine/classes/Beam).

When TextureSpeed is positive, the beam's texture will move from
[`Beam.Attachment0`](https://create.roblox.com/docs/reference/engine/classes/Beam#Attachment0) to [`Beam.Attachment1`](https://create.roblox.com/docs/reference/engine/classes/Beam#Attachment1). This direction can
be inverted by setting TextureSpeed to a negative number.

Note the speed at which the texture moves is relative to the length of the
texture. Meaning the more stretched the beam's [`Beam.Texture`](https://create.roblox.com/docs/reference/engine/classes/Beam#Texture) is,
the faster it will move at the same TextureSpeed.