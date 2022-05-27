The length of time, in seconds, that a [ForceField](https://create.roblox.com/docs/reference/engine/classes/ForceField) will be applied to a
[Player](https://create.roblox.com/docs/reference/engine/classes/Player) character spawning at this [SpawnLocation](https://create.roblox.com/docs/reference/engine/classes/SpawnLocation). If Duration is zero,
the [ForceField](https://create.roblox.com/docs/reference/engine/classes/ForceField) is never created, and it will not trigger the
[Instance.DescendantAdded](https://create.roblox.com/docs/reference/engine/classes/Instance#DescendantAdded) or [Instance.ChildAdded](https://create.roblox.com/docs/reference/engine/classes/Instance#ChildAdded) events.

This default value of this property is 10 seconds.

The duration feature allows developers to easily give [Player](https://create.roblox.com/docs/reference/engine/classes/Player)s protection
from 'spawn killing' which can be a frustrating experience for players.
Note, [ForceField](https://create.roblox.com/docs/reference/engine/classes/ForceField)s will only protect users from [Explosion](https://create.roblox.com/docs/reference/engine/classes/Explosion)s and Weapons
that use [Humanoid:TakeDamage](https://create.roblox.com/docs/reference/engine/classes/Humanoid#TakeDamage) to deal damage or otherwise check for a
[ForceField](https://create.roblox.com/docs/reference/engine/classes/ForceField).