Returns a dictionary containing information describing how the Player
joins the experience. The dictionary contains any of the following fields:
| Key | Value Type | Description |
| - | - | - |
| SourceGameId | number | The [`DataModel.GameId`](https://create.roblox.com/docs/reference/engine/classes/DataModel#GameId) of the experience the `Player` teleported from. Only present if the player teleports to the current experience and if a server calls the teleport function. |
| SourcePlaceId | number | The [`DataModel.PlaceId`](https://create.roblox.com/docs/reference/engine/classes/DataModel#PlaceId) of the place the `Player` teleported from. Only present if the player teleports to the current place and a server calls the teleport function. |
| Members | array | An array containing the [`Player.UserId`](https://create.roblox.com/docs/reference/engine/classes/Player#UserId) numbers of the users teleported alongside the `Player`. Only present if the player teleported as part of a group. |
| TeleportData | variant | Reflects the `teleportData` specified in the original teleport. Useful for sharing information between servers the player teleports to. Only present if `teleportData` was specified and a server calls the teleport function. |
| LaunchData | string | A string containing launch data specified in the URL the player clicks to join the experience. Only present if the URL contains launch data. |

#### GetJoinData and TeleportData

If a server initiates the Player's teleport, the dictionary that this
method returns includes the player's teleport data. The
[`Player:GetJoinData()`](https://create.roblox.com/docs/reference/engine/classes/Player#GetJoinData) method can only be used to fetch teleport
data on the server. To fetch the data on the client, use
[`TeleportService:GetLocalPlayerTeleportData()`](https://create.roblox.com/docs/reference/engine/classes/TeleportService#GetLocalPlayerTeleportData).

Unlike [`TeleportService:GetLocalPlayerTeleportData()`](https://create.roblox.com/docs/reference/engine/classes/TeleportService#GetLocalPlayerTeleportData),
[`Player:GetJoinData()`](https://create.roblox.com/docs/reference/engine/classes/Player#GetJoinData) only provides teleport data that meets the
following security criteria:

- It's guaranteed to have been sent by a Roblox server in the past 48
hours.
- It's guaranteed to have been sent with this [`Player`](https://create.roblox.com/docs/reference/engine/classes/Player).
- The `SourcePlaceId` and `SourceGameId` are guaranteed to be the place
and universe the data was sent from. This means you can verify the
teleport data came from an approved place.

As this data is transmitted by the client, it can still potentially be
abused by an exploiter. Sensitive data such as player currency should be
transmitted via a secure solution like
[Memory Stores](https://create.roblox.com/docs/cloud-services/memory-stores).
#### LaunchData

Contains the string embedded in the launchData URL parameter that the user
clicked to join the experience. Only available on the first join. If the
user teleports to another server, the data isn't included. If you need the
data after a teleport, forward it manually as teleport data. You can only
include LaunchData in direct join URLs, not URLs to the experience's page.

LaunchData is a URL parameter that you can create by adding
`&launchData=abcd` to a URL, where `abcd` is the data. Special characters
such as spaces must be URL encoded using [`HttpService:UrlEncode()`](https://create.roblox.com/docs/reference/engine/classes/HttpService#UrlEncode)
and are automatically decoded when the user joins the game. The decoded
launch data can't exceed 200 bytes. You can store more complex data as a
JSON string and decode it with [`HttpService:JSONDecode()`](https://create.roblox.com/docs/reference/engine/classes/HttpService#JSONDecode) on the
server.

This link joins the LaunchData sample place and starts the user in room 2:
`https://www.roblox.com/games/start?placeId=6900305353&launchData=%7B%22roomId%22%3A%202%7D`

You can also make sure that this link works for users without Roblox
downloaded on their mobile devices by using the AppsFlyer version of the
link. The above link would look like:

`ro.blox.com/Ebh5?af_dp=https%3A%2F%2Fwww.roblox.com%2Fgames%2Fstart%3FplaceId%3D6900305353%26launchData%3D%257B%2522roomId%2522%253A%25202%257D&af_web_dp=https%3A%2F%2Fwww.roblox.com%2Fgames%2Fstart%3FplaceId%3D6900305353%26launchData%3D%257B%2522roomId%2522%253A%25202%257D`

To build the AppsFlyer version of the link, you need to start the URL with
`ro.blox.com/Ebh5?` and append the af_dp and af_web_dp parameters with the
URL encoded version of Link 1.

Don't store confidential information in the LaunchData because it's fully
visible in the URL. Furthermore, the data might not be authentic because a
user can modify the URL.