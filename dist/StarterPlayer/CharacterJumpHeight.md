**CharacterJumpHeight** determines the starting value of
[`Humanoid.JumpHeight`](https://create.roblox.com/docs/reference/engine/classes/Humanoid#JumpHeight) for a [`Player`](https://create.roblox.com/docs/reference/engine/classes/Player)'s
[`Character`](https://create.roblox.com/docs/reference/engine/classes/Player#Character). The value of this property defaults to
7.2 studs.

This property is only visible in the Properties window If
[`StarterPlayer.CharacterUseJumpPower`](https://create.roblox.com/docs/reference/engine/classes/StarterPlayer#CharacterUseJumpPower) is set to **false**, as it
would not be relevant otherwise.

Since this property is only relevant for characters being spawned in the
future, changing it will not change any existing player characters.
Changes to this property will only take effect when a player respawns.