![](https://developer.roblox.com/assets/blt4f4d8f6788a67841/BodyTypeScale.jpg)

**BodyTypeScale** determines by which the shape of a Humanoid rig is interpolated from the standard R15 body shape (0) to a taller and more slender/realistic body type (1). Values outside of the \[0-1\] range are clamped. When the description is [applied](https://developer.roblox.com/en-us/api-reference/function/Humanoid/ApplyDescription) to a Humanoid, this value maps to a “BodyTypeScales” [NumberValue](https://developer.roblox.com/en-us/api-reference/class/NumberValue) within the Humanoid.

When the value of this property is 0, the [ProportionScale](https://developer.roblox.com/en-us/api-reference/property/HumanoidDescription/ProportionScale) property does not have any effect.

In the image, three R15 figures whose [Humanoid](https://developer.roblox.com/en-us/api-reference/class/Humanoid)s have [HumanoidDescription](https://developer.roblox.com/en-us/api-reference/class/HumanoidDescription)s applied with the following BodyTypeScales values (from left-to-right): 0, 0.5, 1.0. Also visible are 6 stacked 1x1x1 cube parts for reference.

See also
--------

*   `articles/HumanoidDescription System`, for more information on HumanoidDescriptions
*   [ProportionScale](https://developer.roblox.com/en-us/api-reference/property/HumanoidDescription/ProportionScale), which also affects rig proportions when this property is non-zero
*   [WidthScale](https://developer.roblox.com/en-us/api-reference/property/HumanoidDescription/HeightScale), [HeightScale](https://developer.roblox.com/en-us/api-reference/property/HumanoidDescription/DepthScale) and [DepthScale](https://developer.roblox.com/en-us/api-reference/property/HumanoidDescription/DepthScale), which provide finer control over the dimensions of a rig
*   [HeadScale](https://developer.roblox.com/en-us/api-reference/property/HumanoidDescription/HeadScale), which provides specific control over the scale of the rig's head