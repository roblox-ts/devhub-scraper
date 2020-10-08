The **StreamingTargetRadius** property controls the maximum distance away from the player's character or the current [ReplicationFocus](https://developer.roblox.com/en-us/api-reference/property/Player/ReplicationFocus) in which content will be streamed in. Defaults to 1024 studs.

Note that the engine is allowed to retain previously loaded content beyond the target radius, memory permitting.

For a detailed explanation of game content streaming, best practices, and implementation notes, see `articles/content streaming|Game Content Streaming`.

See also
--------

*   [Workspace.StreamingEnabled](https://developer.roblox.com/en-us/api-reference/property/Workspace/StreamingEnabled) which controls whether content streaming is enabled
*   [Workspace.StreamingMinRadius](https://developer.roblox.com/en-us/api-reference/property/Workspace/StreamingMinRadius)
*   [Workspace.StreamingPauseMode](https://developer.roblox.com/en-us/api-reference/property/Workspace/StreamingPauseMode)