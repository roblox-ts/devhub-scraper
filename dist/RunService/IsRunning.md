Returns whether the game is currently running

The game is considered running when it is not in edit mode in Roblox Studio. This means, if the simulation has been run using the 'Run' or 'Play' buttons the game is running.

IsRunning will always return the inverse of [RunService:IsEdit](https://developer.roblox.com/en-us/api-reference/function/RunService/IsEdit) with one exception, if the simulation has been 'paused' then both [RunService:IsEdit](https://developer.roblox.com/en-us/api-reference/function/RunService/IsEdit) and IsRunning will return false.

RunService test function results
--------------------------------

See also
--------

*   [RunService:IsClient](https://developer.roblox.com/en-us/api-reference/function/RunService/IsClient)
*   [RunService:IsServer](https://developer.roblox.com/en-us/api-reference/function/RunService/IsServer)
*   [RunService:IsStudio](https://developer.roblox.com/en-us/api-reference/function/RunService/IsStudio)
*   [RunService:IsEdit](https://developer.roblox.com/en-us/api-reference/function/RunService/IsEdit)
*   [RunService:IsRunMode](https://developer.roblox.com/en-us/api-reference/function/RunService/IsRunMode)