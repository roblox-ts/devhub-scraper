The Rate property determines how many particles are [ParticleEmitter:Emit](https://create.roblox.com/docs/reference/engine/classes/ParticleEmitter#Emit)
emit per second while the [ParticleEmitter](https://create.roblox.com/docs/reference/engine/classes/ParticleEmitter) is [ParticleEmitter.Enabled](https://create.roblox.com/docs/reference/engine/classes/ParticleEmitter#Enabled).
It is the inverse of frequency - a Rate of 5 means that a particle will be
emit every [1.5 = 0.2](https://create.roblox.com/docs/reference/engine/classes/1#5 = 0.2) seconds. When changed, this property will have no
affect on any already emit particles.

it is important to pick a sensible [ParticleEmitter.Lifetime](https://create.roblox.com/docs/reference/engine/classes/ParticleEmitter#Lifetime) and Rate so
that you don't have too many particles being rendered at once. Long
lifetimes and high emission rates are a quick way to cause performance
issues. If you need many particles, pick a balance of lifetime and rate.
To instantly remove any presently emit particles (perhaps ones with
absurdly long lifetimes), you can call [ParticleEmitter:Clear](https://create.roblox.com/docs/reference/engine/classes/ParticleEmitter#Clear).