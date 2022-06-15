This function returns whether a player owns a badge given the [Player](https://developer.roblox.com/en-us/api-reference/class/Player)'s [UserId](https://developer.roblox.com/en-us/api-reference/property/Player/UserId) and the badge's id. Such a query can only be made under the following conditions:

*   This function must be called from the server, i.e. in a [Script](https://developer.roblox.com/en-us/api-reference/class/Script) or [ModuleScript](https://developer.roblox.com/en-us/api-reference/class/ModuleScript) eventually required by a Script.
*   The player in question must be present in the server.

Any badge for any game can be queried, no matter who created the badge or which game it is used for. There are a number of applications of UserHasBadge:

*   A restricted door that can only be opened by players who own a badge (see code sample)
*   A basic way of determining if a player has played another game
*   Very simple progress saving. However, it is recommended developers use [DataStoreService](https://developer.roblox.com/en-us/api-reference/class/DataStoreService) for saving as it is more scale-able and robust (remember - players can delete their own badges).