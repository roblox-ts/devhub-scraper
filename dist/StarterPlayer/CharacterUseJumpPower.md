**CharacterUseJumpPower** determines the starting value of
[Humanoid.UseJumpPower](https://create.roblox.com/docs/reference/engine/classes/Humanoid#UseJumpPower) for a [Player](https://create.roblox.com/docs/reference/engine/classes/Player)'s [Character](https://create.roblox.com/docs/reference/engine/classes/Player#Character).
Toggling it will change which property is visible in the properties
window: [CharacterJumpHeight](https://create.roblox.com/docs/reference/engine/classes/StarterPlayer#CharacterJumpHeight) (false) or
[StarterPlayer.CharacterJumpPower](https://create.roblox.com/docs/reference/engine/classes/StarterPlayer#CharacterJumpPower) (true). Defaults to true.

Since this property is only relevant for characters being spawned in the
future, changing it will not change any existing player characters.
Changes to this property will only take effect when a player respawns.