Sets whether or not the [SpawnLocation](https://create.roblox.com/docs/reference/engine/classes/SpawnLocation) is enabled. When disabled players
cannot spawn at the [SpawnLocation](https://create.roblox.com/docs/reference/engine/classes/SpawnLocation) and the
[SpawnLocation.AllowTeamChangeOnTouch](https://create.roblox.com/docs/reference/engine/classes/SpawnLocation#AllowTeamChangeOnTouch) functionality is disabled.

This property provides the most convenient way of preventing [Player](https://create.roblox.com/docs/reference/engine/classes/Player)s
from spawning at a spawn.

Note, although team changing on touch using
[SpawnLocation.AllowTeamChangeOnTouch](https://create.roblox.com/docs/reference/engine/classes/SpawnLocation#AllowTeamChangeOnTouch) is disabled when Enabled is set to
false, other touched events using `BasePart.Touched` will still fire.