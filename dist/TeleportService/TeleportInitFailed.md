This event fires on both the client and the server when a request to
teleport from a function such as [`TeleportService:TeleportAsync()`](https://create.roblox.com/docs/reference/engine/classes/TeleportService#TeleportAsync)
fails and the player does not leave the current server. It provides a
reason for the failure, as well as all of the information necessary to
retry the teleport. If a group teleport fails, the event will fire once
per player.
#### TeleportOptions

The [`TeleportOptions`](https://create.roblox.com/docs/reference/engine/classes/TeleportOptions) object provided by this event is not identical
to the one passed to the original [`TeleportService:TeleportAsync()`](https://create.roblox.com/docs/reference/engine/classes/TeleportService#TeleportAsync)
call. It is a new object populated with the necessary parameters to retry
the teleport and send the player to the exact same destination. This is
especially important for facilitating group teleports when they fail.
| Original Teleport Type | Teleport Data | ReservedServerAccessCode | ServerInstanceId | ShouldReserveServer |
| - | - | - | - | - |
| Individual player to place | Original value | None | None | false |
| Player(s) to reserved server | Original value | Original value, or the code generated if ShouldReserveServer was originally true | None | false |
| Player(s) to specific server | Original value | None | Original value | false |
| Players to place | Original value | None | Same destination ID as the other players in the original teleport | false |

For more information on how to teleport players between servers, see
[Teleporting Between Places](https://create.roblox.com/docs/projects/teleporting).