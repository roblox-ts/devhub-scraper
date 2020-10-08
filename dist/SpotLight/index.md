A spotlight emits light of a specified [Color](https://developer.roblox.com/en-us/api-reference/property/Light/Color) and [Brightness](https://developer.roblox.com/en-us/api-reference/property/Light/Brightness) in the shape of a cone with a spherical base. This object is ideal for **directional** light sources like flashlights and headlights.

[Range](https://developer.roblox.com/en-us/api-reference/property/SpotLight/Range) controls the distance of illumination and [Angle](https://developer.roblox.com/en-us/api-reference/property/SpotLight/Angle) defines the angle of light emission from the cone's apex as illustrated below.

A spotlight must be a direct child of a [BasePart](https://developer.roblox.com/en-us/api-reference/class/BasePart) or [Attachment](https://developer.roblox.com/en-us/api-reference/class/Attachment) and will exhibit the following behavior:

*   When the spotlight is parented to a [BasePart](https://developer.roblox.com/en-us/api-reference/class/BasePart), the [SpotLight.Face](https://developer.roblox.com/en-us/api-reference/property/SpotLight/Face) property determines the face of the part from which light emanates.
*   Although [Attachments](https://developer.roblox.com/en-us/api-reference/class/Attachment) don't have faces, the [SpotLight.Face](https://developer.roblox.com/en-us/api-reference/property/SpotLight/Face) property determines the axis of the attachment from which light emanates; **\-Z** is front, **+X** is right, **+Y** is top, etc.

![](https://developer.roblox.com/assets/blt13afe21744db416b/LightingDiagram-SpotLight.jpg)

See Also
--------

*   [SurfaceLight](https://developer.roblox.com/en-us/api-reference/class/SurfaceLight)
*   [PointLight](https://developer.roblox.com/en-us/api-reference/class/PointLight)