An Explosion applies force to `BaseParts|BasePart` within the explosion's
[`Explosion.BlastRadius`](https://create.roblox.com/docs/reference/engine/classes/Explosion#BlastRadius). This force breaks
[`JointInstances`](https://create.roblox.com/docs/reference/engine/classes/JointInstance) and
[`WeldConstraints`](https://create.roblox.com/docs/reference/engine/classes/WeldConstraint) between parts and kills
[`Humanoid`](https://create.roblox.com/docs/reference/engine/classes/Humanoid) characters not protected by a [`ForceField`](https://create.roblox.com/docs/reference/engine/classes/ForceField).
[`Constraints`](https://create.roblox.com/docs/reference/engine/classes/Constraint) will not be broken by an explosion.

If an explosion is instanced while the game is running, it will destroy itself
shortly afterwards, so they do not need to be cleaned up using the
[`Debris`](https://create.roblox.com/docs/reference/engine/classes/Debris) service.

**Explosion effects**

[`Humanoids`](https://create.roblox.com/docs/reference/engine/classes/Humanoid) are killed by explosions as they break the
character [`Model`](https://create.roblox.com/docs/reference/engine/classes/Model)'s neck joint. Parenting a [`ForceField`](https://create.roblox.com/docs/reference/engine/classes/ForceField) to a
model will protect all of its children from Explosions. This means that their
joints will not be broken and thus [`Humanoid`](https://create.roblox.com/docs/reference/engine/classes/Humanoid)s will not be killed.

If a developer doesn't want joints between [`BaseParts`](https://create.roblox.com/docs/reference/engine/classes/BasePart) to be
broken or wants to implement their own formula for damaging
[`Humanoids`](https://create.roblox.com/docs/reference/engine/classes/Humanoid) it is recommended they set
[`Explosion.DestroyJointRadiusPercent`](https://create.roblox.com/docs/reference/engine/classes/Explosion#DestroyJointRadiusPercent) to 0 and use the
[`Explosion.Hit`](https://create.roblox.com/docs/reference/engine/classes/Explosion#Hit) event to handle the result of the explosion.

Explosions can also be configured to damage [`Terrain`](https://create.roblox.com/docs/reference/engine/classes/Terrain), creating craters,
this behavior is controlled by the
[`ExplosionType`](https://create.roblox.com/docs/reference/engine/classes/Explosion#ExplosionType) property.

The effect of an Explosion is not disrupted by obstacles, this means parts
shielded behind other parts will still be affected, even if the
[`BasePart`](https://create.roblox.com/docs/reference/engine/classes/BasePart) they are shielded behind is not anchored.