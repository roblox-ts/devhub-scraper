The Enabled property determines whether a [ParticleEmitter](https://developer.roblox.com/en-us/api-reference/class/ParticleEmitter) should emit partciles according to its [ParticleEmitter.Rate](https://developer.roblox.com/en-us/api-reference/property/ParticleEmitter/Rate). Setting Enabled to false will halt further particles from spawning; any existing particles will remain until they expire. This property is useful when you have a pre-made particle effect that you want to remain disabled until you need it to emit particles.

If you want no particles to render, you should call [ParticleEmitter:Clear](https://developer.roblox.com/en-us/api-reference/function/ParticleEmitter/Clear) to clear any existing particles. You can use [ParticleEmitter:Emit](https://developer.roblox.com/en-us/api-reference/function/ParticleEmitter/Emit) on disabled [ParticleEmitter](https://developer.roblox.com/en-us/api-reference/class/ParticleEmitter)s and they will still emit and render particles.