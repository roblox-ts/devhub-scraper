This function returns whether the current environment is in 'Edit' mode. For example, Roblox Studio is in 'Edit Mode' when the game is not running.

IsEdit will return the inverse of [RunService:IsRunning](https://developer.roblox.com/en-us/api-reference/function/RunService/IsRunning) with one exception, if the simulation has been 'paused' then both IsEdit and [RunService:IsRunning](https://developer.roblox.com/en-us/api-reference/function/RunService/IsRunning) will return false.

See also
--------

*   [RunService:IsClient](https://developer.roblox.com/en-us/api-reference/function/RunService/IsClient)
*   [RunService:IsServer](https://developer.roblox.com/en-us/api-reference/function/RunService/IsServer)
*   [RunService:IsStudio](https://developer.roblox.com/en-us/api-reference/function/RunService/IsStudio)
*   [RunService:IsRunning](https://developer.roblox.com/en-us/api-reference/function/RunService/IsRunning)
*   [RunService:IsRunMode](https://developer.roblox.com/en-us/api-reference/function/RunService/IsRunMode)