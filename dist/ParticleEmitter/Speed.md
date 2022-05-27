The Speed property determines the random range of velocities that newly
emit particles may have. It is measured in studs per second using a
[NumberRange](https://developer.roblox.com/en-us/api-reference/datatype/NumberRange). The velocity is chosen upon emission, and is
applied in the [ParticleEmitter.EmissionDirection](https://create.roblox.com/docs/reference/engine/classes/ParticleEmitter#EmissionDirection). Negative speed values
will cause particles to travel in reverse.

Below is an animation of two default [ParticleEmitter](https://create.roblox.com/docs/reference/engine/classes/ParticleEmitter)s; the left has the
default Speed of 5. The right one has the Speed range set to [20, 20], so
its particles emit at a constant speed of 20.
![Two default ParticleEmitters, the right has a speed of 20.][1]

[ParticleEmitter.VelocityInheritance](https://create.roblox.com/docs/reference/engine/classes/ParticleEmitter#VelocityInheritance), [ParticleEmitter.Acceleration](https://create.roblox.com/docs/reference/engine/classes/ParticleEmitter#Acceleration) and
[ParticleEmitter.Drag](https://create.roblox.com/docs/reference/engine/classes/ParticleEmitter#Drag) will affect a particle's speed over its lifetime.
Changing Speed will not affect already existing particles - they will
retain whatever speed they have already.

[1]: https://prod.docsiteassets.roblox.com/assets/blte13fc189c250bd2b/ParticleEmitter_Speed.gif