This function runs the game's simulation, running physics and scripts.

When the simulation is running, [`RunService:IsRunning()`](https://create.roblox.com/docs/reference/engine/classes/RunService#IsRunning) will return
*true*. However, [`RunService:IsRunMode()`](https://create.roblox.com/docs/reference/engine/classes/RunService#IsRunMode) will only return *true* if
the simulation was started using the 'Run' button in Roblox Studio. This
means when this function is used to start the simulation, IsRunMode will
return *false* even though the simulation is running.

The simulation can be paused using [`RunService:Pause()`](https://create.roblox.com/docs/reference/engine/classes/RunService#Pause) or the
'Pause' button in Roblox Studio. It can also be ended using
[`RunService:Stop()`](https://create.roblox.com/docs/reference/engine/classes/RunService#Stop).

Running the simulation can be used to assist with debugging in Roblox
Studio. Currently it is not possible to restore the game to the state it
was in prior to running the simulation if the simulation was started using
this function. If this is a problem, instead use the 'Run' button in
Roblox Studio.

See also:

- [`RunService:IsRunning()`](https://create.roblox.com/docs/reference/engine/classes/RunService#IsRunning)
- [`RunService:Pause()`](https://create.roblox.com/docs/reference/engine/classes/RunService#Pause)
- [`RunService:Stop()`](https://create.roblox.com/docs/reference/engine/classes/RunService#Stop)