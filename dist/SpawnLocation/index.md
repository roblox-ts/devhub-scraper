SpawnLocations, or “spawns” determine where a [Player](https://developer.roblox.com/en-us/api-reference/class/Player) respawns when they die. They can be configured to allow only certain players to use each spawn, using [Teams](https://developer.roblox.com/en-us/api-reference/class/Team). They also control how [ForceFields](https://developer.roblox.com/en-us/api-reference/class/ForceField) are set up for newly-spawned players.

SpawnLocations can be used as checkpoints, such as in an obstacle course, using the [SpawnLocation.AllowTeamChangeOnTouch](https://developer.roblox.com/en-us/api-reference/property/SpawnLocation/AllowTeamChangeOnTouch) property, so that when a player touches it, they will change teams to the SpawnLocation's team. In this case, only the first [Team](https://developer.roblox.com/en-us/api-reference/class/Team) should have [Team.AutoAssignable](https://developer.roblox.com/en-us/api-reference/property/Team/AutoAssignable) set to true, else players will not start at the first checkpoint.

Note if a SpawnLocation is added to the [Workspace](https://developer.roblox.com/en-us/api-reference/class/Workspace) in Studio with [SpawnLocation.Neutral](https://developer.roblox.com/en-us/api-reference/property/SpawnLocation/Neutral) set to false a Team will be created corresponding to [SpawnLocation.TeamColor](https://developer.roblox.com/en-us/api-reference/property/SpawnLocation/TeamColor) if it does not already exist. This behavior does not occur when spawns are created in-game using a [Script](https://developer.roblox.com/en-us/api-reference/class/Script) or if the properties of the SpawnLocation are changed after already being added. It is recommended that developers always set up their teams manually and not rely on this behavior.

Spawning Rules
--------------

There are several rules that come into play for a given SpawnLocation when a player respawns:

*   When [SpawnLocation.Neutral](https://developer.roblox.com/en-us/api-reference/property/SpawnLocation/Neutral) is set to false only [Players](https://developer.roblox.com/en-us/api-reference/class/Player) with [Player.TeamColor](https://developer.roblox.com/en-us/api-reference/property/Player/TeamColor) matching [SpawnLocation.TeamColor](https://developer.roblox.com/en-us/api-reference/property/SpawnLocation/TeamColor) will respawn above it
*   When [SpawnLocation.Neutral](https://developer.roblox.com/en-us/api-reference/property/SpawnLocation/Neutral) is set to true any Player can spawn above it regardless of [SpawnLocation.TeamColor](https://developer.roblox.com/en-us/api-reference/property/SpawnLocation/TeamColor)
*   If multiple eligible spawns are available to a [Player](https://developer.roblox.com/en-us/api-reference/class/Player), a random one will be chosen
*   Players will spawn at different points on top of a SpawnLocation, but currently, they may still spawn on top of each other if they spawn right after one and other

See also
--------

*   If you'd like to configure how long it takes for a player to respawn, take a look at the [RespawnTime](https://developer.roblox.com/en-us/api-reference/property/Players/RespawnTime) property