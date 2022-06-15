The RespawnTime property controls the time, in seconds, it takes for a player to respawn when [Players.CharacterAutoLoads](https://developer.roblox.com/en-us/api-reference/property/Players/CharacterAutoLoads) is _true_. It defaults to 5.0 seconds.

![RespawnTime property in Studio Explorer Window](https://developer.roblox.com/assets/blt18cb6ff9dcd06eef/RespawnTimeInExplorer.png)

This is useful when you want to change how long it takes to respawn based on the type of your game but don't want to handle spawning players individually. Social games may want to decrease the respawn time whereas action games may want to increase it.

Although this can be set from within a [Script](https://developer.roblox.com/en-us/api-reference/class/Script), you will likely set the property from within Studio via the Players service property window.

local Players = game:GetService(“Players”)
Players.RespawnTime = 10.0

### See also

*   `Player/SpawnLocation`, if set, the player will respawn at the given [SpawnLocation](https://developer.roblox.com/en-us/api-reference/class/SpawnLocation)