Used to set the proportion of the [`Explosion.BlastRadius`](https://create.roblox.com/docs/reference/engine/classes/Explosion#BlastRadius), between 0
and 1, within which all joints will be destroyed. Anything outside of this
range will only have the [`Explosion`](https://create.roblox.com/docs/reference/engine/classes/Explosion) force applied to it.

For example, if [`Explosion.BlastRadius`](https://create.roblox.com/docs/reference/engine/classes/Explosion#BlastRadius) is set to 100 and
DestroyJointRadiusPercent is set to 0.5, any joints within a radius of 50
studs would be broken. Any joints between the ranges of 50 and 100 studs
wouldn't be destroyed, but the [`Explosion`](https://create.roblox.com/docs/reference/engine/classes/Explosion)'s force would still be
applied to the [`BasePart`](https://create.roblox.com/docs/reference/engine/classes/BasePart)s.

This property allows developers to make [`Explosion`](https://create.roblox.com/docs/reference/engine/classes/Explosion)s 'non-lethal' to
[`Humanoid`](https://create.roblox.com/docs/reference/engine/classes/Humanoid)s by setting DestroyJointRadiusPercent to 0. This means
the neck joint will not be broken when characters come into contact with
the [`Explosion`](https://create.roblox.com/docs/reference/engine/classes/Explosion).