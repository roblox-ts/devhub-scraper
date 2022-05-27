The **Transparency** of a [UIGradient](https://create.roblox.com/docs/reference/engine/classes/UIGradient) describes how "see-through" the
parent UI element will be along the provided NumberSequence. This property
works in a similar manner to [Beam.Transparency](https://create.roblox.com/docs/reference/engine/classes/Beam#Transparency) or [Trail.Transparency](https://create.roblox.com/docs/reference/engine/classes/Trail#Transparency),
except that it applies over an on-screen distance determined by the
[Offset](https://create.roblox.com/docs/reference/engine/classes/UIGradient#Offset) and [Rotation](https://create.roblox.com/docs/reference/engine/classes/UIGradient#Rotation) of the
UIGradient. The image below shows the linear interpolation of three
transparency values:

![How the UIGradient Transparency NumberSequence applies transparency to a GuiObject][1]

Note: the envelope values of the
[NumberSequenceKeypoints](https://developer.roblox.com/en-us/api-reference/datatype/NumberSequenceKeypoint) are ignored.

[1]: https://prod.docsiteassets.roblox.com/assets/blt4ce00aed92f8c4dd/UIGradient.Transparency.2.jpg