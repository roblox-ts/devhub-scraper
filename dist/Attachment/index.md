[Attachment](https://create.roblox.com/docs/reference/engine/classes/Attachment) defines a point and orientation relative to a parent [BasePart](https://create.roblox.com/docs/reference/engine/classes/BasePart).
The offset is stored in the [CFrame](https://create.roblox.com/docs/reference/engine/classes/Attachment#CFrame) property. The offset
can also be set through other properties, such as
[WorldCFrame](https://create.roblox.com/docs/reference/engine/classes/Attachment#WorldCFrame).

Attachments are used by several kinds of [Constraint](https://create.roblox.com/docs/reference/engine/classes/Constraint) and are also valid
parents for many objects that are otherwise parented directly to a [BasePart](https://create.roblox.com/docs/reference/engine/classes/BasePart),
such as:

- Particle-emitting objects like [ParticleEmitter](https://create.roblox.com/docs/reference/engine/classes/ParticleEmitter), [Fire](https://create.roblox.com/docs/reference/engine/classes/Fire), etc, emit from the
  attachment
- Light-emitting objects like [PointLight](https://create.roblox.com/docs/reference/engine/classes/PointLight) and [SpotLight](https://create.roblox.com/docs/reference/engine/classes/SpotLight) shine from the
  attachment
- [Sound](https://create.roblox.com/docs/reference/engine/classes/Sound) will use the attachment as the focal point of the sound