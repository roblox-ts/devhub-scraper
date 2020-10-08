Determines whether or not the [ForceField](https://developer.roblox.com/en-us/api-reference/class/ForceField)'s particle effect is visible.

When is set to true, a particle effect is created, a number of rules determine where this effect will be emitted from.

When parented to a [Model](https://developer.roblox.com/en-us/api-reference/class/Model), if the model includes a [Humanoid](https://developer.roblox.com/en-us/api-reference/class/Humanoid) named “Humanoiod” with [Humanoid.RigType](https://developer.roblox.com/en-us/api-reference/property/Humanoid/RigType) set to R15, the effect will be emitted from the part named “UpperTorso”. Otherwise, the effect will be emitted from the part named “Torso”. The part must have the same parent as the ForceField, if it does not exist then the effect is emitted at 0, 0, 0.

When parented to a [BasePart](https://developer.roblox.com/en-us/api-reference/class/BasePart) the effect will be emitted from the part's [BasePart.Position](https://developer.roblox.com/en-us/api-reference/property/BasePart/Position).

One use for this property is replacing the default particle effect with a custom effect using [ParticleEmitter](https://developer.roblox.com/en-us/api-reference/class/ParticleEmitter)s.