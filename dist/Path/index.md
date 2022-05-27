**Path** objects store the result of paths created by
[PathfindingService:CreatePath()](https://create.roblox.com/docs/reference/engine/classes/PathfindingService#CreatePath).

Once a path object is created, you can call
[Path:ComputeAsync()](https://create.roblox.com/docs/reference/engine/classes/Path#ComputeAsync) with a starting point and ending
point. This will attempt to compute a valid path for a character to move
along, based on default or custom parameters passed to
[CreatePath()](https://create.roblox.com/docs/reference/engine/classes/PathfindingService#CreatePath). If
[ComputeAsync()](https://create.roblox.com/docs/reference/engine/classes/Path#ComputeAsync) successfully finds a path, the [Path](https://create.roblox.com/docs/reference/engine/classes/Path)
object will have a [Path.Status](https://create.roblox.com/docs/reference/engine/classes/Path#Status) value of `Enum.PathStatus.Success`. Otherwise
the status will be `Enum.PathStatus.NoPath` which can occur if there are
obstacles between the two points (and no way around) or if the points are
inside of solid objects.

In addition to [ComputeAsync()](https://create.roblox.com/docs/reference/engine/classes/Path#ComputeAsync), [Path](https://create.roblox.com/docs/reference/engine/classes/Path) objects have the
[GetWaypoints()](https://create.roblox.com/docs/reference/engine/classes/Path#GetWaypoints) method which returns a list of waypoints
representing the points a character should follow in sequence to get from the
beginning to the end of the path.

Finally, [Path](https://create.roblox.com/docs/reference/engine/classes/Path) objects can be **connected** to the
[Path.Blocked](https://create.roblox.com/docs/reference/engine/classes/Path#Blocked) event. This event will fire if, at any time during
the path's existence, the path is blocked. Note that this can occur **behind**
a character moving along the path, not just in front of it.