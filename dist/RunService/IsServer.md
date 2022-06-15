This function returns whether the current environment is running on the server.

If the code that invoked this method is running in a server context (in a [Script](https://developer.roblox.com/en-us/api-reference/class/Script) or a [ModuleScript](https://developer.roblox.com/en-us/api-reference/class/ModuleScript) required by a [Script](https://developer.roblox.com/en-us/api-reference/class/Script)) then this method will return _true_. In all other cases, this function will return _false_.

If this function returns true, then the current environment can access server-only features like [ServerStorage](https://developer.roblox.com/en-us/api-reference/class/ServerStorage) or [ServerScriptService](https://developer.roblox.com/en-us/api-reference/class/ServerScriptService).

See also
--------

*   [RunService:IsClient](https://developer.roblox.com/en-us/api-reference/function/RunService/IsClient)
*   [RunService:IsStudio](https://developer.roblox.com/en-us/api-reference/function/RunService/IsStudio)
*   [RunService:IsEdit](https://developer.roblox.com/en-us/api-reference/function/RunService/IsEdit)
*   [RunService:IsRunning](https://developer.roblox.com/en-us/api-reference/function/RunService/IsRunning)
*   [RunService:IsRunMode](https://developer.roblox.com/en-us/api-reference/function/RunService/IsRunMode)