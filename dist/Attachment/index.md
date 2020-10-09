**Attachment** defines a point and orientation relative to a parent [BasePart](https://developer.roblox.com/en-us/api-reference/class/BasePart). The offset is stored in the [CFrame](https://developer.roblox.com/en-us/api-reference/property/Attachment/CFrame) property. The offset can also be set through other properties, such as [WorldCFrame](https://developer.roblox.com/en-us/api-reference/property/Attachment/WorldCFrame).

Attachments are used by several kinds of [Constraint](https://developer.roblox.com/en-us/api-reference/class/Constraint) and are also valid parents for many objects that are otherwise parented directly to a [BasePart](https://developer.roblox.com/en-us/api-reference/class/BasePart), such as:

*   Particle-emitting objects like [ParticleEmitter](https://developer.roblox.com/en-us/api-reference/class/ParticleEmitter), [Fire](https://developer.roblox.com/en-us/api-reference/class/Fire), etc, emit from the attachment
*   Light-emitting objects like [PointLight](https://developer.roblox.com/en-us/api-reference/class/PointLight) and [SpotLight](https://developer.roblox.com/en-us/api-reference/class/SpotLight) shine from the attachment
*   [Sound](https://developer.roblox.com/en-us/api-reference/class/Sound) will use the attachment as the focal point of the sound