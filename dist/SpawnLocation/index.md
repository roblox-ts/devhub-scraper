SpawnLocations, or "spawns" determine where a [Player](https://create.roblox.com/docs/reference/engine/classes/Player) respawns when they die.
They can be configured to allow only certain players to use each spawn, using
[Teams](https://create.roblox.com/docs/reference/engine/classes/Team). They also control how [ForceFields](https://create.roblox.com/docs/reference/engine/classes/ForceField) are set up for
newly-spawned players.

SpawnLocations can be used as checkpoints, such as in an obstacle course,
using the [SpawnLocation.AllowTeamChangeOnTouch](https://create.roblox.com/docs/reference/engine/classes/SpawnLocation#AllowTeamChangeOnTouch) property, so that when a
player touches it, they will change teams to the SpawnLocation's team. In this
case, only the first [Team](https://create.roblox.com/docs/reference/engine/classes/Team) should have [Team.AutoAssignable](https://create.roblox.com/docs/reference/engine/classes/Team#AutoAssignable) set to true,
else players will not start at the first checkpoint.

Note if a SpawnLocation is added to the [Workspace](https://create.roblox.com/docs/reference/engine/classes/Workspace) in Studio with
[SpawnLocation.Neutral](https://create.roblox.com/docs/reference/engine/classes/SpawnLocation#Neutral) set to false a Team will be created corresponding to
[SpawnLocation.TeamColor](https://create.roblox.com/docs/reference/engine/classes/SpawnLocation#TeamColor) if it does not already exist. This behavior does not
occur when spawns are created in-game using a [Script](https://create.roblox.com/docs/reference/engine/classes/Script) or if the properties of
the SpawnLocation are changed after already being added. It is recommended
that developers always set up their teams manually and not rely on this
behavior.

## Spawning Rules

There are several rules that come into play for a given SpawnLocation when a
player respawns:

- When [SpawnLocation.Neutral](https://create.roblox.com/docs/reference/engine/classes/SpawnLocation#Neutral) is set to false only [Players](https://create.roblox.com/docs/reference/engine/classes/Player) with
  [Player.TeamColor](https://create.roblox.com/docs/reference/engine/classes/Player#TeamColor) matching [SpawnLocation.TeamColor](https://create.roblox.com/docs/reference/engine/classes/SpawnLocation#TeamColor) will respawn above it
- When [SpawnLocation.Neutral](https://create.roblox.com/docs/reference/engine/classes/SpawnLocation#Neutral) is set to true any Player can spawn above it
  regardless of [SpawnLocation.TeamColor](https://create.roblox.com/docs/reference/engine/classes/SpawnLocation#TeamColor)
- If multiple eligible spawns are available to a [Player](https://create.roblox.com/docs/reference/engine/classes/Player), a random one will
  be chosen
- Players will spawn at different points on top of a SpawnLocation, but
  currently, they may still spawn on top of each other if they spawn right
  after one and other

See also:

- If you'd like to configure how long it takes for a player to respawn, take a
  look at the [RespawnTime](https://create.roblox.com/docs/reference/engine/classes/Players#RespawnTime) property