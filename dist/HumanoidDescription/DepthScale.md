![](https://developer.roblox.com/assets/blt8931663356afe1ab/DepthScale.jpg)

**DepthScale** determines by what factor the height (back-to-front distance) of a [Humanoid](https://developer.roblox.com/en-us/api-reference/class/Humanoid) is scaled, as well as all accessories not attached to its head. When the description is [applied](https://developer.roblox.com/en-us/api-reference/function/Humanoid/ApplyDescription) to a Humanoid, this value maps to a “BodyDepthScale” [NumberValue](https://developer.roblox.com/en-us/api-reference/class/NumberValue) within the Humanoid.

In the image, three R15 figures whose [Humanoid](https://developer.roblox.com/en-us/api-reference/class/Humanoid)s have [HumanoidDescription](https://developer.roblox.com/en-us/api-reference/class/HumanoidDescription)s applied with the following DepthScale values (from left-to-right): 0.25, 1.0, 2.0.

See also
--------

*   `articles/HumanoidDescription System`, for more information on HumanoidDescriptions
*   [BodyTypeScale](https://developer.roblox.com/en-us/api-reference/property/HumanoidDescription/BodyTypeScale) and [ProportionScale](https://developer.roblox.com/en-us/api-reference/property/HumanoidDescription/ProportionScale), which can provide more realistic rig proportions
*   [WidthScale](https://developer.roblox.com/en-us/api-reference/property/HumanoidDescription/HeightScale) and [HeightScale](https://developer.roblox.com/en-us/api-reference/property/HumanoidDescription/DepthScale)