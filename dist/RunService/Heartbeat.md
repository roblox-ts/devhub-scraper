The Heartbeat event fires every _frame_, after the physics simulation has completed. The _step_ argument indicates the time that has elapsed since the previous frame.

As Heartbeat fires every frame, it runs on a **variable frequency**. This means the rate will vary depending on the performance of the machine. If the game is running at 40 FPS, then Heartbeat will fire 40 times per second and the _step_ argument will be roughly 1/40th of a second.

The _step_ argument can be used to account for the variable frequency of this event, for example:

local RunService = game:GetService("RunService")

local RATE\_PER\_SECOND = 2

RunService.Heartbeat:Connect(function(step)
	local increment = RATE\_PER\_SECOND \* step
end)

There is no guarantee that functions connected to this event will fire at the exact same time, or in any specific order. For an alternative where the priority can be specified, see [RunService:BindToRenderStep](https://developer.roblox.com/en-us/api-reference/function/RunService/BindToRenderStep).