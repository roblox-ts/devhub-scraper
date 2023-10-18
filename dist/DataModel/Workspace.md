The Workspace property is a reference to the [`Workspace`](https://create.roblox.com/docs/reference/engine/classes/Workspace) service.

This property will always point to the [`Workspace`](https://create.roblox.com/docs/reference/engine/classes/Workspace) and will never be
*nil*.

The [`Workspace`](https://create.roblox.com/docs/reference/engine/classes/Workspace) can also be accessed using the global variable
`workspace` and the [`ServiceProvider:GetService()`](https://create.roblox.com/docs/reference/engine/classes/ServiceProvider#GetService) function. For
example:
```lua
workspace -- a global variable
game.Workspace -- a property of the DataModel (game)
game:GetService("Workspace") -- workspace is a service
```