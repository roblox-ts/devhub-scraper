This function pauses the games' simulation if it is running, suspending
physics and scripts.

The simulation can be started using [`RunService:Run()`](https://create.roblox.com/docs/reference/engine/classes/RunService#Run) or the 'Run'
button in Roblox Studio. When the simulation is paused,
[`RunService:IsRunning()`](https://create.roblox.com/docs/reference/engine/classes/RunService#IsRunning) will return *false*.

Pausing the simulation can be used to assist with debugging in Roblox
Studio, it cannot be used in real game sessions.

See also:

- [`RunService:IsRunning()`](https://create.roblox.com/docs/reference/engine/classes/RunService#IsRunning)
- [`RunService:Run()`](https://create.roblox.com/docs/reference/engine/classes/RunService#Run)
- [`RunService:Stop()`](https://create.roblox.com/docs/reference/engine/classes/RunService#Stop)