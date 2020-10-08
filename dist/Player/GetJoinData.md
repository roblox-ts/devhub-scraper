This function returns a dictionary containing information on how the [Player](https://developer.roblox.com/en-us/api-reference/class/Player) joined the game.

The dictionary contains the fields below. Please note, whether these fields exists depends on the circumstances under which the [Player](https://developer.roblox.com/en-us/api-reference/class/Player) joined the game.

Key

Value Type

Description

SourceGameId

int64

The [DataModel.GameId](https://developer.roblox.com/en-us/api-reference/property/DataModel/GameId) of the game the [Player](https://developer.roblox.com/en-us/api-reference/class/Player) was teleported from.

SourcePlaceId

int64

The [DataModel.PlaceId](https://developer.roblox.com/en-us/api-reference/property/DataModel/PlaceId) of the place the [Player](https://developer.roblox.com/en-us/api-reference/class/Player) was teleported from. Only present if the player was teleported to the current place.

Members

array

An array containing the [UserIds](https://developer.roblox.com/en-us/api-reference/property/Player/UserId) teleported alongside the [Player](https://developer.roblox.com/en-us/api-reference/class/Player). Only present if the player was teleported in using [TeleportService:TeleportPartyAsync](https://developer.roblox.com/en-us/api-reference/function/TeleportService/TeleportPartyAsync).

TeleportData

variant

Reflects the _teleportData_ parameter specified in the original teleport function. This is useful in order to share information when teleporting a player from one place to another. It is only present if _teleportData_ was specified and the teleport function was called from the server.

GetJoinData and TeleportData
----------------------------

If the teleport the [Player](https://developer.roblox.com/en-us/api-reference/class/Player) arrived in the current place due to was initiated on a server (as opposed to a client) the `Player|Player's` _teleportData_ is included in the dictionary returned by this function.

This function can only be used to fetch _teleportData_ on the server, to retrieve it on the client use [TeleportService:GetLocalPlayerTeleportData](https://developer.roblox.com/en-us/api-reference/function/TeleportService/GetLocalPlayerTeleportData).

In contrast to [TeleportService:GetLocalPlayerTeleportData](https://developer.roblox.com/en-us/api-reference/function/TeleportService/GetLocalPlayerTeleportData), this function provides a number of security checks to the _teleportData_:

*   It is guaranteed to have been sent by a Roblox server in the last 48 hours
*   It is guaranteed to have been sent with this [Player](https://developer.roblox.com/en-us/api-reference/class/Player)
*   The SourcePlaceId returned is guaranteed to be the place the data was sent from. This means you can verify the TeleportData came from an approved place

However, as this data is transmitted by the client, it not 100% secure. Although the user cannot modify this data it is possible for them to view it or insert data from a previous teleport.

Despite this, it is still appropriate for the secure transmission of [immutable data](https://en.wikipedia.org/wiki/Immutable_object) (data that can not be changed). For example, if the user has completed a level that cannot be uncompleted. Such data can be securely transmitted using this function avoiding the need to use up and wait for [DataStore](https://developer.roblox.com/en-us/api-reference/class/GlobalDataStore) requests when teleporting.

You should not use this function for data that can be changed. For example, the amount of in-game currency the user currently has. This is because GetJoinData cannot guarantee a malicious user is not transmitting data from a previous session. For data like this, you should rely on [GlobalDataStores](https://developer.roblox.com/en-us/api-reference/class/GlobalDataStore).

As with all cases, you should implement proper server validation to ensure your game is secure. For more information see this article on `Articles/Game Security`.