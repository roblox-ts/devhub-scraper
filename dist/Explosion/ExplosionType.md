This property determines how the [Explosion](https://create.roblox.com/docs/reference/engine/classes/Explosion) will interact with [Terrain](https://create.roblox.com/docs/reference/engine/classes/Terrain).
It is an Enum.ExplosionType value and can be set to one of three options.

- **NoCraters** - Explosions will not damage Terrain
- **Craters** - Explosions will create craters in Terrain
- **CratersAndDebris** - Redundant, behaves the same as Craters

If ExplosionType is set to create craters in [Terrain](https://create.roblox.com/docs/reference/engine/classes/Terrain), the radius of the
crater will be roughly equal to the [Explosion.BlastRadius](https://create.roblox.com/docs/reference/engine/classes/Explosion#BlastRadius). Craters are
created in all [Terrain](https://create.roblox.com/docs/reference/engine/classes/Terrain) materials other than water. The size of the
crater is not influenced by the material, although some materials create
rougher edges than others.