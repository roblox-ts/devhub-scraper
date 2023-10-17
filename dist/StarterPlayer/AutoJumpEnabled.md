The AutoJumpEnabled property sets whether the character will automatically
jump when hitting an obstacle on a mobile device.

This property is copied from the [`StarterPlayer`](https://create.roblox.com/docs/reference/engine/classes/StarterPlayer) to a [`Player`](https://create.roblox.com/docs/reference/engine/classes/Player)
when they join the game. Following that. the value of this property is
copied to [`Humanoid.AutoJumpEnabled`](https://create.roblox.com/docs/reference/engine/classes/Humanoid#AutoJumpEnabled) property of the
[`Player.Character`](https://create.roblox.com/docs/reference/engine/classes/Player#Character)s [`Humanoid`](https://create.roblox.com/docs/reference/engine/classes/Humanoid) on spawn. In other words, it is
possible to set the auto-jump behavior on a per-character, per-player and
per-game basis using these three properties.