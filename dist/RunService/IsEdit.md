This function returns whether the current environment is in 'Edit' mode.
For example, Roblox Studio is in 'Edit Mode' when the game is not running.

IsEdit will return the inverse of [`RunService:IsRunning()`](https://create.roblox.com/docs/reference/engine/classes/RunService#IsRunning) with one
exception, if the simulation has been 'paused' then both IsEdit and
[`RunService:IsRunning()`](https://create.roblox.com/docs/reference/engine/classes/RunService#IsRunning) will return false.

See also:

- [`RunService:IsClient()`](https://create.roblox.com/docs/reference/engine/classes/RunService#IsClient)
- [`RunService:IsServer()`](https://create.roblox.com/docs/reference/engine/classes/RunService#IsServer)
- [`RunService:IsStudio()`](https://create.roblox.com/docs/reference/engine/classes/RunService#IsStudio)
- [`RunService:IsRunning()`](https://create.roblox.com/docs/reference/engine/classes/RunService#IsRunning)
- [`RunService:IsRunMode()`](https://create.roblox.com/docs/reference/engine/classes/RunService#IsRunMode)