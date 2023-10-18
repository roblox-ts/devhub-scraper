This function ends the game's simulation if it is running.

The simulation can be started using [`RunService:Run()`](https://create.roblox.com/docs/reference/engine/classes/RunService#Run) or the 'Run'
button in Roblox Studio. When the simulation is stopped,
[`RunService:IsRunning()`](https://create.roblox.com/docs/reference/engine/classes/RunService#IsRunning) will return *false* and
[`RunService:IsEdit()`](https://create.roblox.com/docs/reference/engine/classes/RunService#IsEdit) will return *true*.

In contrast to the 'Stop' button in Roblox Studio, calling this function
will not restore the game to the state it was in prior to the simulation
being run. This means any changes made to the game by the physics
simulation and scripts will persist after the simulation has ended.

See also:

- [`RunService:IsRunning()`](https://create.roblox.com/docs/reference/engine/classes/RunService#IsRunning)
- [`RunService:Run()`](https://create.roblox.com/docs/reference/engine/classes/RunService#Run)
- [`RunService:Pause()`](https://create.roblox.com/docs/reference/engine/classes/RunService#Pause)