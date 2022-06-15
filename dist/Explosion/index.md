An Explosion applies force to `BaseParts` within the explosion's [Explosion.BlastRadius](https://developer.roblox.com/en-us/api-reference/property/Explosion/BlastRadius). This force breaks joints between parts and kills [Humanoid](https://developer.roblox.com/en-us/api-reference/class/Humanoid) characters not protected by a [ForceField](https://developer.roblox.com/en-us/api-reference/class/ForceField).

If an explosion is instanced whilst the game is running, it will destroy itself shortly afterwards meaning they do not need to be cleaned up using the [Debris](https://developer.roblox.com/en-us/api-reference/class/Debris) service.

**Explosion effects**

`Humanoids` are killed by explosions as they break the character [Model](https://developer.roblox.com/en-us/api-reference/class/Model)'s neck joint. Parenting a [ForceField](https://developer.roblox.com/en-us/api-reference/class/ForceField) to a model will protect all of its children from Explosions. This means that their joints will not be broken and thus [Humanoid](https://developer.roblox.com/en-us/api-reference/class/Humanoid)s will not be killed.

If a developer doesn't want joints between `BaseParts` to be broken or wants to implement their own formula for damaging [Humanoid](https://developer.roblox.com/en-us/api-reference/class/Humanoid)s it is recommended they set [Explosion.DestroyJointRadiusPercent](https://developer.roblox.com/en-us/api-reference/property/Explosion/DestroyJointRadiusPercent) to 0 and use the [Explosion.Hit](https://developer.roblox.com/en-us/api-reference/event/Explosion/Hit) event to handle the result of the explosion.

Explosions can also be configured to damage [Terrain](https://developer.roblox.com/en-us/api-reference/class/Terrain), creating craters, this behavior is controlled by the [Explosion.ExplosionType](https://developer.roblox.com/en-us/api-reference/property/Explosion/ExplosionType) property.

The effect of an Explosion is not disrupted by obstacles, this means parts shielded behind other parts will still be effected, even if the [BasePart](https://developer.roblox.com/en-us/api-reference/class/BasePart) they are shielded behind is not anchored.