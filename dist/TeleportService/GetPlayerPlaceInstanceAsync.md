This function returns the [PlaceId](https://developer.roblox.com/en-us/api-reference/property/DataModel/PlaceId) and [JobId](https://developer.roblox.com/en-us/api-reference/property/DataModel/JobId) of the server the user with the given [UserId](https://developer.roblox.com/en-us/api-reference/property/Player/UserId) is in, provided it is in the same game as the current place.

Then, [TeleportService:TeleportToPlaceInstance](https://developer.roblox.com/en-us/api-reference/function/TeleportService/TeleportToPlaceInstance) can be called with this information to allow a user to join the target user's server.

Upon a successful lookup, the function returns the following values:

#

Name

Type

Description

**1**

currentInstance

bool

A bool indicating if the user was found in the current instance

**2**

error

string

An error message in the event of the lookup failing

**3**

placeId

int64

The PlaceId of the server the user is in

**4**

instanceId

string

The JobId of the server the user is in

If there is a problem during lookup, such as the user being offline, an error is thrown. It is recommended that you wrap calls to this function in `pcall`.

Limitations
-----------

You should be aware of the following limitations when using this function:

*   This function can only be called by the server
*   This function may fail to return the correct information if the user is teleporting
*   It is possible for this function to throw an error, hence developers should wrap it in a [pcall](https://developer.roblox.com/api-reference/lua-docs/Lua-Globals#functions) (see example below)
*   As this function returns the JobId of the server and not the access code returned by [TeleportService:ReserveServer](https://developer.roblox.com/en-us/api-reference/function/TeleportService/ReserveServer), the id returned is not appropriate for use with reserved servers

Studio limitation
-----------------

This service does not work during playtesting in Roblox Studio — To test aspects of your game using it, you must publish the game and play it in the Roblox application.

See also
--------

*   For the [PlaceIds](https://developer.roblox.com/en-us/api-reference/property/DataModel/PlaceId) and [JobIds](https://developer.roblox.com/en-us/api-reference/property/DataModel/JobId) of a `Player|Player's` friends, use [Player:GetFriendsOnline](https://developer.roblox.com/en-us/api-reference/function/Player/GetFriendsOnline)