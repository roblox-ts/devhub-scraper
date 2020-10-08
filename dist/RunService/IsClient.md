This function returns whether the current environment is running on the client.

If the code that invoked this method is running in a client context (in a [LocalScript](https://developer.roblox.com/en-us/api-reference/class/LocalScript) or a [ModuleScript](https://developer.roblox.com/en-us/api-reference/class/ModuleScript) required by a [LocalScript](https://developer.roblox.com/en-us/api-reference/class/LocalScript)) then this method will return _true_. In all other cases, this function will return _false_.

If this function returns true, then the current environment can access client-only features like [RunService.RenderStepped](https://developer.roblox.com/en-us/api-reference/event/RunService/RenderStepped) or [Players.LocalPlayer](https://developer.roblox.com/en-us/api-reference/property/Players/LocalPlayer).

RunService test function results
--------------------------------

Environment

IsStudio

IsClient

IsServer

IsEdit

IsRunning

IsRunMode

Live Player

false

true

false

Live Server

false

false

true

Edit Mode

true

true

true

true

false

false

Edit Mode (Team Create)

true

true

false

true

false

false

Run Mode

true

true

true

false

true

true

Play Mode (Client)

true

true

false

false

true

false

Play Mode (Server)

true

false

true

false

true

true

Team Test Player

true

true

false

false

true

false

Legacy Play Mode\[^1\] 

true

true

true

false

true

false

See also
--------

*   [RunService:IsServer](https://developer.roblox.com/en-us/api-reference/function/RunService/IsServer)
*   [RunService:IsStudio](https://developer.roblox.com/en-us/api-reference/function/RunService/IsStudio)
*   [RunService:IsEdit](https://developer.roblox.com/en-us/api-reference/function/RunService/IsEdit)
*   [RunService:IsRunning](https://developer.roblox.com/en-us/api-reference/function/RunService/IsRunning)
*   [RunService:IsRunMode](https://developer.roblox.com/en-us/api-reference/function/RunService/IsRunMode)

\[^1\]: 'Legacy Play Mode' refers to Play Mode with Accurate Play Solo disabled