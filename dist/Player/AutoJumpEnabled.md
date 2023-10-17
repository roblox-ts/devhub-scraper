The AutoJumpEnabled property determines whether the
[`Player.Character`](https://create.roblox.com/docs/reference/engine/classes/Player#Character) of a [`Player`](https://create.roblox.com/docs/reference/engine/classes/Player) using a mobile device will
automatically jump when they hit an obstacle. This can make levels more
navigable while on a mobile device.

When the player joins the game, the [`StarterPlayer.AutoJumpEnabled`](https://create.roblox.com/docs/reference/engine/classes/StarterPlayer#AutoJumpEnabled)
value determines the initial state of this property. Then, this property
determines the value of the [`Humanoid.AutoJumpEnabled`](https://create.roblox.com/docs/reference/engine/classes/Humanoid#AutoJumpEnabled) property of
the [`Player.Character`](https://create.roblox.com/docs/reference/engine/classes/Player#Character) on spawn. In other words, it is possible to
set the auto-jump behavior on a per-character, per-player and per-game
basis using these three properties.