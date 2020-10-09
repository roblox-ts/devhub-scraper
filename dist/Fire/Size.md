This property determines the size of the flame particles. It must be in the range of \[2, 30\]. Unlike [ParticleEmitter.Size](https://developer.roblox.com/en-us/api-reference/property/ParticleEmitter/Size), the actual size of the flames will not match 1-to-1 with the equivalent size in studs; it is somewhat smaller.

![Two torches - the left has Size = 5 and the right has Size = 10](https://developer.roblox.com/assets/blt087a73a0e5197acf/Fire_Size.png)

To make your environment more cohesive, try adding a [PointLight](https://developer.roblox.com/en-us/api-reference/class/PointLight) as a sibling to the [Fire](https://developer.roblox.com/en-us/api-reference/class/Fire) object. Set the `PointLight/Brightness` and [PointLight.Range](https://developer.roblox.com/en-us/api-reference/property/PointLight/Range) proportional to this property so that larger flames produce more light.