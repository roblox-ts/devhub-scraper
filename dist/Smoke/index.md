Smoke is one of several particle-emitting classes. Like other particle
emitters of its kind, Smoke objects emit particles when parented to a
[BasePart](https://create.roblox.com/docs/reference/engine/classes/BasePart) (such as a [Part](https://create.roblox.com/docs/reference/engine/classes/Part)) or an [Attachment](https://create.roblox.com/docs/reference/engine/classes/Attachment) within such a [BasePart](https://create.roblox.com/docs/reference/engine/classes/BasePart).
Compared to the [ParticleEmitter](https://create.roblox.com/docs/reference/engine/classes/ParticleEmitter) class, Smoke lacks many different
customization properties and special methods, such as
[ParticleEmitter.Lifetime](https://create.roblox.com/docs/reference/engine/classes/ParticleEmitter#Lifetime) or [ParticleEmitter:Emit](https://create.roblox.com/docs/reference/engine/classes/ParticleEmitter#Emit). It is useful to create a
quick special effect in a pinch; for more detailed work it is preferable to
use a [ParticleEmitter](https://create.roblox.com/docs/reference/engine/classes/ParticleEmitter) instead.

![Smoke rising from the part to which it was parented][1]

When [Smoke.Enabled](https://create.roblox.com/docs/reference/engine/classes/Smoke#Enabled) is toggled off, particles emit by this object will
continue to render until their lifetime expires. When a Smoke object's
[Instance.Parent](https://create.roblox.com/docs/reference/engine/classes/Instance#Parent) is set to nil (and/or [Instance:Destroy](https://create.roblox.com/docs/reference/engine/classes/Instance#Destroy)ed), all particles
will instantly disappear. If this effect is not desired, try hiding the parent
object at a far away position, then removing the Smoke after a few seconds
using [Debris](https://create.roblox.com/docs/reference/engine/classes/Debris) to give the last particles a chance to expire. This object does
not have a [ParticleEmitter:Clear](https://create.roblox.com/docs/reference/engine/classes/ParticleEmitter#Clear) method, but it is possible to set the
[Instance.Parent](https://create.roblox.com/docs/reference/engine/classes/Instance#Parent) to nil and back to the exact same object for the same
effect.

Smoke particles are only emit from the center of [BasePart](https://create.roblox.com/docs/reference/engine/classes/BasePart) to which they are
parented. Parenting a Smoke object to an [Attachment](https://create.roblox.com/docs/reference/engine/classes/Attachment) instead allows
customization of the particles' start position.

[1]: https://prod.docsiteassets.roblox.com/assets/blt3634602492a8e3eb/Smoke.png