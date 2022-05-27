Whether or not a spawn is affiliated with a specific team. This means that
any [Player](https://create.roblox.com/docs/reference/engine/classes/Player), of any [Team](https://create.roblox.com/docs/reference/engine/classes/Team), can spawn on it if this property is set to
true.

If Neutral is set to false, only players whose [Player.TeamColor](https://create.roblox.com/docs/reference/engine/classes/Player#TeamColor) is equal
to [SpawnLocation.TeamColor](https://create.roblox.com/docs/reference/engine/classes/SpawnLocation#TeamColor) can use the [SpawnLocation](https://create.roblox.com/docs/reference/engine/classes/SpawnLocation).

If [SpawnLocation.AllowTeamChangeOnTouch](https://create.roblox.com/docs/reference/engine/classes/SpawnLocation#AllowTeamChangeOnTouch) is true [Player.Neutral](https://create.roblox.com/docs/reference/engine/classes/Player#Neutral) will be
set to this property upon contact with the spawn.