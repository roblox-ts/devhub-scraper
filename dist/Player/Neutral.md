The Neutral property determines whether the player is on a specific team.

- When *true*, the player is not on a specific team. This also means that
the [`Player.Team`](https://create.roblox.com/docs/reference/engine/classes/Player#Team) property will be nil and the
[`Player.TeamColor`](https://create.roblox.com/docs/reference/engine/classes/Player#TeamColor) will be white.
- When *false*, the player is on a specific team. The [`Player.Team`](https://create.roblox.com/docs/reference/engine/classes/Player#Team)
property will correspond to the [`Team`](https://create.roblox.com/docs/reference/engine/classes/Team) that the player is on, as
will the [`Player.TeamColor`](https://create.roblox.com/docs/reference/engine/classes/Player#TeamColor).