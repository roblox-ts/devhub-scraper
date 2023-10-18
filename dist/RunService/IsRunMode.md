This function returns whether the 'Run' button has been pressed to run the
simulation in Roblox Studio.

If the user has pressed 'Run', then this function will return *true*. This
function will continue to return *true* if the simulation has been paused
using the 'Pause' button. However, once it has been stopped using the
'Stop' button it will revert to returning *false*.

Roblox Studio only enters run mode when the 'Run' button is pressed, not
the 'Play' button. This function will also return false if the simulation
was started using [`RunService:Run()`](https://create.roblox.com/docs/reference/engine/classes/RunService#Run) rather than the 'Run' button.
#### RunService test function results

See also:

- [`RunService:IsClient()`](https://create.roblox.com/docs/reference/engine/classes/RunService#IsClient)
- [`RunService:IsServer()`](https://create.roblox.com/docs/reference/engine/classes/RunService#IsServer)
- [`RunService:IsStudio()`](https://create.roblox.com/docs/reference/engine/classes/RunService#IsStudio)
- [`RunService:IsRunning()`](https://create.roblox.com/docs/reference/engine/classes/RunService#IsRunning)
- [`RunService:IsEdit()`](https://create.roblox.com/docs/reference/engine/classes/RunService#IsEdit)