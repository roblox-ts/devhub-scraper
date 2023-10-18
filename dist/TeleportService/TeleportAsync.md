This function serves as the all-encompassing method to teleport a player
or group of players from one server to another.

All forms of player teleportation are consolidated into this single
function, which is used to:

- Teleport players to a different place
- Teleport players to a specific server
- Teleport players to a reserved server

**Group Teleport Limitations**

- Groups of players can only be teleported within a single experience.
- No more than 50 players can be teleported with a single
[`TeleportService:TeleportAsync()`](https://create.roblox.com/docs/reference/engine/classes/TeleportService#TeleportAsync) call.

#### Potential Errors

This is a list of potential reasons a teleport may fail, ranging from
invalid teleports to network issues.
| Error | Description |
| - | - |
| Invalid placeId | The provided placeId is below 0. |
| Players empty | The provided list of players to teleport is empty. |
| List of players instances is incorrect | Any of the provided players is not a Player object. |
| TeleportOptions not of correct type | The provided teleportOption is not a TeleportOptions object. |
| TeleportAsync called from Client | The client called TeleportAsync, which can only be called from the server. |
| Incompatible Parameters | Conflicting teleport options were used and TeleportService doesn't know where to send the player.

              Conflicting TeleportOption parameters:

               * ReservedServerAccessCode and ServerInstanceId

               * ShouldReserveServer and ServerInstanceId

               * ShouldReserveServer and ReservedServerAccessCode |

For more information on how to teleport players between servers and
receive user data from a teleport, see
[Teleporting Between Places](https://create.roblox.com/docs/projects/teleporting#sending-user-data-along-with-teleports).