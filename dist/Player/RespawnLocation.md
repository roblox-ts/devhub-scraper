If set, the player will respawn at the given [`SpawnLocation`](https://create.roblox.com/docs/reference/engine/classes/SpawnLocation). This
property can only be set through Lua and must contain a reference to a
valid [`SpawnLocation`](https://create.roblox.com/docs/reference/engine/classes/SpawnLocation), which must meet the following criteria:

- Descendant of [`Workspace`](https://create.roblox.com/docs/reference/engine/classes/Workspace)
- [`SpawnLocation.TeamColor`](https://create.roblox.com/docs/reference/engine/classes/SpawnLocation#TeamColor) is set to the [`Player.TeamColor`](https://create.roblox.com/docs/reference/engine/classes/Player#TeamColor)
or [`SpawnLocation.Neutral`](https://create.roblox.com/docs/reference/engine/classes/SpawnLocation#Neutral) is set to true

If RespawnLocation is not set to a valid [`SpawnLocation`](https://create.roblox.com/docs/reference/engine/classes/SpawnLocation) then the
default spawning logic will apply. For more information on this see the
page for [`SpawnLocation`](https://create.roblox.com/docs/reference/engine/classes/SpawnLocation).
##### Alternatives to RespawnLocation

- A [`Player`](https://create.roblox.com/docs/reference/engine/classes/Player) will spawn from [`SpawnLocations`](https://create.roblox.com/docs/reference/engine/classes/SpawnLocation)
belonging to their team. In some cases it may be simpler to change the
player's [`Player.Team`](https://create.roblox.com/docs/reference/engine/classes/Player#Team) instead.
- Implement your own custom spawn logic using [`PVInstance:PivotTo()`](https://create.roblox.com/docs/reference/engine/classes/PVInstance#PivotTo)
to manually move the [`Player.Character`](https://create.roblox.com/docs/reference/engine/classes/Player#Character).