This method will be **deprecated soon** in favor of
[`TryBeginRecording()`](https://create.roblox.com/docs/reference/engine/classes/ChangeHistoryService#TryBeginRecording).

[`ChangeHistoryService`](https://create.roblox.com/docs/reference/engine/classes/ChangeHistoryService) tracks plugin history as a stream of property
changes. [`SetWaypoint()`](https://create.roblox.com/docs/reference/engine/classes/ChangeHistoryService#SetWaypoint) creates
a cut in that stream of property changes so that the undo and redo actions
know where to stop.

By convention, user-invoked actions in Studio **must** call
[`SetWaypoint()`](https://create.roblox.com/docs/reference/engine/classes/ChangeHistoryService#SetWaypoint) *after*
completing their set of changes to the experience. Calling it **before** a
set of changes may clean up another misbehaving plugin which failed to set
a waypoint, but it's a poor reason to justify such usage in your own
plugin.