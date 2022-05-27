If [Workspace.StreamingEnabled](https://create.roblox.com/docs/reference/engine/classes/Workspace#StreamingEnabled) is activated, a game may behave in
unintended ways if a player somehow moves into a region of the world that
hasn't been streamed to them. The **streaming pause** feature helps manage
this by pausing the local physical simulation and normal character
movement if content within
[StreamingMinRadius](https://create.roblox.com/docs/reference/engine/classes/Workspace#StreamingMinRadius) is not yet streamed in.
Non-physical systems will continue to run (scripts will continue
executing, for example) and gameplay will resume after the engine has
loaded enough content to minimize further pauses.

To determine the pause status, you can utilize the [Player.GameplayPaused](https://create.roblox.com/docs/reference/engine/classes/Player#GameplayPaused)
property.

![undefined](https://prod.docsiteassets.roblox.com/assets/blt8ecbb827d16e40b5/Streaming-Pause-Screen.jpg)

See also:

- [Workspace.StreamingEnabled](https://create.roblox.com/docs/reference/engine/classes/Workspace#StreamingEnabled) which controls whether content streaming is
  enabled
- [Workspace.StreamingMinRadius](https://create.roblox.com/docs/reference/engine/classes/Workspace#StreamingMinRadius)
- [Workspace.StreamingTargetRadius](https://create.roblox.com/docs/reference/engine/classes/Workspace#StreamingTargetRadius)