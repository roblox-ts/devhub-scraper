Opacity determines the opaqueness of the smoke particles. It must be in
the range [0, 1]. This property works **inversely** in comparison to a
part's [BasePart.Transparency](https://create.roblox.com/docs/reference/engine/classes/BasePart#Transparency) or ParticleEmitter's
[ParticleEmitter.Transparency](https://create.roblox.com/docs/reference/engine/classes/ParticleEmitter#Transparency): a value of 0 is completely invisible, 1 is
completely visible. Below, the left [Smoke](https://create.roblox.com/docs/reference/engine/classes/Smoke) effect has an Opacity of 0.25
(or, 25%), the center has the default 0.5 (50%), and the right has 1.0 (or
100%).

![Smoke with varying opacity levels][1]

It should be noted that the texture that Roblox uses for [Smoke](https://create.roblox.com/docs/reference/engine/classes/Smoke) particles
is partially transparent, so setting this property to 1 will still yield
transparency in rendered smoke.

[1]: https://prod.docsiteassets.roblox.com/assets/blt40432eff6f9ab4f2/Smoke_Opacity.png