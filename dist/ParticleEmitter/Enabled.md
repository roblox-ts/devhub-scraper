The Enabled property determines whether a [ParticleEmitter](https://create.roblox.com/docs/reference/engine/classes/ParticleEmitter) should emit
partciles according to its [ParticleEmitter.Rate](https://create.roblox.com/docs/reference/engine/classes/ParticleEmitter#Rate). Setting Enabled to
false will halt further particles from spawning; any existing particles
will remain until they expire. This property is useful when you have a
pre-made particle effect that you want to remain disabled until you need
it to emit particles.

If you want no particles to render, you should call
[ParticleEmitter:Clear](https://create.roblox.com/docs/reference/engine/classes/ParticleEmitter#Clear) to clear any existing particles. You can use
[ParticleEmitter:Emit](https://create.roblox.com/docs/reference/engine/classes/ParticleEmitter#Emit) on disabled [ParticleEmitter](https://create.roblox.com/docs/reference/engine/classes/ParticleEmitter)s and they will still
emit and render particles.