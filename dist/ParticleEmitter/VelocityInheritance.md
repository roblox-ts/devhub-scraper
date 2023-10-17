The VelocityInheritance property determines how much of the parent part's
[`BasePart.Velocity`](https://create.roblox.com/docs/reference/engine/classes/BasePart#Velocity) is inherited by particles when they are emitted.
A value of 0 means that no velocity is inherited, and a value of 1 means
the particle will have the exact same speed as the parent
[`BasePart`](https://create.roblox.com/docs/reference/engine/classes/BasePart).

When used in conjunction with [`ParticleEmitter.Drag`](https://create.roblox.com/docs/reference/engine/classes/ParticleEmitter#Drag), a particle
emitter can make appear to be "shedding" particles from a moving part.