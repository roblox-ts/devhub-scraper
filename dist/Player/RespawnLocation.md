If set, the player will respawn at the given [SpawnLocation](https://create.roblox.com/docs/reference/engine/classes/SpawnLocation). This
property can only be set through Lua and must contain a reference to a
valid [SpawnLocation](https://create.roblox.com/docs/reference/engine/classes/SpawnLocation), which must meet the following criteria:

- Descendant of [Workspace](https://create.roblox.com/docs/reference/engine/classes/Workspace)
- [SpawnLocation.TeamColor](https://create.roblox.com/docs/reference/engine/classes/SpawnLocation#TeamColor) is set to the
  [Player.TeamColor](https://create.roblox.com/docs/reference/engine/classes/Player#TeamColor) or
  [SpawnLocation.Neutral](https://create.roblox.com/docs/reference/engine/classes/SpawnLocation#Neutral) is set to true

If RespawnLocation is not set to a valid [SpawnLocation](https://create.roblox.com/docs/reference/engine/classes/SpawnLocation) then the default
spawning logic will apply. For more information on this see the page for
[SpawnLocation](https://create.roblox.com/docs/reference/engine/classes/SpawnLocation).

#### Alternatives to RespawnLocation

- A [Player](https://create.roblox.com/docs/reference/engine/classes/Player) will spawn from [SpawnLocations](https://create.roblox.com/docs/reference/engine/classes/SpawnLocation) belonging to
  their team. In some cases it may be simpler to change the
  [Player's](https://create.roblox.com/docs/reference/engine/classes/Player) [Player.Team](https://create.roblox.com/docs/reference/engine/classes/Player#Team) instead. This method also allows the
  [Player](https://create.roblox.com/docs/reference/engine/classes/Player) to respawn from multiple [SpawnLocations](https://create.roblox.com/docs/reference/engine/classes/SpawnLocation).
- Developers may wish to implement their own custom spawn logic, using
  [Model:SetPrimaryPartCFrame](https://create.roblox.com/docs/reference/engine/classes/Model#SetPrimaryPartCFrame) to move the [Player.Character](https://create.roblox.com/docs/reference/engine/classes/Player#Character) manually.