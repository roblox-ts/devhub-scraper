This property determines whether or not the visual effect of an [Explosion](https://developer.roblox.com/en-us/api-reference/class/Explosion) is shown or not.

When Visible is set to false, the explosion will still affect [BasePart](https://developer.roblox.com/en-us/api-reference/class/BasePart)s in its [Explosion.BlastRadius](https://developer.roblox.com/en-us/api-reference/property/Explosion/BlastRadius), the only difference is it will not be seen.

One use for this property would be for a developer to make their own custom explosion effects using a [ParticleEmitter](https://developer.roblox.com/en-us/api-reference/class/ParticleEmitter), whilst retaining the default [Explosion](https://developer.roblox.com/en-us/api-reference/class/Explosion) functionality.