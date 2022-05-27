The Color property determines the color of all particles active in an
emitter's system. The color is applied to the [ParticleEmitter.Texture](https://create.roblox.com/docs/reference/engine/classes/ParticleEmitter#Texture)
when rendering, and uses the texture alpha along with the
[ParticleEmitter.Transparency](https://create.roblox.com/docs/reference/engine/classes/ParticleEmitter#Transparency). If a particle has a
[ParticleEmitter.LightEmission](https://create.roblox.com/docs/reference/engine/classes/ParticleEmitter#LightEmission) of greater than 0, darker colors will make
particles appear more transparent. Below, two default [ParticleEmitter](https://create.roblox.com/docs/reference/engine/classes/ParticleEmitter)
are pictured, except the right emitter uses a Color from yellow to cyan.

![Two default ParticleEmitters, except the right has a Color from Yellow to Cyan][1]

Note that the default [ParticleEmitter.Lifetime](https://create.roblox.com/docs/reference/engine/classes/ParticleEmitter#Lifetime) is 5 to 10 seconds, so
some particles next to each other have small variations in color due to
the variations in individual particle lifetime.

A particle's present color is determined by linearly interpolating on this
ColorSequence using the particle's age and the particle's total lifetime.
For example, if a particle spawned 2 seconds ago and has a 4 second
lifetime, the color will be whatever is 50% of the way through the
[ColorSequence](https://developer.roblox.com/en-us/api-reference/datatype/ColorSequence).

Changing this property applies changes to all particles present in the
system. This is because the color of a particle is determined using its
present lifetime and this ColorSequence (the ColorSequence when the
particle was emit is not stored on a per-particle basis).

[1]: https://prod.docsiteassets.roblox.com/assets/blt07a957ff7394b365/ParticleEmitter_Color.png