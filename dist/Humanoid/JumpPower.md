Determines how much upwards force is applied to the [Humanoid](https://create.roblox.com/docs/reference/engine/classes/Humanoid) when
jumping. The starting value of this property is determined by the value of
[StarterPlayer.CharacterJumpPower](https://create.roblox.com/docs/reference/engine/classes/StarterPlayer#CharacterJumpPower), which defaults to 50 and is
constrained between 0 and 1000.

This property is only visible in the Properties window if
[Humanoid.UseJumpPower](https://create.roblox.com/docs/reference/engine/classes/Humanoid#UseJumpPower)` is set to **true**, as it would not be relevant
otherwise.

Note:

- Jumps are also influenced by the `Workspace/Gravity` property which
  determines the acceleration due to gravity.
- Although setting this property to 0 will prevent the `Humanoid` from
  jumping, developers are advised to disable the "Jumping" state using the
  `Humanoid/SetStateEnabled` function.