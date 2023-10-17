The hue represented in light reflected in the opposite surfaces to those
facing the sun or moon.

The surfaces of a [`BasePart`](https://create.roblox.com/docs/reference/engine/classes/BasePart) influenced by ColorShift_Bottom depends
on the position and orientation of the [`BasePart`](https://create.roblox.com/docs/reference/engine/classes/BasePart) relative to the
sun or moon's position. Where the sun is directly overhead a
[`BasePart`](https://create.roblox.com/docs/reference/engine/classes/BasePart), the shift in color will only apply to the bottom
surface.

This effect can be increased or reduced by altering
[`Lighting.Brightness`](https://create.roblox.com/docs/reference/engine/classes/Lighting#Brightness).

ColorShift_Bottom influences the opposite surfaces to
[`Lighting.ColorShift_Top`](https://create.roblox.com/docs/reference/engine/classes/Lighting#ColorShift_Top)

Note, [`Lighting.ColorShift_Top`](https://create.roblox.com/docs/reference/engine/classes/Lighting#ColorShift_Top) and ColorShift_Bottom will interact
with the [`Lighting.Ambient`](https://create.roblox.com/docs/reference/engine/classes/Lighting#Ambient) and [`Lighting.OutdoorAmbient`](https://create.roblox.com/docs/reference/engine/classes/Lighting#OutdoorAmbient)
properties if they are greater than 0, 0, 0. Also, the influence of
ColorShift_Bottom can be very hard to identify when
[`Lighting.GlobalShadows`](https://create.roblox.com/docs/reference/engine/classes/Lighting#GlobalShadows) is enabled (as it is by default).