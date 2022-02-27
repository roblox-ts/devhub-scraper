Determines whether the BillboardGui will render over top of 3D content, or  
be occluded by it.

When set to false, the BillboardGui will render like other 3D content, and  
will be occluded by other 3D objects.

When set to true, it always renders on top of 3D content, and the  
appearance changes significantly:

*   Colors match how they appear inside a [ScreenGui](https://developer.roblox.com/en-us/api-reference/class/ScreenGui).
*   Text may appear sharper on high DPI devices.
*   [BillboardGui.LightInfluence](https://developer.roblox.com/en-us/api-reference/property/BillboardGui/LightInfluence) is treated as though it was 0.
*   [BillboardGui.Brightness](https://developer.roblox.com/en-us/api-reference/property/BillboardGui/Brightness) has no effect.