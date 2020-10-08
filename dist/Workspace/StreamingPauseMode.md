If [Workspace.StreamingEnabled](https://developer.roblox.com/en-us/api-reference/property/Workspace/StreamingEnabled) is activated, a game may behave in unintended ways if a player somehow moves into a region of the world that hasn't been streamed to them. The **streaming pause** feature helps manage this by pausing the local physical simulation and normal character movement if content within [StreamingMinRadius](https://developer.roblox.com/en-us/api-reference/property/Workspace/StreamingMinRadius) isn't yet streamed in. Non-physical systems will continue to run (scripts will continue executing, for example) and gameplay will resume after the engine has loaded enough content to minimize further pauses.

To determine the pause status, you can utilize the [Player.GameplayPaused](https://developer.roblox.com/en-us/api-reference/property/Player/GameplayPaused) property as outlined [here](https://developer.roblox.com/en-us/api-reference/class/articles/content streaming#customizing-pause-screen).

For a detailed explanation of game content streaming, best practices, and implementation notes, see `articles/content streaming|Game Content Streaming`.

![](https://developer.roblox.com/assets/blt8ecbb827d16e40b5/Streaming-Pause-Screen.jpg)

See Also
--------

*   [Workspace.StreamingEnabled](https://developer.roblox.com/en-us/api-reference/property/Workspace/StreamingEnabled) which controls whether content streaming is enabled
*   [Workspace.StreamingMinRadius](https://developer.roblox.com/en-us/api-reference/property/Workspace/StreamingMinRadius)
*   [Workspace.StreamingTargetRadius](https://developer.roblox.com/en-us/api-reference/property/Workspace/StreamingTargetRadius)