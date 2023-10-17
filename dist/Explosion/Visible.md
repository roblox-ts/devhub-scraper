This property determines whether or not the visual effect of an
[`Explosion`](https://create.roblox.com/docs/reference/engine/classes/Explosion) is shown or not.

When Visible is set to false, the explosion will still affect
[`BasePart`](https://create.roblox.com/docs/reference/engine/classes/BasePart)s in its [`Explosion.BlastRadius`](https://create.roblox.com/docs/reference/engine/classes/Explosion#BlastRadius), the only
difference is it will not be seen.

One use for this property would be for a developer to make their own
custom explosion effects using a [`ParticleEmitter`](https://create.roblox.com/docs/reference/engine/classes/ParticleEmitter), while retaining
the default [`Explosion`](https://create.roblox.com/docs/reference/engine/classes/Explosion) functionality.