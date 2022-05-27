This property determines whether [Player](https://create.roblox.com/docs/reference/engine/classes/Player)s will be automatically placed
onto the [Team](https://create.roblox.com/docs/reference/engine/classes/Team) when joining. If multiple teams have this property set to
true, Roblox will attempt to even the teams out when [Player](https://create.roblox.com/docs/reference/engine/classes/Player)s are added.

When a [Player](https://create.roblox.com/docs/reference/engine/classes/Player) joins a game they will be assigned to the [Team](https://create.roblox.com/docs/reference/engine/classes/Team) with
[Team.AutoAssignable](https://create.roblox.com/docs/reference/engine/classes/Team#AutoAssignable) set to true that has the fewest players. If no such
team is available, [Player.Neutral](https://create.roblox.com/docs/reference/engine/classes/Player#Neutral) will be set to true.

Note whilst using this property will help even out teams when players are
added, it will not do anything when players are removed. For this reason
developers may wish to implement their own team balancing system.