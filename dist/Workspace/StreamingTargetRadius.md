The **StreamingTargetRadius** property controls the maximum distance away
from the player's character or the current
[ReplicationFocus](https://create.roblox.com/docs/reference/engine/classes/Player#ReplicationFocus) in which content will be
streamed in. Defaults to 1024 studs.

Note that the engine is allowed to retain previously loaded content beyond
the target radius, memory permitting.

See also:

- [Workspace.StreamingEnabled](https://create.roblox.com/docs/reference/engine/classes/Workspace#StreamingEnabled) which controls whether content streaming is
  enabled
- [Workspace.StreamingMinRadius](https://create.roblox.com/docs/reference/engine/classes/Workspace#StreamingMinRadius)
- [Workspace.StreamingPauseMode](https://create.roblox.com/docs/reference/engine/classes/Workspace#StreamingPauseMode)