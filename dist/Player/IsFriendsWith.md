This function sends a request to the Roblox website asking whether a
player is a friend of another user, given the [`Player.UserId`](https://create.roblox.com/docs/reference/engine/classes/Player#UserId) of
that user. This function caches results so multiple calls of the function
on the same player with the same [`Player.UserId`](https://create.roblox.com/docs/reference/engine/classes/Player#UserId) may not yield the
most up-to-date result. This does not happen when used in a
[`LocalScript`](https://create.roblox.com/docs/reference/engine/classes/LocalScript).