**CharacterMaxSlopeAngle** determines the starting value of
[`Humanoid.MaxSlopeAngle`](https://create.roblox.com/docs/reference/engine/classes/Humanoid#MaxSlopeAngle) for a [`Player`](https://create.roblox.com/docs/reference/engine/classes/Player)'s
[`Character`](https://create.roblox.com/docs/reference/engine/classes/Player#Character). It defaults to 89°, so humanoids can
climb pretty much any slope they want by default. When applied to the
[`Player`](https://create.roblox.com/docs/reference/engine/classes/Player)'s [`Humanoid`](https://create.roblox.com/docs/reference/engine/classes/Humanoid) it will be constrained between 0 and 89.

Since this property is only relevant for characters being spawned in the
future, changing it will not change any existing player characters.
Changes to this property will only take effect when a player respawns.