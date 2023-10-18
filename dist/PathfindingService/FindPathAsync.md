This function is used to find a [`Path`](https://create.roblox.com/docs/reference/engine/classes/Path) between two provided points.
This path uses the navigation grid created by [`PathfindingService`](https://create.roblox.com/docs/reference/engine/classes/PathfindingService)
and makes sure that the path can be followed by a regular-sized Roblox
character.

This function returns a [`Path`](https://create.roblox.com/docs/reference/engine/classes/Path) object which contains the coordinates
of the path. If no path is found between the two points, this function
will still return a [`Path`](https://create.roblox.com/docs/reference/engine/classes/Path) object, but that object's
[`Path.Status`](https://create.roblox.com/docs/reference/engine/classes/Path#Status) will be [`Enum.PathStatus`](https://create.roblox.com/docs/reference/engine/enums/PathStatus).

To get the waypoints of a [`Path`](https://create.roblox.com/docs/reference/engine/classes/Path) object, you can use the
[`Path:GetWaypoints()`](https://create.roblox.com/docs/reference/engine/classes/Path#GetWaypoints) function.