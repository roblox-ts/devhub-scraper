This function returns whether the current environment is running on the
client.

If the code that invoked this method is running in a client context (in a
[`LocalScript`](https://create.roblox.com/docs/reference/engine/classes/LocalScript) or a [`ModuleScript`](https://create.roblox.com/docs/reference/engine/classes/ModuleScript) required by a
[`LocalScript`](https://create.roblox.com/docs/reference/engine/classes/LocalScript)) then this method will return *true*. In all other
cases, this function will return *false*.

If this function returns true, then the current environment can access
client-only features like [`RunService.RenderStepped`](https://create.roblox.com/docs/reference/engine/classes/RunService#RenderStepped) or
[`Players.LocalPlayer`](https://create.roblox.com/docs/reference/engine/classes/Players#LocalPlayer).
#### RunService test function results
| Environment | IsStudio | IsClient | IsServer | IsEdit | IsRunning | IsRunMode |
| - | - | - | - | - | - | - |
| Live Player | false | true | false |
| Live Server | false | false | true |
| Edit Mode | true | true | true | true | false | false |
| Edit Mode (Team Create) | true | true | false | true | false | false |
| Run Mode | true | true | true | false | true | true |
| Play Mode (Client) | true | true | false | false | true | false |
| Play Mode (Server) | true | false | true | false | true | true |
| Team Test Player | true | true | false | false | true | false |
| Legacy Play Mode † | true | true | true | false | true | false |

† 'Legacy Play Mode' refers to Play Mode with Accurate Play Solo
disabled

See also:

- [`RunService:IsServer()`](https://create.roblox.com/docs/reference/engine/classes/RunService#IsServer)
- [`RunService:IsStudio()`](https://create.roblox.com/docs/reference/engine/classes/RunService#IsStudio)
- [`RunService:IsEdit()`](https://create.roblox.com/docs/reference/engine/classes/RunService#IsEdit)
- [`RunService:IsRunning()`](https://create.roblox.com/docs/reference/engine/classes/RunService#IsRunning)
- [`RunService:IsRunMode()`](https://create.roblox.com/docs/reference/engine/classes/RunService#IsRunMode)