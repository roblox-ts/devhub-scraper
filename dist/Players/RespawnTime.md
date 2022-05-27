The RespawnTime property controls the time, in seconds, it takes for a
player to respawn when [Players.CharacterAutoLoads](https://create.roblox.com/docs/reference/engine/classes/Players#CharacterAutoLoads) is _true_. It defaults
to 5.0 seconds.

![RespawnTime property in Studio Explorer Window][1]

This is useful when you want to change how long it takes to respawn based
on the type of your game but don't want to handle spawning players
individually. Social games may want to decrease the respawn time whereas
action games may want to increase it.

Although this can be set from within a [Script](https://create.roblox.com/docs/reference/engine/classes/Script), you will likely set the
property from within Studio via the Players service property window.

```lua
local Players = game:GetService(“Players”)
Players.RespawnTime = 10.0
```

See also:

- `Player/SpawnLocation`, if set, the player will respawn at the given
  `SpawnLocation`

[1]: https://prod.docsiteassets.roblox.com/assets/blt18cb6ff9dcd06eef/RespawnTimeInExplorer.png