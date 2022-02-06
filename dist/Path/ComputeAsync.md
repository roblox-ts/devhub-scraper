This function computes a [Path](https://developer.roblox.com/en-us/api-reference/class/Path) from a start position to an end position. This function is not automatically called when a path is created and must be invoked each time the path needs to be updated.

Once the Path is computed, it will have a series of waypoints that, when followed, can lead a character along the path. These points are gathered with the [Path:GetWaypoints](https://developer.roblox.com/en-us/api-reference/function/Path/GetWaypoints) function.

See also
--------

*   [Pathfinding](https://developer.roblox.com/en-us/articles/Pathfinding), provides an in-depth pathfinding walkthrough