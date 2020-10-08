If set, the player will respawn at the given [SpawnLocation](https://developer.roblox.com/en-us/api-reference/class/SpawnLocation). This property can only be set through Lua and must contain a reference to a valid [SpawnLocation](https://developer.roblox.com/en-us/api-reference/class/SpawnLocation), which must meet the following criteria:

*   Descendant of [Workspace](https://developer.roblox.com/en-us/api-reference/class/Workspace)
*   `SpawnLocation/TeamColor|SpawnLocation.TeamColor` is set to the `Player/TeamColor|Player.TeamColor` or `SpawnLocation/Neutral|SpawnLocation.Neutral` is set to true

If RespawnLocation is not set to a valid [SpawnLocation](https://developer.roblox.com/en-us/api-reference/class/SpawnLocation) then the default spawning logic will apply. For more information on this see the page for [SpawnLocation](https://developer.roblox.com/en-us/api-reference/class/SpawnLocation).

Alternatives to RespawnLocation
-------------------------------

*   A [Player](https://developer.roblox.com/en-us/api-reference/class/Player) will spawn from [SpawnLocations](https://developer.roblox.com/en-us/api-reference/class/SpawnLocation) belonging to their team. In some cases it may be simpler to change the `Player|Player's` [Player.Team](https://developer.roblox.com/en-us/api-reference/property/Player/Team) instead. This method also allows the [Player](https://developer.roblox.com/en-us/api-reference/class/Player) to respawn from multiple [SpawnLocations](https://developer.roblox.com/en-us/api-reference/class/SpawnLocation).
*   Developers may wish to implement their own custom spawn logic, using [Model:SetPrimaryPartCFrame](https://developer.roblox.com/en-us/api-reference/function/Model/SetPrimaryPartCFrame) to move the [Player.Character](https://developer.roblox.com/en-us/api-reference/property/Player/Character) manually.