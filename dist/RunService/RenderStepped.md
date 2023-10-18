The RenderStepped event fires every *frame*, prior to the frame being
rendered. The *step* argument indicates the time that has elapsed since
the previous frame.

RenderStepped does not run in parallel to Roblox's rendering tasks and
code connected to RenderStepped must be executed prior to the frame being
rendered. This can lead to significant performance issues if RenderStepped
is used inappropriately. To avoid this, only use RenderStepped for code
that works with the [`camera`](https://create.roblox.com/docs/reference/engine/classes/Workspace#CurrentCamera) or
[`character`](https://create.roblox.com/docs/reference/engine/classes/Player#Character). Otherwise,
[`RunService.Heartbeat`](https://create.roblox.com/docs/reference/engine/classes/RunService#Heartbeat) should be used.

As RenderStepped fires every frame, it runs on a **variable frequency**.
This means the rate will vary depending on the performance of the machine.
If the game is running at 40 FPS, then RenderStepped will fire 40 times
per second and the *step* argument will be roughly 1/40th of a second.

The *step* argument can be used to account for the variable frequency of
this event, for example:
```lua
local RunService = game:GetService("RunService")

local RATE_PER_SECOND = 2

RunService.RenderStepped:Connect(function(step)
	local increment = RATE_PER_SECOND * step
end)
```

There is no guarantee that functions connected to this event will fire at
the exact same time, or in any specific order. For an alternative where
the priority can be specified, see [`RunService:BindToRenderStep()`](https://create.roblox.com/docs/reference/engine/classes/RunService#BindToRenderStep).

As RenderStepped is client-side only, it can be used in a
[`LocalScript`](https://create.roblox.com/docs/reference/engine/classes/LocalScript) or a [`ModuleScript`](https://create.roblox.com/docs/reference/engine/classes/ModuleScript) required by a LocalScript.