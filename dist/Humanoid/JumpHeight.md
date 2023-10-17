Provides control over the height a [`Humanoid`](https://create.roblox.com/docs/reference/engine/classes/Humanoid) jumps in studs. The
starting value of this property is determined by the value of
[`StarterPlayer.CharacterJumpHeight`](https://create.roblox.com/docs/reference/engine/classes/StarterPlayer#CharacterJumpHeight), which defaults to 7.2.

This property is only visible in the Properties window if
[`Humanoid.UseJumpPower`](https://create.roblox.com/docs/reference/engine/classes/Humanoid#UseJumpPower) is set to **false**, as it would not be
relevant otherwise.

This property can be used to adjust the height that a humanoid can jump,
allowing developers to remove jumping, allow dynamically adjustable jump
height based on character stats or raise the jump height (as if on the
moon or such).