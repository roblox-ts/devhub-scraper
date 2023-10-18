FriendPages is a special version of [`Pages`](https://create.roblox.com/docs/reference/engine/classes/Pages) returned by
[`Players:GetFriendsAsync()`](https://create.roblox.com/docs/reference/engine/classes/Players#GetFriendsAsync). The items contained within include
information about a player's friends and have the following structure:
| Name | Type | Description |
| `DisplayName` | boolean | The current display name of the friend. |
| `Id` | int64 | The user ID of the friend. |
| `IsOnline` | boolean | Whether the user is currently online. |
| `Username` | string | The username of the friend. |

See the code samples for how to iterate over a player's friends.