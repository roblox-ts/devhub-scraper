![undefined](https://prod.docsiteassets.roblox.com/assets/legacy/DepthScale.jpg)

**DepthScale** determines by what factor the height (back-to-front
distance) of a [`Humanoid`](https://create.roblox.com/docs/reference/engine/classes/Humanoid) is scaled, as well as all accessories not
attached to its head. When the description is
[`applied`](https://create.roblox.com/docs/reference/engine/classes/Humanoid#ApplyDescription) to a Humanoid, this value maps
to a "BodyDepthScale" [`NumberValue`](https://create.roblox.com/docs/reference/engine/classes/NumberValue) within the Humanoid.

In the image, three R15 figures whose [`Humanoid`](https://create.roblox.com/docs/reference/engine/classes/Humanoid)s have
[`HumanoidDescription`](https://create.roblox.com/docs/reference/engine/classes/HumanoidDescription)s applied with the following DepthScale values
(from left-to-right): 0.25, 1.0, 2.0.

See also:

- [HumanoidDescription System](https://create.roblox.com/docs/characters/appearance#humanoiddescription),
for more information on [`HumanoidDescription`](https://create.roblox.com/docs/reference/engine/classes/HumanoidDescription).
- [`BodyTypeScale`](https://create.roblox.com/docs/reference/engine/classes/HumanoidDescription#BodyTypeScale) and
[`ProportionScale`](https://create.roblox.com/docs/reference/engine/classes/HumanoidDescription#ProportionScale), which can
provide more realistic rig proportions
- [`WidthScale`](https://create.roblox.com/docs/reference/engine/classes/HumanoidDescription#HeightScale) and
[`HeightScale`](https://create.roblox.com/docs/reference/engine/classes/HumanoidDescription#DepthScale)