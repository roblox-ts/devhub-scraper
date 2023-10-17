The Speed property determines a random range of speeds a new particle can
have upon emission. It's measured in studs per second using a
`Datatype.NumberRange`. The velocity is chosen upon emission, and applies
in the [`ParticleEmitter.EmissionDirection`](https://create.roblox.com/docs/reference/engine/classes/ParticleEmitter#EmissionDirection). Negative speed values
cause particles to travel in reverse.

[`ParticleEmitter.VelocityInheritance`](https://create.roblox.com/docs/reference/engine/classes/ParticleEmitter#VelocityInheritance),
[`ParticleEmitter.Acceleration`](https://create.roblox.com/docs/reference/engine/classes/ParticleEmitter#Acceleration) and [`ParticleEmitter.Drag`](https://create.roblox.com/docs/reference/engine/classes/ParticleEmitter#Drag)
affect a particle's speed over its lifetime. Changing Speed doesn't affect
active particles, and they retain whatever speed they have already.