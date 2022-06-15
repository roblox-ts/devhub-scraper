This function returns whether the 'Run' button has been pressed to run the simulation in Roblox Studio.

If the user has pressed 'Run', then this function will return _true_. This function will continue to return _true_ if the simulation has been paused using the 'Pause' button. However, once it has been stopped using the 'Stop' button it will revert to returning _false_.

Roblox Studio only enters run mode when the 'Run' button is pressed, not the 'Play' button. This function will also return false if the simulation was started using [RunService:Run](https://developer.roblox.com/en-us/api-reference/function/RunService/Run) rather than the 'Run' button.

RunService test function results
--------------------------------

See also
--------

*   [RunService:IsClient](https://developer.roblox.com/en-us/api-reference/function/RunService/IsClient)
*   [RunService:IsServer](https://developer.roblox.com/en-us/api-reference/function/RunService/IsServer)
*   [RunService:IsStudio](https://developer.roblox.com/en-us/api-reference/function/RunService/IsStudio)
*   [RunService:IsRunning](https://developer.roblox.com/en-us/api-reference/function/RunService/IsRunning)
*   [RunService:IsEdit](https://developer.roblox.com/en-us/api-reference/function/RunService/IsEdit)