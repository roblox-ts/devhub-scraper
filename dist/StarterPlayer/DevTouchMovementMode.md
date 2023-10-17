The DevTouchMovementMode [`StarterPlayer`](https://create.roblox.com/docs/reference/engine/classes/StarterPlayer) property lets the developer
overwrite the player's movement mode if the player is on a touch device.

This is the default property for players joining the game. It can be
changed for individual players by settings the
[`Player.DevTouchMovementMode`](https://create.roblox.com/docs/reference/engine/classes/Player#DevTouchMovementMode).

If set to **UserChoice** then the player's movement mode will be
determined by whatever the player set in the game settings. Otherwise, the
mode will be set based on this property.

See `Enum.DevTouchMovementMode` for the different movement modes
available. Lets developer overwrite the player's movement mode if the
player is on a touch device.

This property has no affect on players not on a touch-enabled device.