The **Transparency** of a [UIGradient](https://developer.roblox.com/en-us/api-reference/class/UIGradient) describes how “see-through” the parent UI element will be along the provided NumberSequence. This property works in a similar manner to [Beam.Transparency](https://developer.roblox.com/en-us/api-reference/property/Beam/Transparency) or [Trail.Transparency](https://developer.roblox.com/en-us/api-reference/property/Trail/Transparency), except that it applies over an on-screen distance determined by the [Offset](https://developer.roblox.com/en-us/api-reference/property/UIGradient/Offset) and [Rotation](https://developer.roblox.com/en-us/api-reference/property/UIGradient/Rotation) of the UIGradient. The image below shows the linear interpolation of three transparency values:

![How the UIGradient Transparency NumberSequence applies transparency to a GuiObject](https://developer.roblox.com/assets/blt4ce00aed92f8c4dd/UIGradient.Transparency.2.jpg)

Note: the envelope values of the [NumberSequenceKeypoints](https://developer.roblox.com/en-us/api-reference/datatype/NumberSequenceKeypoint) are ignored.

See Also
--------

*   `articles/Applying UIGradients`, for more information on creating UIGradient objects and how they work.