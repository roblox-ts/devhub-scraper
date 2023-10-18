Used to determine the amount of force applied to [`BasePart`](https://create.roblox.com/docs/reference/engine/classes/BasePart)s caught
in the [`Explosion.BlastRadius`](https://create.roblox.com/docs/reference/engine/classes/Explosion#BlastRadius).

Currently this level of force applied does not vary based on distance from
[`Explosion.Position`](https://create.roblox.com/docs/reference/engine/classes/Explosion#Position). Unanchored `BaseParts` will accelerate equally
away from the origin regardless of distance provided they are within the
blast radius.

The blast pressure determines the acceleration of parts due to an
explosion. It does not determine the degree to which joints are broken.
When [`Explosion.DestroyJointRadiusPercent`](https://create.roblox.com/docs/reference/engine/classes/Explosion#DestroyJointRadiusPercent) is equal to 1 all joints
between parts in the [`Explosion.BlastRadius`](https://create.roblox.com/docs/reference/engine/classes/Explosion#BlastRadius) will be destroyed
provided BlastPressure is greater than 0.

The BlastPressure also does not determine the amount of damage given to
[`Terrain`](https://create.roblox.com/docs/reference/engine/classes/Terrain). Provided BlastPressure is greater than 0 and
[`Explosion.ExplosionType`](https://create.roblox.com/docs/reference/engine/classes/Explosion#ExplosionType) isn't set to Enum.ExplosionType.NoCraters
the size of the crater created is determined exclusively by the
[`Explosion.BlastRadius`](https://create.roblox.com/docs/reference/engine/classes/Explosion#BlastRadius).

Setting BlastPressure to 0 eliminates the effect of the explosion and is
useful when developers want to program their own custom behavior for
explosions using the [`Explosion.Hit`](https://create.roblox.com/docs/reference/engine/classes/Explosion#Hit) event.