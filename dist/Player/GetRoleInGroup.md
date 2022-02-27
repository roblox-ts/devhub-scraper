The GetRoleInGroup [Player](https://developer.roblox.com/en-us/api-reference/class/Player) function returns the player's role in the group as a string, or _Guest_ if the player isn't part of the group.

Note
----

Using this in a [Script](https://developer.roblox.com/en-us/api-reference/class/Script), as opposed to a [LocalScript](https://developer.roblox.com/en-us/api-reference/class/LocalScript), will not get you the most up-to-date information. If a player leaves a group while they are in the game, GetRoleInGroup will still think they're in that group until they leave. However, this does not happen when used with a LocalScript.

This is because the method caches results, so multiple calls of GetRoleInGroup on the same player with the same group ID will yield the same result as when the method was first called with the given group ID. The caching behavior is on a per-peer basis: a server does not share the same cache as a client.