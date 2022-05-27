Determines whether or not the [ForceField](https://create.roblox.com/docs/reference/engine/classes/ForceField)'s particle effect is visible.

When is set to true, a particle effect is created, a number of rules
determine where this effect will be emitted from.

When parented to a [Model](https://create.roblox.com/docs/reference/engine/classes/Model), if the model includes a [Humanoid](https://create.roblox.com/docs/reference/engine/classes/Humanoid) named
“Humanoiod” with [Humanoid.RigType](https://create.roblox.com/docs/reference/engine/classes/Humanoid#RigType) set to R15, the effect will be emitted
from the part named “UpperTorso”. Otherwise, the effect will be emitted
from the part named “Torso”. The part must have the same parent as the
ForceField, if it does not exist then the effect is emitted at 0, 0, 0.

When parented to a [BasePart](https://create.roblox.com/docs/reference/engine/classes/BasePart) the effect will be emitted from the part's
[BasePart.Position](https://create.roblox.com/docs/reference/engine/classes/BasePart#Position).

One use for this property is replacing the default particle effect with a
custom effect using [ParticleEmitter](https://create.roblox.com/docs/reference/engine/classes/ParticleEmitter)s.