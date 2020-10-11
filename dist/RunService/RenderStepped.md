The RenderStepped event fires every _frame_, prior to the frame being rendered. The _step_ argument indicates the time that has elapsed since the previous frame.

RenderStepped does not run in parallel to Roblox's rendering tasks and code connected to RenderStepped must be executed prior to the frame being rendered. This can lead to significant performance issues if RenderStepped is used inappropriately. To avoid this, only use RenderStepped for code that works with the [camera](https://developer.roblox.com/en-us/api-reference/property/Workspace/CurrentCamera) or [character](https://developer.roblox.com/en-us/api-reference/property/Player/Character). Otherwise, [RunService.Heartbeat](https://developer.roblox.com/en-us/api-reference/event/RunService/Heartbeat) should be used.

As RenderStepped fires every frame, it runs on a **variable frequency**. This means the rate will vary depending on the performance of the machine. If the game is running at 40 FPS, then RenderStepped will fire 40 times per second and the _step_ argument will be roughly 1/40th of a second.

The _step_ argument can be used to account for the variable frequency of this event, for example:

```lua
local RunService = game:GetService("RunService")

local RATE_PER_SECOND = 2

RunService.RenderStepped:Connect(function(step)
    local increment = RATE_PER_SECOND * step
end)
``` 

There is no guarantee that functions connected to this event will fire at the exact same time, or in any specific order. For an alternative where the priority can be specified, see [RunService:BindToRenderStep](https://developer.roblox.com/en-us/api-reference/function/RunService/BindToRenderStep).

As RenderStepped is client-side only, it can be used in a [LocalScript](https://developer.roblox.com/en-us/api-reference/class/LocalScript) or a [ModuleScript](https://developer.roblox.com/en-us/api-reference/class/ModuleScript) required by a LocalScript.