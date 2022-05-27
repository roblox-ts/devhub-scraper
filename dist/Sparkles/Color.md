The Color property determines the color of all the particles emit by a
[Sparkles](https://create.roblox.com/docs/reference/engine/classes/Sparkles) object (both existing and future particles). It behaves
similarly to [ParticleEmitter.Color](https://create.roblox.com/docs/reference/engine/classes/ParticleEmitter#Color), except that it is only one color and
not a [ColorSequence](https://developer.roblox.com/en-us/api-reference/datatype/ColorSequence). Sparkles have a natural color sequence
applied which is most apparent when this property is set to white;
sparkles very faintly animate between a subtle green and red. Below, you
can see two [Sparkles](https://create.roblox.com/docs/reference/engine/classes/Sparkles) objects with differing SparkleColor (the left is
default, the right is white).

![Two Sparkles objects with differing SparkleColor][1]

It should be noted that sparkles have a partial
[ParticleEmitter.LightEmission](https://create.roblox.com/docs/reference/engine/classes/ParticleEmitter#LightEmission) effect, so dark colors tend to render more
transparent and white colors look very bright.

[1]: https://prod.docsiteassets.roblox.com/assets/blt22f35a953a5b6687/Sparkles_SparkleColor.png

This property functions identically to [Sparkles.SparkleColor](https://create.roblox.com/docs/reference/engine/classes/Sparkles#SparkleColor).