A ParticleEmitter allows for the creation of [particle systems][1]. It is a
special effect object that emits customizable 2D billboard particles into the
world. On Roblox, a particle is a square 2D image, like a [BillboardGui](https://create.roblox.com/docs/reference/engine/classes/BillboardGui) or
[SurfaceGui](https://create.roblox.com/docs/reference/engine/classes/SurfaceGui) with an [ImageLabel](https://create.roblox.com/docs/reference/engine/classes/ImageLabel).

To emit and render particles, a ParticleEmitter must be parented to a
[BasePart](https://create.roblox.com/docs/reference/engine/classes/BasePart) (such as a [Part](https://create.roblox.com/docs/reference/engine/classes/Part)) or an [Attachment](https://create.roblox.com/docs/reference/engine/classes/Attachment) within such a part. Particles
are emit automatically when the emitter is [Enabled](https://create.roblox.com/docs/reference/engine/classes/ParticleEmitter#Enabled)
with a non-zero [Rate](https://create.roblox.com/docs/reference/engine/classes/ParticleEmitter#Rate), or manually when the
[Emit](https://create.roblox.com/docs/reference/engine/classes/ParticleEmitter#Emit) method is called. The starting positions of
particles are determined by the [Shape](https://create.roblox.com/docs/reference/engine/classes/ParticleEmitter#Shape) and
[ShapePartial](https://create.roblox.com/docs/reference/engine/classes/ParticleEmitter#ShapePartial) properties as well as the parent
[BasePart.Size](https://create.roblox.com/docs/reference/engine/classes/BasePart#Size). By default, particles spawn randomly in the **bounding box**
of the parent part, although this can be configured to be on a specific
surface by the emitter's [ShapeStyle](https://create.roblox.com/docs/reference/engine/classes/ParticleEmitter#ShapeStyle) and
[EmissionDirection](https://create.roblox.com/docs/reference/engine/classes/ParticleEmitter#EmissionDirection). With a non-zero
[Speed](https://create.roblox.com/docs/reference/engine/classes/ParticleEmitter#Speed), particles are set in motion outwards and/or
inwards, depending on the [ShapeInOut](https://create.roblox.com/docs/reference/engine/classes/ParticleEmitter#ShapeInOut) property.
The direction can be randomized with
[SpreadAngle](https://create.roblox.com/docs/reference/engine/classes/ParticleEmitter#SpreadAngle). By default, particles face the
camera, but the [Orientation](https://create.roblox.com/docs/reference/engine/classes/ParticleEmitter#Orientation) can be modified to
respect the particle velocity instead.

During the [Lifetime](https://create.roblox.com/docs/reference/engine/classes/ParticleEmitter#Lifetime) of the particles, they can
change appearance according to the [Color](https://create.roblox.com/docs/reference/engine/classes/ParticleEmitter#Color) and
[Size](https://create.roblox.com/docs/reference/engine/classes/ParticleEmitter#Size). Their motion can change over time according to
the [Drag](https://create.roblox.com/docs/reference/engine/classes/ParticleEmitter#Drag) and
[Acceleration](https://create.roblox.com/docs/reference/engine/classes/ParticleEmitter#Acceleration) properties, and they can also move
as their parent moves when they are
[LockedToPart](https://create.roblox.com/docs/reference/engine/classes/ParticleEmitter#LockedToPart) or have a non-zero
[VelocityInheritance](https://create.roblox.com/docs/reference/engine/classes/ParticleEmitter#VelocityInheritance).

Roblox provides several pre-made particle effect objects - [Fire](https://create.roblox.com/docs/reference/engine/classes/Fire), [Smoke](https://create.roblox.com/docs/reference/engine/classes/Smoke) and
[Sparkles](https://create.roblox.com/docs/reference/engine/classes/Sparkles). They behave similarly to a ParticleEmitter, but they are not as
customizable. They also lack the particle-controlling methods
([Emit](https://create.roblox.com/docs/reference/engine/classes/ParticleEmitter#Emit) and [Clear](https://create.roblox.com/docs/reference/engine/classes/ParticleEmitter#Clear)). An
[Explosion](https://create.roblox.com/docs/reference/engine/classes/Explosion) also creates particles, but provides little-to-no control with
regards to how the effect looks.

See also:

- To learn more about creating, using, and customizing particle emitters check
  out [this][2] article

[1]: https://en.wikipedia.org/wiki/Particle_system
[2]: /building-and-visuals/lighting-and-effects/particle-emitters