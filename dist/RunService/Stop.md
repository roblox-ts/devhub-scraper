This function ends the game's simulation if it is running.

The simulation can be started using [RunService:Run](https://developer.roblox.com/en-us/api-reference/function/RunService/Run) or the 'Run' button in Roblox Studio. When the simulation is stopped, [RunService:IsRunning](https://developer.roblox.com/en-us/api-reference/function/RunService/IsRunning) will return _false_ and [RunService:IsEdit](https://developer.roblox.com/en-us/api-reference/function/RunService/IsEdit) will return _true_.

In contrast to the 'Stop' button in Roblox Studio, calling this function will not restore the game to the state it was in prior to the simulation being run. This means any changes made to the game by the physics simulation and scripts will persist after the simulation has ended.

See also
--------

*   [RunService:IsRunning](https://developer.roblox.com/en-us/api-reference/function/RunService/IsRunning)
*   [RunService:Run](https://developer.roblox.com/en-us/api-reference/function/RunService/Run)
*   [RunService:Pause](https://developer.roblox.com/en-us/api-reference/function/RunService/Pause)