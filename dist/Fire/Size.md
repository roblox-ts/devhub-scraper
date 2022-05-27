This property determines the size of the flame particles. It must be in
the range of [2, 30]. Unlike [ParticleEmitter.Size](https://create.roblox.com/docs/reference/engine/classes/ParticleEmitter#Size), the actual size of
the flames will not match 1-to-1 with the equivalent size in studs; it is
somewhat smaller.

![Two torches - the left has Size = 5 and the right has Size = 10][1]

To make your environment more cohesive, try adding a [PointLight](https://create.roblox.com/docs/reference/engine/classes/PointLight) as a
sibling to the [Fire](https://create.roblox.com/docs/reference/engine/classes/Fire) object. Set the [PointLight.Brightness](https://create.roblox.com/docs/reference/engine/classes/PointLight#Brightness) and
[PointLight.Range](https://create.roblox.com/docs/reference/engine/classes/PointLight#Range) proportional to this property so that larger flames
produce more light.

[1]: https://prod.docsiteassets.roblox.com/assets/blt087a73a0e5197acf/Fire_Size.png