The Size property of [Smoke](https://create.roblox.com/docs/reference/engine/classes/Smoke) determines the size of the newly emit smoke
particles. Unlike [Smoke.Color](https://create.roblox.com/docs/reference/engine/classes/Smoke#Color), this property will not change the size of
existing particles. It must be in the range [0.1, 100]. Unlike
[ParticleEmitter.Size](https://create.roblox.com/docs/reference/engine/classes/ParticleEmitter#Size), this property is only a number (not a
[NumberSequence](https://developer.roblox.com/en-us/api-reference/datatype/NumberSequence)). Also note also that the size of the particles
is not 1-to-1 with studs; in fact, the size of the smoke particle is more
than twice as large. At the largest size, smoke particles can render
larger than 200 studs wide!