A [`ForceField`](https://create.roblox.com/docs/reference/engine/classes/ForceField) protects a [`Humanoid`](https://create.roblox.com/docs/reference/engine/classes/Humanoid) from taking damage using the
[`Humanoid:TakeDamage()`](https://create.roblox.com/docs/reference/engine/classes/Humanoid#TakeDamage) function, and protects [`BasePart`](https://create.roblox.com/docs/reference/engine/classes/BasePart)s from
having their joints broken due to an [`Explosion`](https://create.roblox.com/docs/reference/engine/classes/Explosion).
## ForceField Creation

ForceFields are created when a character spawns on a [`SpawnLocation`](https://create.roblox.com/docs/reference/engine/classes/SpawnLocation) and
the [`SpawnLocation.Duration`](https://create.roblox.com/docs/reference/engine/classes/SpawnLocation#Duration) property is greater than zero.

ForeFields influence the instance they are parented to. When parented to a
[`Model`](https://create.roblox.com/docs/reference/engine/classes/Model) they will protect all of the [`BasePart`](https://create.roblox.com/docs/reference/engine/classes/BasePart)s descending from
that model. They may be parented to a [`BasePart`](https://create.roblox.com/docs/reference/engine/classes/BasePart), but the part's joints
will only be protected if both the part and the part it is connected to also
contain ForceField.
## Forcefields and Joints

When a ForceField is parented to a character [`Model`](https://create.roblox.com/docs/reference/engine/classes/Model) the neck joint will
be protected and thus the character can not be killed by `Explosions`.
Developers can protect joints from Explosions without the need for a
[`ForceField`](https://create.roblox.com/docs/reference/engine/classes/ForceField) object by setting
[`Explosion.DestroyJointRadiusPercent`](https://create.roblox.com/docs/reference/engine/classes/Explosion#DestroyJointRadiusPercent) to 0.

**ForceFields and Damage**

ForceFields only protect [`Humanoid`](https://create.roblox.com/docs/reference/engine/classes/Humanoid)s from damage using the
[`Humanoid:TakeDamage()`](https://create.roblox.com/docs/reference/engine/classes/Humanoid#TakeDamage) function. Humanoids can still be damaged by
setting [`Humanoid.Health`](https://create.roblox.com/docs/reference/engine/classes/Humanoid#Health) directly. For this reason, it is advised that
developers use [`Humanoid:TakeDamage()`](https://create.roblox.com/docs/reference/engine/classes/Humanoid#TakeDamage). Bearing in mind of course, that
it is still possible to check if a [`ForceField`](https://create.roblox.com/docs/reference/engine/classes/ForceField) exists before manually
setting the humanoid's health as shown below:
```lua
if not characterModel:FindFirstChildOfClass("ForceField") then
	humanoid.Health = humanoid.Health - 10
end
```
## ForceField Visuals

When [`ForceField.Visible`](https://create.roblox.com/docs/reference/engine/classes/ForceField#Visible) is set to true, a particle effect is created.
A number of rules determine where this effect will be emitted from.

When parented to a [`Model`](https://create.roblox.com/docs/reference/engine/classes/Model), if the model includes a [`Humanoid`](https://create.roblox.com/docs/reference/engine/classes/Humanoid)
named "Humanoid" with [`Humanoid.RigType`](https://create.roblox.com/docs/reference/engine/classes/Humanoid#RigType) set to R15, the effect will be
emitted from the part named "UpperTorso". Otherwise, the effect will be
emitted from the part named "Torso". The part must have the same parent as the
ForceField, if it does not exist then the effect is emitted at 0, 0, 0.

When parented to a [`BasePart`](https://create.roblox.com/docs/reference/engine/classes/BasePart) the effect will be emitted from the part's
[`BasePart.Position`](https://create.roblox.com/docs/reference/engine/classes/BasePart#Position).