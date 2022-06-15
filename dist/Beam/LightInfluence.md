Determines the degree to which the [Beam](https://developer.roblox.com/en-us/api-reference/class/Beam) is influenced by the environment's lighting.

LightInfluence is clamped between 0 and 1. When LightInfluence is 0, the [Beam](https://developer.roblox.com/en-us/api-reference/class/Beam) will be unaffected by the environment's lighting. When LightInfluence is 1 however, it will be fully affected by lighting (as a [BasePart](https://developer.roblox.com/en-us/api-reference/class/BasePart) would be).

For an example of this, and a demonstration of how this property interacts with [Beam.LightEmission](https://developer.roblox.com/en-us/api-reference/property/Beam/LightEmission), please see the images below.

![enter image description here](https://developer.roblox.com/assets/blt58bbd58122916e57/BeamLight1.png)

![enter image description here](https://developer.roblox.com/assets/blt1d1d4b30144114c3/BeamLight2.png)