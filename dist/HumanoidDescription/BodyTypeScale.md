![undefined](https://prod.docsiteassets.roblox.com/assets/blt4f4d8f6788a67841/BodyTypeScale.jpg)

**BodyTypeScale** determines by which the shape of a Humanoid rig is
interpolated from the standard R15 body shape (0) to a taller and more
slender/realistic body type (1). Values outside of the [0-1] range are
clamped. When the description is [applied](https://create.roblox.com/docs/reference/engine/classes/Humanoid#ApplyDescription) to a
Humanoid, this value maps to a "BodyTypeScales" [NumberValue](https://create.roblox.com/docs/reference/engine/classes/NumberValue) within the
Humanoid.

When the value of this property is 0, the
[ProportionScale](https://create.roblox.com/docs/reference/engine/classes/HumanoidDescription#ProportionScale) property does not
have any effect.

In the image, three R15 figures whose [Humanoid](https://create.roblox.com/docs/reference/engine/classes/Humanoid)s have
[HumanoidDescription](https://create.roblox.com/docs/reference/engine/classes/HumanoidDescription)s applied with the following BodyTypeScales values
(from left-to-right): 0, 0.5, 1.0. Also visible are 6 stacked 1x1x1 cube
parts for reference.

See also:

- [HumanoidDescription System](/avatar/characters/character-customization#humanoiddescription),
  for more information on [HumanoidDescription](https://create.roblox.com/docs/reference/engine/classes/HumanoidDescription).
- [ProportionScale](https://create.roblox.com/docs/reference/engine/classes/HumanoidDescription#ProportionScale), which also
  affects rig proportions when this property is non-zero
- [WidthScale](https://create.roblox.com/docs/reference/engine/classes/HumanoidDescription#HeightScale),
  [HeightScale](https://create.roblox.com/docs/reference/engine/classes/HumanoidDescription#DepthScale) and
  [DepthScale](https://create.roblox.com/docs/reference/engine/classes/HumanoidDescription#DepthScale), which provide finer control
  over the dimensions of a rig
- [HeadScale](https://create.roblox.com/docs/reference/engine/classes/HumanoidDescription#HeadScale), which provides specific
  control over the scale of the rig's head