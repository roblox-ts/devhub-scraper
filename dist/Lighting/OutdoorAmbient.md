The lighting hue applied to outdoor areas.

This property defaults to 127, 127, 127.

As long as the red, green and blue channels of [Lighting.Ambient](https://create.roblox.com/docs/reference/engine/classes/Lighting#Ambient) do not
exceed the corresponding channels in this property, the hue of the
lighting in outdoor areas will be determined by this property. The
effective OutdoorAmbient value is clamped to be greater than or equal to
[Lighting.Ambient](https://create.roblox.com/docs/reference/engine/classes/Lighting#Ambient) in all channels. This means, if a channel of
[Lighting.Ambient](https://create.roblox.com/docs/reference/engine/classes/Lighting#Ambient) exceeds its corresponding OutdoorAmbient channel then
the hue of [Lighting.Ambient](https://create.roblox.com/docs/reference/engine/classes/Lighting#Ambient) will begin to apply to outdoor areas. For a
visual demonstration of this, please see the images below.

![enter image description here][1]

Note, when [Lighting.GlobalShadows](https://create.roblox.com/docs/reference/engine/classes/Lighting#GlobalShadows) is disabled there is no distinction
between areas occluded from the sky and areas that are not. In this case
OutdoorAmbient will be ignored and the hue from the [Lighting.Ambient](https://create.roblox.com/docs/reference/engine/classes/Lighting#Ambient)
property will be applied everywhere.

For more properties that influence the color of lighting, please see
[Lighting.ColorShift_Bottom](https://create.roblox.com/docs/reference/engine/classes/Lighting#ColorShift_Bottom) and [Lighting.ColorShift_Top](https://create.roblox.com/docs/reference/engine/classes/Lighting#ColorShift_Top).

[1]: https://prod.docsiteassets.roblox.com/assets/blt6e6c67086eab8c57/Ambient.png