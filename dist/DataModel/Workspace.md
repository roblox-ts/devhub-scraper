The Workspace property is a reference to the [Workspace](https://developer.roblox.com/en-us/api-reference/class/Workspace) service.

This property will always point to the [Workspace](https://developer.roblox.com/en-us/api-reference/class/Workspace) and will never be _nil_.

The [Workspace](https://developer.roblox.com/en-us/api-reference/class/Workspace) can also be accessed using the global variable `workspace` and the [ServiceProvider:GetService](https://developer.roblox.com/en-us/api-reference/function/ServiceProvider/GetService) function. For example:

workspace -- a global variable
game.Workspace -- a property of the DataModel (game)
game:GetService("Workspace") -- workspace is a service