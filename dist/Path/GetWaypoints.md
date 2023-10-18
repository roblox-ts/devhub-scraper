This function returns an array of all the
[`PathWaypoints`](https://create.roblox.com/docs/reference/engine/datatypes/PathWaypoint) in a [`Path`](https://create.roblox.com/docs/reference/engine/classes/Path), as computed by
[`Path:ComputeAsync()`](https://create.roblox.com/docs/reference/engine/classes/Path#ComputeAsync).

Each waypoint in the array specifies a [`Vector3`](https://create.roblox.com/docs/reference/engine/datatypes/Vector3) position and
[`action`](https://create.roblox.com/docs/reference/engine/enums/PathWaypointAction) to take when this PathWaypoint is
reached. The array is arranged in the order of waypoints from the path
start to path end.

If a path could not be computed, this function will return an empty array.