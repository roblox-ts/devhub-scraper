Whether or not a spawn is affiliated with a specific team. This means that any [Player](https://developer.roblox.com/en-us/api-reference/class/Player), of any [Team](https://developer.roblox.com/en-us/api-reference/class/Team), can spawn on it if this property is set to true.

If Neutral is set to false, only players whose [Player.TeamColor](https://developer.roblox.com/en-us/api-reference/property/Player/TeamColor) is equal to [SpawnLocation.TeamColor](https://developer.roblox.com/en-us/api-reference/property/SpawnLocation/TeamColor) can use the [SpawnLocation](https://developer.roblox.com/en-us/api-reference/class/SpawnLocation).

If [SpawnLocation.AllowTeamChangeOnTouch](https://developer.roblox.com/en-us/api-reference/property/SpawnLocation/AllowTeamChangeOnTouch) is true [Player.Neutral](https://developer.roblox.com/en-us/api-reference/property/Player/Neutral) will be set to this property upon contact with the spawn.