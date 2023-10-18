If true, the [`Humanoid`](https://create.roblox.com/docs/reference/engine/classes/Humanoid) jumps with an upwards force equal to the
value of its [`Humanoid.JumpPower`](https://create.roblox.com/docs/reference/engine/classes/Humanoid#JumpPower) property or the height of
[`Humanoid.JumpHeight`](https://create.roblox.com/docs/reference/engine/classes/Humanoid#JumpHeight), depending on the value of
[`Humanoid.UseJumpPower`](https://create.roblox.com/docs/reference/engine/classes/Humanoid#UseJumpPower).

If [`Humanoid.UseJumpPower`](https://create.roblox.com/docs/reference/engine/classes/Humanoid#UseJumpPower) is set to true,
[`Humanoids`](https://create.roblox.com/docs/reference/engine/classes/Humanoid) are able to jump roughly 7.2 studs high by
default, depending on both the [`Workspace's`](https://create.roblox.com/docs/reference/engine/classes/Workspace)
[`Workspace.Gravity`](https://create.roblox.com/docs/reference/engine/classes/Workspace#Gravity), and the [`Humanoid.JumpPower`](https://create.roblox.com/docs/reference/engine/classes/Humanoid#JumpPower) of the
humanoid itself.

If [`Humanoid.UseJumpPower`](https://create.roblox.com/docs/reference/engine/classes/Humanoid#UseJumpPower) is set to false, the height of the jump
can be set explicitly with [`Humanoid.JumpHeight`](https://create.roblox.com/docs/reference/engine/classes/Humanoid#JumpHeight).