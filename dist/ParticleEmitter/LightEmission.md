The LightEmission property determines the blending of the
[`ParticleEmitter.Texture`](https://create.roblox.com/docs/reference/engine/classes/ParticleEmitter#Texture)'s colors with the colors behind them. It
should be set on the range [0, 1]. A value of 0 uses normal blending
modes, and a value of 1 will use additive blending. The value of the
additive blending is determined by this property. When changed, this
property instantly affects all particles owned by the emitter, both
current and future particles.

When set to 1, only additive blending is used. As such, choosing a
suitable [`ParticleEmitter.Texture`](https://create.roblox.com/docs/reference/engine/classes/ParticleEmitter#Texture) is necessary. Below is an example
texture that is suitable for such a ParticleEmitter.

This property should not be confused with
[`ParticleEmitter.LightInfluence`](https://create.roblox.com/docs/reference/engine/classes/ParticleEmitter#LightInfluence), which determines how particles are
affected by environment light. This property does not cause particles to
light the environment around them. To do that, consider using a
[`PointLight`](https://create.roblox.com/docs/reference/engine/classes/PointLight).