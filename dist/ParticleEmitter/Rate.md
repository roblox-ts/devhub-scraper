The Rate property determines how many particles are
[`ParticleEmitter:Emit()`](https://create.roblox.com/docs/reference/engine/classes/ParticleEmitter#Emit) emitted per second while the
[`ParticleEmitter`](https://create.roblox.com/docs/reference/engine/classes/ParticleEmitter) is [`ParticleEmitter.Enabled`](https://create.roblox.com/docs/reference/engine/classes/ParticleEmitter#Enabled). It's the
inverse of frequency - a Rate of 5 means that a particle will emit every
`1/5 = 0.2` seconds. When changed, this property has no affect on any
active particles.

It's important to pick a sensible [`ParticleEmitter.Lifetime`](https://create.roblox.com/docs/reference/engine/classes/ParticleEmitter#Lifetime) and
Rate so that you don't have too many particles being rendered at once.
Long lifetimes and high emission rates are a quick way to cause
performance issues. If you need many particles, pick a balance of lifetime
and rate. To instantly remove any presently emit particles (perhaps ones
with absurdly long lifetimes), you can call
[`ParticleEmitter:Clear()`](https://create.roblox.com/docs/reference/engine/classes/ParticleEmitter#Clear).