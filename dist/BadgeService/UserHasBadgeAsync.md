Checks and returns whether a [`Player`](https://create.roblox.com/docs/reference/engine/classes/Player) owns a badge given their
[`UserId`](https://create.roblox.com/docs/reference/engine/classes/Player#UserId) and the badge ID. Rate limit: **50 + 35 *
[number of players] per minute**. You can call the function from the
server in a [`Script`](https://create.roblox.com/docs/reference/engine/classes/Script) or [`ModuleScript`](https://create.roblox.com/docs/reference/engine/classes/ModuleScript) eventually required by
a [`Script`](https://create.roblox.com/docs/reference/engine/classes/Script), and the user in question must be present in the server
for the query to run. When calling the method from the client in a
[`LocalScript`](https://create.roblox.com/docs/reference/engine/classes/LocalScript), it only works for the local user whose client is
running the script.

Any badge for any game can be queried, no matter who created the badge or
which experience it is used for.

See also:

- [`BadgeService:GetBadgeInfoAsync()`](https://create.roblox.com/docs/reference/engine/classes/BadgeService#GetBadgeInfoAsync)
- [`BadgeService:AwardBadge()`](https://create.roblox.com/docs/reference/engine/classes/BadgeService#AwardBadge)