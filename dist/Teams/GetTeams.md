The GetTeam function returns a table containing the game's [`Team`](https://create.roblox.com/docs/reference/engine/classes/Team)
objects.

Note this will only return Team objects that are directly parented to the
[`Teams`](https://create.roblox.com/docs/reference/engine/classes/Teams) service. For this reason it is recommended developers only
parent [`Team`](https://create.roblox.com/docs/reference/engine/classes/Team) objects to the [`Teams`](https://create.roblox.com/docs/reference/engine/classes/Teams) service and not to other
[`Instance`](https://create.roblox.com/docs/reference/engine/classes/Instance)s (or to each other).