The **Color** of a [UIGradient](https://create.roblox.com/docs/reference/engine/classes/UIGradient) describes the color to blend with the
parent UI element along the provided [ColorSequence](https://developer.roblox.com/en-us/api-reference/datatype/ColorSequence). This
property works in a similar manner to [Beam.Color](https://create.roblox.com/docs/reference/engine/classes/Beam#Color) or [Trail.Color](https://create.roblox.com/docs/reference/engine/classes/Trail#Color),
except that it applies over an on-screen distance determined by the
[Offset](https://create.roblox.com/docs/reference/engine/classes/UIGradient#Offset) and [Rotation](https://create.roblox.com/docs/reference/engine/classes/UIGradient#Rotation) of the
UIGradient. The image below shows the linear interpolation of four color
values:

![How the UIGradient Color ColorSequence applies color to a GuiObject][1]

[1]: https://prod.docsiteassets.roblox.com/assets/blt62f971fd0f185879/UIGradient.Color.2.jpg