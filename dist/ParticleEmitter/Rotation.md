The Rotation property determines the angle at which new particles are
emit. It is a [NumberRange](https://developer.roblox.com/en-us/api-reference/datatype/NumberRange) measured in degrees. Positive values
are in the clockwise direction. This property is often set to [0, 360] to
provide a completely random rotation to new particles.
[ParticleEmitter.RotSpeed](https://create.roblox.com/docs/reference/engine/classes/ParticleEmitter#RotSpeed) also influences the rotation of a particle over
its lifetime. Finally, this property is useful for correcting any
[ParticleEmitter.Texture](https://create.roblox.com/docs/reference/engine/classes/ParticleEmitter#Texture)s that aren't at the desired orientation.

Pictured below are two default ParticleEmitters, except that the right has
a Rotation of 22.5. Note how the particles on the left are straight up,
and the right are tilted slightly.

![Two default ParticleEmitters with varying Rotations][1]

Changes to this value only affect new particles; existing particles will
maintain the rotation at which they were originally emitted.

[1]: https://prod.docsiteassets.roblox.com/assets/bltb0b7b9f3f01688b2/ParticleEmitter_Rotation.png