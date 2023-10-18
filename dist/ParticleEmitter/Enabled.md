The Enabled property determines if particles emit from the emitter
according to its [`ParticleEmitter.Rate`](https://create.roblox.com/docs/reference/engine/classes/ParticleEmitter#Rate). Setting Enabled to false
stops further particles from spawning, and any existing particles remain
active until they expire. This property is useful when you have a pre-made
particle effect that you want to remain disabled until you need it to emit
particles.

If you want no particles to render, you should call
[`ParticleEmitter:Clear()`](https://create.roblox.com/docs/reference/engine/classes/ParticleEmitter#Clear) to clear any existing particles. You can
use [`ParticleEmitter:Emit()`](https://create.roblox.com/docs/reference/engine/classes/ParticleEmitter#Emit) on disabled [`ParticleEmitter`](https://create.roblox.com/docs/reference/engine/classes/ParticleEmitter)s
and they will still emit and render particles.