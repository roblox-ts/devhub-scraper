The **StreamingMinRadius** property indicates the radius around the
player's character or the current
[`ReplicationFocus`](https://create.roblox.com/docs/reference/engine/classes/Player#ReplicationFocus) in which content will be
streamed in at the highest priority. Defaults to 64 studs.

Care should be taken when increasing the default minimum radius since
doing so will require more memory and more server bandwidth at the expense
of other components.

See also:

- [`Workspace.StreamingEnabled`](https://create.roblox.com/docs/reference/engine/classes/Workspace#StreamingEnabled) which controls whether content
streaming is enabled
- [`Workspace.StreamingTargetRadius`](https://create.roblox.com/docs/reference/engine/classes/Workspace#StreamingTargetRadius)
- [`Workspace.StreamingIntegrityMode`](https://create.roblox.com/docs/reference/engine/classes/Workspace#StreamingIntegrityMode)