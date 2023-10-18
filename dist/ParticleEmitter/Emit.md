The Emit method will cause the [`ParticleEmitter`](https://create.roblox.com/docs/reference/engine/classes/ParticleEmitter) to emit the given
number of particles similar to how [`ParticleEmitter.Rate`](https://create.roblox.com/docs/reference/engine/classes/ParticleEmitter#Rate) does on
[`ParticleEmitter.Enabled`](https://create.roblox.com/docs/reference/engine/classes/ParticleEmitter#Enabled) emitters. Be warned - this always emits
exactly the number of particles even if Roblox' graphics settings are
lower. Emitting too many particles can cause performance issues on
lower-end hardware.

To clear any emit particles, use [`ParticleEmitter:Clear()`](https://create.roblox.com/docs/reference/engine/classes/ParticleEmitter#Clear).