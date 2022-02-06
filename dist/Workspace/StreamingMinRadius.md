The **StreamingMinRadius** property indicates the radius around the player's character or the current [ReplicationFocus](https://developer.roblox.com/en-us/api-reference/property/Player/ReplicationFocus) in which content will be streamed in at the highest priority. Defaults to 64 studs.

Care should be taken when increasing the default minimum radius since doing so will require more memory and more server bandwidth at the expense of other components.

For a detailed explanation of game content streaming, best practices, and implementation notes, see [Game Content Streaming](https://developer.roblox.com/en-us/articles/content-streaming).

See also
--------

*   [Workspace.StreamingEnabled](https://developer.roblox.com/en-us/api-reference/property/Workspace/StreamingEnabled) which controls whether content streaming is enabled
*   [Workspace.StreamingTargetRadius](https://developer.roblox.com/en-us/api-reference/property/Workspace/StreamingTargetRadius)
*   [Workspace.StreamingPauseMode](https://developer.roblox.com/en-us/api-reference/property/Workspace/StreamingPauseMode)