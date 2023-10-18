Returns whether the game is currently running

The game is considered running when it is not in edit mode in Roblox
Studio. This means, if the simulation has been run using the 'Run' or
'Play' buttons the game is running.

IsRunning will always return the inverse of [`RunService:IsEdit()`](https://create.roblox.com/docs/reference/engine/classes/RunService#IsEdit)
with one exception, if the simulation has been 'paused' then both
[`RunService:IsEdit()`](https://create.roblox.com/docs/reference/engine/classes/RunService#IsEdit) and IsRunning will return false.
#### RunService test function results

See also:

- [`RunService:IsClient()`](https://create.roblox.com/docs/reference/engine/classes/RunService#IsClient)
- [`RunService:IsServer()`](https://create.roblox.com/docs/reference/engine/classes/RunService#IsServer)
- [`RunService:IsStudio()`](https://create.roblox.com/docs/reference/engine/classes/RunService#IsStudio)
- [`RunService:IsEdit()`](https://create.roblox.com/docs/reference/engine/classes/RunService#IsEdit)
- [`RunService:IsRunMode()`](https://create.roblox.com/docs/reference/engine/classes/RunService#IsRunMode)