The RotSpeed property determines a random range of angular speeds for
newly emitted particles. A random angular speed is chosen upon emission,
so changing this property doesn't affect already active particles. This
property, along with [`ParticleEmitter.Rotation`](https://create.roblox.com/docs/reference/engine/classes/ParticleEmitter#Rotation), affect the angle of
the rendered particle image. This property is a [`NumberRange`](https://create.roblox.com/docs/reference/engine/datatypes/NumberRange)
measured in degrees per second.

Particles with very high angular speeds can appear to rotate slower or not
at all - this is because the angle of rotation is synchronized with the
software render speed. In other words, if the particle is rotating at
exactly 360 degrees every frame, there will be no apparent change in
rotation.