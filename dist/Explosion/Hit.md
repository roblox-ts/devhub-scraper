Fires when the [`Explosion`](https://create.roblox.com/docs/reference/engine/classes/Explosion) hits a [`BasePart`](https://create.roblox.com/docs/reference/engine/classes/BasePart) within its
[`Explosion.BlastRadius`](https://create.roblox.com/docs/reference/engine/classes/Explosion#BlastRadius). Returns the part hit along with the
distance of the part from [`Explosion.Position`](https://create.roblox.com/docs/reference/engine/classes/Explosion#Position).

Note that the effect of an [`Explosion`](https://create.roblox.com/docs/reference/engine/classes/Explosion) is not disrupted by
obstacles, this means parts shielded behind other parts will still be hit,
even if the [`BasePart`](https://create.roblox.com/docs/reference/engine/classes/BasePart) they are shielded behind is anchored.

This event will also fire when [`Explosion.BlastPressure`](https://create.roblox.com/docs/reference/engine/classes/Explosion#BlastPressure) is equal to
zero. This means developers can program their own custom behavior for
explosions by eliminating the explosion's influence on [`BasePart`](https://create.roblox.com/docs/reference/engine/classes/BasePart)s
and [`Terrain`](https://create.roblox.com/docs/reference/engine/classes/Terrain).

Note that this event will fire for every [`BasePart`](https://create.roblox.com/docs/reference/engine/classes/BasePart) hit. This means
it can fire multiple times for the same player character (as the character
[`Model`](https://create.roblox.com/docs/reference/engine/classes/Model) is made up of multiple parts). For this reason when dealing
custom damage using the [`Explosion.Hit`](https://create.roblox.com/docs/reference/engine/classes/Explosion#Hit) event it's recommended to
implement a check to see if the character has already been hit by the
[`Explosion`](https://create.roblox.com/docs/reference/engine/classes/Explosion).