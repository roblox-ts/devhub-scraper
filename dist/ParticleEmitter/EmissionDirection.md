The EmissionDirection property determines the face (`Enum.NormalId`) of
the parent object that particles emit from. By default, this is the top
(+Y) direction. A negative [`ParticleEmitter.Speed`](https://create.roblox.com/docs/reference/engine/classes/ParticleEmitter#Speed) means particles
emit in the opposite direction. [`ParticleEmitter.SpreadAngle`](https://create.roblox.com/docs/reference/engine/classes/ParticleEmitter#SpreadAngle)
further varies the emission direction. If you add a
[`ParticleEmitter`](https://create.roblox.com/docs/reference/engine/classes/ParticleEmitter) to an [`Attachment`](https://create.roblox.com/docs/reference/engine/classes/Attachment), which has a direction,
you can rotate the Attachment itself ([`Attachment.Orientation`](https://create.roblox.com/docs/reference/engine/classes/Attachment#Orientation))
instead of using this property.