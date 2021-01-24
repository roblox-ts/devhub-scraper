Determines the manner in which the [Beam.Texture](https://developer.roblox.com/en-us/api-reference/property/Beam/Texture) scales and repeats.

Beam texture behavior
---------------------

How a [Beam](https://developer.roblox.com/en-us/api-reference/class/Beam)'s texture scales or repeats is dependent on the TextureMode property.

When TextureMode is 'Wrap' the size of the repeating texture corresponds to [Beam.TextureLength](https://developer.roblox.com/en-us/api-reference/property/Beam/TextureLength) in studs. For an example of this see the image below:

![enter image description here](https://developer.roblox.com/assets/blt92742bad209f4935/beamTexture.gif)

Note, the 'Static' [TextureMode](https://developer.roblox.com/en-us/api-reference/enum/TextureMode) type is not used for [Beam](https://developer.roblox.com/en-us/api-reference/class/Beam)s and therefore behaves identically to 'Wrap'.

When [Beam.TextureMode](https://developer.roblox.com/en-us/api-reference/property/Beam/TextureMode) is set to 'Stretch' however the texture will be stretched relative to the beam's length. The size of the texture relative to the [Beam](https://developer.roblox.com/en-us/api-reference/class/Beam)'s length will be one over the [Beam.TextureLength](https://developer.roblox.com/en-us/api-reference/property/Beam/TextureLength). In practice, this means the texture will repeat [Beam.TextureLength](https://developer.roblox.com/en-us/api-reference/property/Beam/TextureLength) times. For an example of this see the image below:

![enter image description here](https://developer.roblox.com/assets/blt034506939f5674b3/beamTexture2.gif)