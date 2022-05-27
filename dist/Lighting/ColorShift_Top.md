The hue represented in light reflected from surfaces facing the sun or
moon.

The surfaces of a [BasePart](https://create.roblox.com/docs/reference/engine/classes/BasePart) influenced by ColorShift_Top depends on the
position and orientation of the [BasePart](https://create.roblox.com/docs/reference/engine/classes/BasePart) relative to the sun or moon's
position. Where the sun is directly overhead a [BasePart](https://create.roblox.com/docs/reference/engine/classes/BasePart), the shift in
color will only apply to the top surface.

This effect can be increased or reduced by altering [Lighting.Brightness](https://create.roblox.com/docs/reference/engine/classes/Lighting#Brightness).

Whilst ColorShift_Top influences surfaces exposed to light,
[Lighting.ColorShift_Bottom](https://create.roblox.com/docs/reference/engine/classes/Lighting#ColorShiftBottom) influences surfaces
sheltered from light.

Note, ColorShift_Top and ColorShift_Bottom will interact with the
[Lighting.Ambient](https://create.roblox.com/docs/reference/engine/classes/Lighting#Ambient) and [Lighting.OutdoorAmbient](https://create.roblox.com/docs/reference/engine/classes/Lighting#OutdoorAmbient) properties if they are
greater than 0, 0, 0.

[1]: https://prod.docsiteassets.roblox.com/assets/blt6316b01e497fa7aa/ColorShift.png