![](https://developer.roblox.com/assets/bltfe95e570d9750c28/ProportionScale.jpg)

**ProportionScale** determines how wide (0) or narrow (1) a Humanoid rig. Values outside of the \[0-1\] range are clamped. When the description is [applied](https://developer.roblox.com/en-us/api-reference/function/Humanoid/ApplyDescription) to a Humanoid, this value maps to a “BodyProportionScale” [NumberValue](https://developer.roblox.com/en-us/api-reference/class/NumberValue) within the Humanoid.

When the value of [BodyTypeScale](https://developer.roblox.com/en-us/api-reference/property/HumanoidDescription/BodyTypeScale) is 0, this property does not have any effect.

In the image, four R15 figures are visible whose [Humanoid](https://developer.roblox.com/en-us/api-reference/class/Humanoid)s have [HumanoidDescription](https://developer.roblox.com/en-us/api-reference/class/HumanoidDescription)s applied with the following ProportionScale values (from left-to-right): 0, 0.5, 1.0, 0.0. Each have a BodyTypeScale of 1.0, except for the right which has 0.0. Also visible are 6 stacked 1x1x1 cube parts for reference. The table below lists the BodyTypeScale and ProportionScale values for each figure in the image.

Value

1st

2nd

3rd

Control

BodyTypeScale

1.0

1.0

1.0

0.0

ProportionScale

0.0

0.5

1.0

0.0

See also
--------

*   `articles/HumanoidDescription System`, for more information on HumanoidDescriptions
*   [BodyTypeScale](https://developer.roblox.com/en-us/api-reference/property/HumanoidDescription/BodyTypeScale), which also affects rig proportions
*   [WidthScale](https://developer.roblox.com/en-us/api-reference/property/HumanoidDescription/HeightScale), [HeightScale](https://developer.roblox.com/en-us/api-reference/property/HumanoidDescription/DepthScale) and [DepthScale](https://developer.roblox.com/en-us/api-reference/property/HumanoidDescription/DepthScale), which provide finer control over the dimensions of a rig
*   [HeadScale](https://developer.roblox.com/en-us/api-reference/property/HumanoidDescription/HeadScale), which provides specific control over the scale of the rig's head