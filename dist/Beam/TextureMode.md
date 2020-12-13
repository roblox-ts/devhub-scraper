Determines the manner in which the [Beam.Texture](https://developer.roblox.com/en-us/api-reference/property/Beam/Texture) scales and repeats.

Beam texture behavior
---------------------

### Static

Static mode is not used for beams and behaves identical to Wrap.

### Stretch

The texture is stretched relative to the beam's length, in studs, making the texture repeat based off [Beam.TextureLength](https://developer.roblox.com/en-us/api-reference/property/Beam/TextureLength). The size is determined by the beam's length over [Beam.TextureLength](https://developer.roblox.com/en-us/api-reference/property/Beam/TextureLength).

![](https://developer.roblox.com/assets/blt931973c484027dba/textureMode_strech.jpg)

### Wrap

The size of the repeating texture corresponds to [Beam.TextureLength](https://developer.roblox.com/en-us/api-reference/property/Beam/TextureLength) in studs.

![](https://developer.roblox.com/assets/blt4e94754e188a2359/textureMode_wrap.jpg)