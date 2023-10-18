Grants a [`Player`](https://create.roblox.com/docs/reference/engine/classes/Player) a badge with the [`UserId`](https://create.roblox.com/docs/reference/engine/classes/Player#UserId) and
the badge ID. Rate limit: **50 + 35 * [number of users] per minute**. In
order to successfully award a badge:

- The player must be presently connected to the game.
- The player must not already have the badge (note that a player may
delete an awarded badge from their profile and be awarded the badge
again).
- The badge must be awarded from a server-side [`Script`](https://create.roblox.com/docs/reference/engine/classes/Script) or a
[`ModuleScript`](https://create.roblox.com/docs/reference/engine/classes/ModuleScript) eventually required by a [`Script`](https://create.roblox.com/docs/reference/engine/classes/Script), not from a
[`LocalScript`](https://create.roblox.com/docs/reference/engine/classes/LocalScript).
- The badge must be awarded in a place that is part of the game associated
with the badge.
- The badge must be enabled; check this using the `IsEnabled` property of
the badge fetched through [`BadgeService:GetBadgeInfoAsync()`](https://create.roblox.com/docs/reference/engine/classes/BadgeService#GetBadgeInfoAsync).

See also:

- [`BadgeService:GetBadgeInfoAsync()`](https://create.roblox.com/docs/reference/engine/classes/BadgeService#GetBadgeInfoAsync)
- [`BadgeService:UserHasBadgeAsync()`](https://create.roblox.com/docs/reference/engine/classes/BadgeService#UserHasBadgeAsync)