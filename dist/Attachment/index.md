An [`Attachment`](https://create.roblox.com/docs/reference/engine/classes/Attachment) defines a point and orientation relative to a parent
[`BasePart`](https://create.roblox.com/docs/reference/engine/classes/BasePart), [`Bone`](https://create.roblox.com/docs/reference/engine/classes/Bone), or another [`Attachment`](https://create.roblox.com/docs/reference/engine/classes/Attachment). The offset is
stored in the [`CFrame`](https://create.roblox.com/docs/reference/engine/classes/Attachment#CFrame) property. The offset can also
be set through other properties, such as
[`WorldCFrame`](https://create.roblox.com/docs/reference/engine/classes/Attachment#WorldCFrame).

Attachments are used by several kinds of [`Constraints`](https://create.roblox.com/docs/reference/engine/classes/Constraint) and
are also valid alternatives to [`BasePart`](https://create.roblox.com/docs/reference/engine/classes/BasePart) as a parent for objects such
as:

- [`ParticleEmitters`](https://create.roblox.com/docs/reference/engine/classes/ParticleEmitter) which will emit particles from the
attachment's specific position/orientation instead of the [`BasePart`](https://create.roblox.com/docs/reference/engine/classes/BasePart)
bounds.
- Light-emitting objects like [`PointLight`](https://create.roblox.com/docs/reference/engine/classes/PointLight) and [`SpotLight`](https://create.roblox.com/docs/reference/engine/classes/SpotLight) which
will shine from the attachment's position/orientation instead of the
[`BasePart`](https://create.roblox.com/docs/reference/engine/classes/BasePart) center.
- [`Sound`](https://create.roblox.com/docs/reference/engine/classes/Sound) which will use the attachment's position as the sound's focal
point, instead of the [`BasePart`](https://create.roblox.com/docs/reference/engine/classes/BasePart) center.