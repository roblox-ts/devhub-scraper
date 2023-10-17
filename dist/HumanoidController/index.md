A HumanoidController is an internal object responsible for translating
PlayerAction movements to the user's character (specifically, their
[`Humanoid`](https://create.roblox.com/docs/reference/engine/classes/Humanoid)).

This object can be found inside of the [`ControllerService`](https://create.roblox.com/docs/reference/engine/classes/ControllerService), via:
```lua
local ControllerService = game:GetService("ControllerService")
local HumanoidController = ControllerService:FindFirstChildOfClass("HumanoidController")
```