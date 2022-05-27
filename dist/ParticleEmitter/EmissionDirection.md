The EmissionDirection property determines the face ([NormalId](https://developer.roblox.com/en-us/api-reference/enum/NormalId)) of
the parent object towards which particles will be emit. By default, this
is the top (+Y) direction. A negative [ParticleEmitter.Speed](https://create.roblox.com/docs/reference/engine/classes/ParticleEmitter#Speed) will emit in
the opposite direction. [ParticleEmitter.SpreadAngle](https://create.roblox.com/docs/reference/engine/classes/ParticleEmitter#SpreadAngle) will further vary
the emission direction. If a [ParticleEmitter](https://create.roblox.com/docs/reference/engine/classes/ParticleEmitter) is added to an
[Attachment](https://create.roblox.com/docs/reference/engine/classes/Attachment), which has a direction, the the Attachment itself can be
rotated ([Attachment.Orientation](https://create.roblox.com/docs/reference/engine/classes/Attachment#Orientation)) instead of using this property. Below
are pictured two ParticleEmitters which are otherwise the same, except the
left has an EmissionDirection of Top (+Y, default) and the right uses
Front (-Z).

![Two identical ParticleEmitters except with differing EmissionDirection (left is Top, right is Front)][1]

[1]: https://prod.docsiteassets.roblox.com/assets/blt529991a1b0fa24f4/ParticleEmitter_EmissionDirection.png