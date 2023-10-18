The IsInGroup [`Player`](https://create.roblox.com/docs/reference/engine/classes/Player) function sends a request to the Roblox
website asking whether a player is a member of a group, given the ID of
that group.

Using this in a [`Script`](https://create.roblox.com/docs/reference/engine/classes/Script), as opposed to a [`LocalScript`](https://create.roblox.com/docs/reference/engine/classes/LocalScript), will
not get you the most up-to-date information. If a player leaves a group
while they are in the game, IsInGroup will still think they're in that
group until they leave. However, this does not happen when used with a
LocalScript.

This is because the method caches results, so multiple calls of IsInGroup
on the same player with the same group ID will yield the same result as
when the method was first called with the given group ID. The caching
behavior is on a per-peer basis: a server does not share the same cache as
a client.