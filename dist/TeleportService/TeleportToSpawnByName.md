The numerous teleport functions have been combined into a single method,
[`TeleportAsync`](https://create.roblox.com/docs/reference/engine/classes/TeleportService#TeleportAsync), which should be
used instead and may be used to:

- Teleport any number of players to a Public Server
- Follow a Friend to a Different Place
- Teleport any number of Players to a Reserved Server

This function behaves the same as [`TeleportService:Teleport()`](https://create.roblox.com/docs/reference/engine/classes/TeleportService#Teleport) with
the exception that it includes a *spawnName* parameter, causing the
[`Player`](https://create.roblox.com/docs/reference/engine/classes/Player) to spawn at the [`SpawnLocation`](https://create.roblox.com/docs/reference/engine/classes/SpawnLocation) of that name at the
destination place.

The [`SpawnLocation`](https://create.roblox.com/docs/reference/engine/classes/SpawnLocation) must be valid for the [`Player`](https://create.roblox.com/docs/reference/engine/classes/Player) to spawn
on. For example, it must be [`neutral`](https://create.roblox.com/docs/reference/engine/classes/SpawnLocation#Neutral) or set
to the same [`TeamColor`](https://create.roblox.com/docs/reference/engine/classes/SpawnLocation#TeamColor) as the [`Team`](https://create.roblox.com/docs/reference/engine/classes/Team)
the [`Player`](https://create.roblox.com/docs/reference/engine/classes/Player) will be assigned to upon joining the game.

The [`Player`](https://create.roblox.com/docs/reference/engine/classes/Player) will still spawn at the correct [`SpawnLocation`](https://create.roblox.com/docs/reference/engine/classes/SpawnLocation)
even the teleport is to a place in a different universe. The spawn will
also be correct if [`Players.CharacterAutoLoads`](https://create.roblox.com/docs/reference/engine/classes/Players#CharacterAutoLoads) is false in the
destination place and the [`Character`](https://create.roblox.com/docs/reference/engine/classes/Player#Character) is loaded
manually using [`LoadCharacter`](https://create.roblox.com/docs/reference/engine/classes/Player#LoadCharacter).

The teleportation will only affect the [`SpawnLocation`](https://create.roblox.com/docs/reference/engine/classes/SpawnLocation) used
initially. If the [`Player`](https://create.roblox.com/docs/reference/engine/classes/Player) respawns again subsequently it will not
necessarily be at this [`SpawnLocation`](https://create.roblox.com/docs/reference/engine/classes/SpawnLocation).
#### Studio limitation

This service does not work during playtesting in Roblox Studio — To
test aspects of your game using it, you must publish the game and play it
in the Roblox application.