![undefined](https://prod.docsiteassets.roblox.com/assets/bltfe95e570d9750c28/ProportionScale.jpg)

**ProportionScale** determines how wide (0) or narrow (1) a Humanoid rig.
Values outside of the [0-1] range are clamped. When the description is
[applied](https://create.roblox.com/docs/reference/engine/classes/Humanoid#ApplyDescription) to a Humanoid, this value maps to a
"BodyProportionScale" [NumberValue](https://create.roblox.com/docs/reference/engine/classes/NumberValue) within the Humanoid.

When the value of [BodyTypeScale](https://create.roblox.com/docs/reference/engine/classes/HumanoidDescription#BodyTypeScale) is 0,
this property does not have any effect.

In the image, four R15 figures are visible whose [Humanoid](https://create.roblox.com/docs/reference/engine/classes/Humanoid)s have
[HumanoidDescription](https://create.roblox.com/docs/reference/engine/classes/HumanoidDescription)s applied with the following ProportionScale values
(from left-to-right): 0, 0.5, 1.0, 0.0. Each have a BodyTypeScale of 1.0,
except for the right which has 0.0. Also visible are 6 stacked 1x1x1 cube
parts for reference. The table below lists the BodyTypeScale and
ProportionScale values for each figure in the image.

| Value           | 1st | 2nd | 3rd | Control |
| --------------- | --- | --- | --- | ------- |
| BodyTypeScale   | 1.0 | 1.0 | 1.0 | 0.0     |
| ProportionScale | 0.0 | 0.5 | 1.0 | 0.0     |


See also:

- [HumanoidDescription System](/avatar/characters/character-customization#humanoiddescription),
  for more information on [HumanoidDescription](https://create.roblox.com/docs/reference/engine/classes/HumanoidDescription).
- [BodyTypeScale](https://create.roblox.com/docs/reference/engine/classes/HumanoidDescription#BodyTypeScale), which also affects
  rig proportions
- [WidthScale](https://create.roblox.com/docs/reference/engine/classes/HumanoidDescription#HeightScale),
  [HeightScale](https://create.roblox.com/docs/reference/engine/classes/HumanoidDescription#DepthScale) and
  [DepthScale](https://create.roblox.com/docs/reference/engine/classes/HumanoidDescription#DepthScale), which provide finer control
  over the dimensions of a rig
- [HeadScale](https://create.roblox.com/docs/reference/engine/classes/HumanoidDescription#HeadScale), which provides specific
  control over the scale of the rig's head