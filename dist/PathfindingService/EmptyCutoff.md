This function worked with the legacy pathfinding system. The pathfinding
system currently uses a navigation grid and the EmptyCutoff is unused.

When the [`PathfindingService`](https://create.roblox.com/docs/reference/engine/classes/PathfindingService) computes a path using
[`PathfindingService:ComputeRawPathAsync()`](https://create.roblox.com/docs/reference/engine/classes/PathfindingService#ComputeRawPathAsync) or
[`PathfindingService:ComputeRawPathAsync()`](https://create.roblox.com/docs/reference/engine/classes/PathfindingService#ComputeRawPathAsync) it uses the voxel
representation of the world. A voxel is one cube in a grid overlayed on
the world. In this case the voxels being used are 4x4x4. This property
sets the percent of a voxel has to be occupied to be considered empty.
Defaults to 0.16.