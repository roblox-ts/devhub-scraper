HeadScale is the scale of the user's head when using VR.

The unit scale of Roblox, from the user's perspective in VR, is defined as follows:

_unitScale = HeadScale (in studs) / Feet ^ 2_

This means the larger the HeadScale value, the smaller the world will look from the user's perspective when using VR devices.

When not using VR, this property has no effect.

This property should not be confused with [Humanoid](https://developer.roblox.com/en-us/api-reference/class/Humanoid) HeadScale, which is a [NumberValue](https://developer.roblox.com/en-us/api-reference/class/NumberValue) parented to a [Humanoid](https://developer.roblox.com/en-us/api-reference/class/Humanoid) to control its scaling.

See also
--------

The following are also useful when developing for VR:

*   [Camera.HeadLocked](https://developer.roblox.com/en-us/api-reference/property/Camera/HeadLocked)
*   [Camera:GetRenderCFrame](https://developer.roblox.com/en-us/api-reference/function/Camera/GetRenderCFrame)