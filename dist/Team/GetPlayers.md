Returns a list of [`Player`](https://create.roblox.com/docs/reference/engine/classes/Player)s who are assigned to the [`Team`](https://create.roblox.com/docs/reference/engine/classes/Team). A
[`Player`](https://create.roblox.com/docs/reference/engine/classes/Player) is considered assigned if their [`Player.Team`](https://create.roblox.com/docs/reference/engine/classes/Player#Team)
property is equal to the [`Team`](https://create.roblox.com/docs/reference/engine/classes/Team) and [`Player.Neutral`](https://create.roblox.com/docs/reference/engine/classes/Player#Neutral) is false.

This function has a number of potential uses, including counting the
number of players on a [`Team`](https://create.roblox.com/docs/reference/engine/classes/Team) or giving every [`Player`](https://create.roblox.com/docs/reference/engine/classes/Player) on a
[`Team`](https://create.roblox.com/docs/reference/engine/classes/Team) a [`Tool`](https://create.roblox.com/docs/reference/engine/classes/Tool).