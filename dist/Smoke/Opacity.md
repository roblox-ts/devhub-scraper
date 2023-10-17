Opacity determines the opaqueness of the smoke particles. It must be in
the range [0, 1]. This property works **inversely** in comparison to a
part's [`BasePart.Transparency`](https://create.roblox.com/docs/reference/engine/classes/BasePart#Transparency) or ParticleEmitter's
[`ParticleEmitter.Transparency`](https://create.roblox.com/docs/reference/engine/classes/ParticleEmitter#Transparency): a value of 0 is completely
invisible, 1 is completely visible.

The texture that Roblox uses for [`Smoke`](https://create.roblox.com/docs/reference/engine/classes/Smoke) particles is partially
transparent, so setting this property to 1 still yields transparency in
rendered smoke.