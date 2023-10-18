A **ParticleEmitter** is a special object that emits customizable 2D billboard
particles into the world. To emit and render particles, it must be parented to
a [`BasePart`](https://create.roblox.com/docs/reference/engine/classes/BasePart) or an [`Attachment`](https://create.roblox.com/docs/reference/engine/classes/Attachment) within such a part. When parented
to a [`BasePart`](https://create.roblox.com/docs/reference/engine/classes/BasePart), particles spawn randomly within the part's **bounding
box** or [shape](https://create.roblox.com/docs/effects/particle-emitters#shape); when parented
to an [`Attachment`](https://create.roblox.com/docs/reference/engine/classes/Attachment), particles spawn from the attachment's position.

Particles emit automatically when the emitter is
[`Enabled`](https://create.roblox.com/docs/reference/engine/classes/ParticleEmitter#Enabled) with a non-zero
[`Rate`](https://create.roblox.com/docs/reference/engine/classes/ParticleEmitter#Rate), or manually when the
[`Emit`](https://create.roblox.com/docs/reference/engine/classes/ParticleEmitter#Emit) method is called. With a non-zero
[`Speed`](https://create.roblox.com/docs/reference/engine/classes/ParticleEmitter#Speed), particles are set in motion outwards
and/or inwards, depending on the [`ShapeInOut`](https://create.roblox.com/docs/reference/engine/classes/ParticleEmitter#ShapeInOut)
property.

By default, particles face the camera, but the
[`Orientation`](https://create.roblox.com/docs/reference/engine/classes/ParticleEmitter#Orientation) can be modified to respect the
particle velocity instead.

During the [`Lifetime`](https://create.roblox.com/docs/reference/engine/classes/ParticleEmitter#Lifetime) of the particles, they
can change appearance according to the [`Color`](https://create.roblox.com/docs/reference/engine/classes/ParticleEmitter#Color) and
[`Size`](https://create.roblox.com/docs/reference/engine/classes/ParticleEmitter#Size). Their motion can change over time according
to the [`Drag`](https://create.roblox.com/docs/reference/engine/classes/ParticleEmitter#Drag) and
[`Acceleration`](https://create.roblox.com/docs/reference/engine/classes/ParticleEmitter#Acceleration) properties, and they can
also move as their parent moves when they are
[`LockedToPart`](https://create.roblox.com/docs/reference/engine/classes/ParticleEmitter#LockedToPart) or have a non-zero
[`VelocityInheritance`](https://create.roblox.com/docs/reference/engine/classes/ParticleEmitter#VelocityInheritance).

Roblox provides several pre-made particle effect objects of [`Fire`](https://create.roblox.com/docs/reference/engine/classes/Fire),
[`Smoke`](https://create.roblox.com/docs/reference/engine/classes/Smoke) and [`Sparkles`](https://create.roblox.com/docs/reference/engine/classes/Sparkles). They behave similarly to a
**ParticleEmitter** but lack the control methods of
[`Emit`](https://create.roblox.com/docs/reference/engine/classes/ParticleEmitter#Emit) and [`Clear`](https://create.roblox.com/docs/reference/engine/classes/ParticleEmitter#Clear).
An [`Explosion`](https://create.roblox.com/docs/reference/engine/classes/Explosion) also creates particles, but provides minimal control with
regards to how the effect looks.

To learn more about creating and customizing particle emitters, see
[Particle Emitters](https://create.roblox.com/docs/effects/particle-emitters).