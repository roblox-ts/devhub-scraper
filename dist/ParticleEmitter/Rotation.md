The Rotation property determines the range of rotations in degrees for
newly emitted particles. It is a `Datatype.NumberRange` measured in
degrees. Positive values are in the clockwise direction. This property is
often set to [0, 360] to provide a completely random rotation to new
particles. [`ParticleEmitter.RotSpeed`](https://create.roblox.com/docs/reference/engine/classes/ParticleEmitter#RotSpeed) also influences the rotation
of a particle over its lifetime. This property is useful for correcting
any [`ParticleEmitter.Texture`](https://create.roblox.com/docs/reference/engine/classes/ParticleEmitter#Texture) that isn't at the desired orientation.

Changes to this value only affect new particles; existing particles
maintain the rotation at which they were originally emitted.