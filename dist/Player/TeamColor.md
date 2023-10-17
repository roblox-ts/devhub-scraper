The TeamColor property determines which team a Player is associated with
according to that Team's [`Team.TeamColor`](https://create.roblox.com/docs/reference/engine/classes/Team#TeamColor). Changing this property
will change [`Player.Team`](https://create.roblox.com/docs/reference/engine/classes/Player#Team) according to whichever team has the same
[`BrickColor`](https://create.roblox.com/docs/reference/engine/datatypes/BrickColor) for their [`Team.TeamColor`](https://create.roblox.com/docs/reference/engine/classes/Team#TeamColor). If no Team object
has the associated TeamColor, the player will not be associated with a
team.

It's often a better idea to set [`Player.Team`](https://create.roblox.com/docs/reference/engine/classes/Player#Team) to the respective
[`Team`](https://create.roblox.com/docs/reference/engine/classes/Team) instead of using this property. Setting this property often
leads to repetition of the same BrickColor value for a certain team across
many scripts; this is something you want to avoid when adhering to the
[don't-repeat-yourself](https://create.roblox.com/docs/https://en.wikipedia.org/wiki/Don%27t_repeat_yourself) principle.