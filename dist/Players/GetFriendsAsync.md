The GetFriends [`Players`](https://create.roblox.com/docs/reference/engine/classes/Players) function returns a [`FriendPages`](https://create.roblox.com/docs/reference/engine/classes/FriendPages)
object which contains information for all of the given
[`Player's`](https://create.roblox.com/docs/reference/engine/classes/Player) friends. The items within the FriendPages object
are tables with the following fields:
| Name | Type | Description |
| - | - | - |
| Id | int64 | The friend's UserId |
| Username | string | The friend's username |
| DisplayName | string | The [`display name`](https://create.roblox.com/docs/reference/engine/classes/Player#DisplayName) of the friend. |
| IsOnline | bool | If the friend is currently online |

See the code samples for an easy way to iterate over all a player's
friends.