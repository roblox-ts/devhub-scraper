The Color property determines the color of all active particles over their
individual lifetimes. The color applies to the
[`ParticleEmitter.Texture`](https://create.roblox.com/docs/reference/engine/classes/ParticleEmitter#Texture) when rendering, and it uses the texture
alpha along with the [`ParticleEmitter.Transparency`](https://create.roblox.com/docs/reference/engine/classes/ParticleEmitter#Transparency). If a particle
has a [`ParticleEmitter.LightEmission`](https://create.roblox.com/docs/reference/engine/classes/ParticleEmitter#LightEmission) value that's greater than 0,
darker colors make particles appear more transparent.

Note that the default [`ParticleEmitter.Lifetime`](https://create.roblox.com/docs/reference/engine/classes/ParticleEmitter#Lifetime) is 5 to 10 seconds,
so some particles next to each other have small variations in color due to
the variations in individual particle lifetime.

A particle's present color is determined by linearly interpolating on this
ColorSequence using the particle's age and the particle's total lifetime.
For example, if a particle spawned 2 seconds ago and has a 4 second
lifetime, the color will be whatever is 50% of the way through the
`Datatype.ColorSequence`.

Changing this property applies changes to all particles present in the
system. This is because the color of a particle is determined using its
present lifetime and this ColorSequence (the ColorSequence when the
particle was emit is not stored on a per-particle basis).