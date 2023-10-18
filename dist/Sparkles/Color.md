The Color property determines the color of all the particles emit by a
[`Sparkles`](https://create.roblox.com/docs/reference/engine/classes/Sparkles) object (both existing and future particles). It behaves
similarly to [`ParticleEmitter.Color`](https://create.roblox.com/docs/reference/engine/classes/ParticleEmitter#Color), except that it is only one
color and not a [`ColorSequence`](https://create.roblox.com/docs/reference/engine/datatypes/ColorSequence). Sparkles have a natural color
sequence applied which is most apparent when this property is set to
white; sparkles very faintly animate between a subtle green and red.

It should be noted that sparkles have a partial
[`ParticleEmitter.LightEmission`](https://create.roblox.com/docs/reference/engine/classes/ParticleEmitter#LightEmission) effect, so dark colors tend to
render more transparent and white colors look very bright.

This property functions identically to [`Sparkles.SparkleColor`](https://create.roblox.com/docs/reference/engine/classes/Sparkles#SparkleColor).