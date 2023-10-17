RiseVelocity behaves similarly to [`ParticleEmitter.Speed`](https://create.roblox.com/docs/reference/engine/classes/ParticleEmitter#Speed) and
[`Fire.Heat`](https://create.roblox.com/docs/reference/engine/classes/Fire#Heat): it determines how fast the smoke particles move during
their lifetime. It must be in the range [-25, 25]. Negative values will
cause particles to emit in the bottom (-Y) direction of the parent
[`BasePart`](https://create.roblox.com/docs/reference/engine/classes/BasePart).

When using a [`Smoke`](https://create.roblox.com/docs/reference/engine/classes/Smoke) effect to create fog, set this property to 0.
For large smoke effects, make the rise subtle (2 to 8). For chimneys and
smokestacks, higher values are appropriate.