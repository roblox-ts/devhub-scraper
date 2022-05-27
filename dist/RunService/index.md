**RunService** contains methods and events for time-management as well as for
managing the context in which a game or script is running. Methods like
[IsClient](https://create.roblox.com/docs/reference/engine/classes/RunService#IsClient), [IsServer](https://create.roblox.com/docs/reference/engine/classes/RunService#IsServer),
[IsStudio](https://create.roblox.com/docs/reference/engine/classes/RunService#IsStudio), can help you determine under what context code
is running. These methods are useful for ModuleScripts that may be required by
both client and server scripts. Furthermore, [IsStudio](https://create.roblox.com/docs/reference/engine/classes/RunService#IsStudio)
can be used to add special behaviors for in-studio testing.

RunService also houses events that allow your code to adhere to Roblox's
frame-by-frame loop, such as [Stepped](https://create.roblox.com/docs/reference/engine/classes/RunService#Stepped),
[Heartbeat](https://create.roblox.com/docs/reference/engine/classes/RunService#Heartbeat) and [RenderStepped](https://create.roblox.com/docs/reference/engine/classes/RunService#RenderStepped).
Selecting the proper event to use for any case is important, so you should
read Task Scheduler to make an informed decision.