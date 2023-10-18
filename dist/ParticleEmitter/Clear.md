The Clear method instantly clears any existing particles that have been
emitted by the [`ParticleEmitter`](https://create.roblox.com/docs/reference/engine/classes/ParticleEmitter) through its natural emission
(nonzero [`ParticleEmitter.Rate`](https://create.roblox.com/docs/reference/engine/classes/ParticleEmitter#Rate) on an
[`ParticleEmitter.Enabled`](https://create.roblox.com/docs/reference/engine/classes/ParticleEmitter#Enabled) emitter) or via
[`ParticleEmitter:Emit()`](https://create.roblox.com/docs/reference/engine/classes/ParticleEmitter#Emit). It's not possible to clear individual
particles, so all particles clear at once.

Sometimes it is desirable to clear particles before teleporting a
character so that there are no lingering effects that might follow due to
[`ParticleEmitter.LockedToPart`](https://create.roblox.com/docs/reference/engine/classes/ParticleEmitter#LockedToPart).