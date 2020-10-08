This property determines how the [Explosion](https://developer.roblox.com/en-us/api-reference/class/Explosion) will interact with [Terrain](https://developer.roblox.com/en-us/api-reference/class/Terrain). It is an Enum.ExplosionType value and can be set to one of three options.

*   **NoCraters** - Explosions will not damage Terrain
*   **Craters** - Explosions will create craters in Terrain
*   **CratersAndDebris** - Redundant, behaves the same as Craters

If ExplosionType is set to create craters in [Terrain](https://developer.roblox.com/en-us/api-reference/class/Terrain), the radius of the crater will be roughly equal to the [Explosion.BlastRadius](https://developer.roblox.com/en-us/api-reference/property/Explosion/BlastRadius). Craters are created in all [Terrain](https://developer.roblox.com/en-us/api-reference/class/Terrain) materials other than water. The size of the crater is not influenced by the material, although some materials create rougher edges than others.