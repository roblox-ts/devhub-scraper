This function returns an array of all the [PathWaypoints](https://developer.roblox.com/en-us/api-reference/datatype/PathWaypoint) in a [Path](https://developer.roblox.com/en-us/api-reference/class/Path), as computed by [Path:ComputeAsync](https://developer.roblox.com/en-us/api-reference/function/Path/ComputeAsync).

Each waypoint in the array specifies a [Vector3](https://developer.roblox.com/en-us/api-reference/datatype/Vector3) position and [action](https://developer.roblox.com/en-us/api-reference/enum/PathWaypointAction) to take when this PathWaypoint is reached. The array is arranged in the order of waypoints from the path start to path end.

If a path could not be computed, this function will return an empty array.