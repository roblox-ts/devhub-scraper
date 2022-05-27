AutoJumpEnabled sets whether or not the [Humanoid](https://create.roblox.com/docs/reference/engine/classes/Humanoid) will attempt to
automatically jump over an obstacle it is walking towards.

Currently, this property only works when the following conditions are
true:

- The Humanoid's character model is the [Player.Character](https://create.roblox.com/docs/reference/engine/classes/Player#Character) of a [Player](https://create.roblox.com/docs/reference/engine/classes/Player).
- The Player in question is using touch controls.

When a player's character spawns, the property's value matches the
player's [Player.AutoJumpEnabled](https://create.roblox.com/docs/reference/engine/classes/Player#AutoJumpEnabled) property - which in turn matches the
[StarterPlayer.AutoJumpEnabled](https://create.roblox.com/docs/reference/engine/classes/StarterPlayer#AutoJumpEnabled) property.