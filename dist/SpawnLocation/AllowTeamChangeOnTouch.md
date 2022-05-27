Allows a [Player](https://create.roblox.com/docs/reference/engine/classes/Player) to join the team by touching the [SpawnLocation](https://create.roblox.com/docs/reference/engine/classes/SpawnLocation). When
set to true, if a [Player](https://create.roblox.com/docs/reference/engine/classes/Player) character comes into contact with the
[SpawnLocation](https://create.roblox.com/docs/reference/engine/classes/SpawnLocation), the player's [Player.TeamColor](https://create.roblox.com/docs/reference/engine/classes/Player#TeamColor) will be set to
[SpawnLocation.TeamColor](https://create.roblox.com/docs/reference/engine/classes/SpawnLocation#TeamColor). [Player.Neutral](https://create.roblox.com/docs/reference/engine/classes/Player#Neutral) will also be set to
[SpawnLocation.Neutral](https://create.roblox.com/docs/reference/engine/classes/SpawnLocation#Neutral) upon contact, meaning a player can also become
neutral by touching a spawn location.

This will not function when [SpawnLocation.Enabled](https://create.roblox.com/docs/reference/engine/classes/SpawnLocation#Enabled) is set to false.

#### Making Checkpoints

This feature is often used to make checkpoints in obstacle courses or
similar games.