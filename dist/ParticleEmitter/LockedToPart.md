The LockedToPart property determines if particles will "stick" to the
emission source (the [Attachment](https://create.roblox.com/docs/reference/engine/classes/Attachment) or [BasePart](https://create.roblox.com/docs/reference/engine/classes/BasePart) to which the
[ParticleEmitter](https://create.roblox.com/docs/reference/engine/classes/ParticleEmitter) is parented).

Below is an animation of two [Parts](https://create.roblox.com/docs/reference/engine/classes/Part) being moved simultaneously in
Studio. Inside each is a default [ParticleEmitter](https://create.roblox.com/docs/reference/engine/classes/ParticleEmitter); the background/left
emitter has LockedToPart enabled so the column of particles moves as the
part is moved. Contrast with the foreground/right emitter particles which
stay in their world position.
![Moving two parts with default ParticleEmitters, the background emitter has LockedToPart enabled][1]

Also consider using the [ParticleEmitter.VelocityInheritance](https://create.roblox.com/docs/reference/engine/classes/ParticleEmitter#VelocityInheritance) property set
to 1, which may be more appropriate for some effects.

[1]: https://prod.docsiteassets.roblox.com/assets/bltdf5045209fff8b32/ParticleEmitter_LockedToPart.gif