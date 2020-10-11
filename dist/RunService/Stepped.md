The Stepped event fires every _frame_ prior to the physics simulation. The _step_ argument indicates the time that has elapsed since the previous frame.

As Stepped fires every frame, it runs on a **variable frequency**. This means the rate will vary depending on the performance of the machine. If the game is running at 40 FPS, then Stepped will fire 40 times per second and the _step_ argument will be roughly 1/40th of a second.

The _step_ argument can be used to account for the variable frequency of this event, for example:

```lua
local RunService = game:GetService("RunService")

local RATE_PER_SECOND = 2

RunService.Stepped:Connect(function(time, step)
    local increment = RATE_PER_SECOND * step
end)
``` 

There is no guarantee that functions connected to this event will fire at the exact same time, or in any specific order. For an alternative where the priority can be specified, see [RunService:BindToRenderStep](https://developer.roblox.com/en-us/api-reference/function/RunService/BindToRenderStep).