The lighting hue applied to areas that are occluded from the sky, such as
indoor areas.

This property defaults to 0, 0, 0 (black).

As long as the red, green and blue channels of this property do not exceed
the corresponding channels in [Lighting.OutdoorAmbient](https://create.roblox.com/docs/reference/engine/classes/Lighting#OutdoorAmbient) the change in hue
will be reserved for areas occluded from the sun/moon. The effective
[Lighting.OutdoorAmbient](https://create.roblox.com/docs/reference/engine/classes/Lighting#OutdoorAmbient) value is clamped to be greater than or equal to
Ambient in all channels. This means, if a channel of Ambient exceeds its
corresponding [Lighting.OutdoorAmbient](https://create.roblox.com/docs/reference/engine/classes/Lighting#OutdoorAmbient) channel then the hue will begin to
apply to outdoor areas.

Note, when [Lighting.GlobalShadows](https://create.roblox.com/docs/reference/engine/classes/Lighting#GlobalShadows) is disabled there is no distinction
between areas occluded and areas that are not. In this case
[Lighting.OutdoorAmbient](https://create.roblox.com/docs/reference/engine/classes/Lighting#OutdoorAmbient) will be ignored and the hue from the Ambient
property will be applied everywhere.

For more properties that influence the color of lighting, please see
[Lighting.ColorShiftBottom](https://create.roblox.com/docs/reference/engine/classes/Lighting#ColorShiftBottom) and [Lighting.ColorShiftTop](https://create.roblox.com/docs/reference/engine/classes/Lighting#ColorShiftTop).