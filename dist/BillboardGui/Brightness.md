**Brightness** determines the factor by which the GUI's emitted light is scaled. By default, this property is 1 and can be set to any number on the range \[0, 1000\].

By modifying this property, the apparent brightness of a GUI can be better matched to its environment. For instance, a video billboard like those found in Times Square can be made brighter to be clearly visible on a bright day.

This property won't produce any effect in the following scenarios wherein the GUI does not emit light.:

*   When [AlwaysOnTop](https://developer.roblox.com/en-us/api-reference/property/BillboardGui/AlwaysOnTop) is true, the color of each pixel is the color shown on-screen.
*   When [LightInfluence](https://developer.roblox.com/en-us/api-reference/property/BillboardGui/LightInfluence) is 1, all light from the GUI is reflected from the environment instead of being emit.