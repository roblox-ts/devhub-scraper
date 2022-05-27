This property sets the color of the [Team](https://create.roblox.com/docs/reference/engine/classes/Team). Determines the
[Player.TeamColor](https://create.roblox.com/docs/reference/engine/classes/Player#TeamColor) property of players who are a member of the team.

A lot of Roblox's default team functionality is based on the team color,
rather than the name or object. For example, [SpawnLocation](https://create.roblox.com/docs/reference/engine/classes/SpawnLocation)s can be
assigned to a team via [SpawnLocation.TeamColor](https://create.roblox.com/docs/reference/engine/classes/SpawnLocation#TeamColor). For this reason it is
recommended that developers ensure each [Team](https://create.roblox.com/docs/reference/engine/classes/Team) has a unique TeamColor.

Any player which is a part of a team will have their name color changed to
the team's TeamColor property. They will also be put underneath the team
heading on the player list.