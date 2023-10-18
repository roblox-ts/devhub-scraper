This function returns whether the current environment is running on the
server.

If the code that invoked this method is running in a server context (in a
[`Script`](https://create.roblox.com/docs/reference/engine/classes/Script) or a [`ModuleScript`](https://create.roblox.com/docs/reference/engine/classes/ModuleScript) required by a [`Script`](https://create.roblox.com/docs/reference/engine/classes/Script))
then this method will return *true*. In all other cases, this function
will return *false*.

If this function returns true, then the current environment can access
server-only features like [`ServerStorage`](https://create.roblox.com/docs/reference/engine/classes/ServerStorage) or
[`ServerScriptService`](https://create.roblox.com/docs/reference/engine/classes/ServerScriptService).

See also:

- [`RunService:IsClient()`](https://create.roblox.com/docs/reference/engine/classes/RunService#IsClient)
- [`RunService:IsStudio()`](https://create.roblox.com/docs/reference/engine/classes/RunService#IsStudio)
- [`RunService:IsEdit()`](https://create.roblox.com/docs/reference/engine/classes/RunService#IsEdit)
- [`RunService:IsRunning()`](https://create.roblox.com/docs/reference/engine/classes/RunService#IsRunning)
- [`RunService:IsRunMode()`](https://create.roblox.com/docs/reference/engine/classes/RunService#IsRunMode)