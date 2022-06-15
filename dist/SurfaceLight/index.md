A SurfaceLight is a light source that emits illumination of a specified [Light.Color](https://developer.roblox.com/en-us/api-reference/property/Light/Color) and [Light.Brightness](https://developer.roblox.com/en-us/api-reference/property/Light/Brightness) from a [SurfaceLight.Face](https://developer.roblox.com/en-us/api-reference/property/SurfaceLight/Face) for a specified [SurfaceLight.Range](https://developer.roblox.com/en-us/api-reference/property/SurfaceLight/Range).

In order for a SurfaceLight to provide illumination, it must be the direct child of a [BasePart](https://developer.roblox.com/en-us/api-reference/class/BasePart) or [Attachment](https://developer.roblox.com/en-us/api-reference/class/Attachment) (the part or attachment itself must be a descendant of the Workspace). If a SurfaceLight is parented to a part, then the light will emanate from the part's selected face(s). If parented to an attachment SurfaceLight is equivalent to a [SpotLight](https://developer.roblox.com/en-us/api-reference/class/SpotLight).  
  

For more light types, please see the **see also** section.

See Also
--------

*   [PointLight](https://developer.roblox.com/en-us/api-reference/class/PointLight)
*   [SpotLight](https://developer.roblox.com/en-us/api-reference/class/SpotLight)