A HumanoidController is an internal object responsible for translating PlayerAciton movements to the user's character (specifically, their [Humanoid](https://developer.roblox.com/en-us/api-reference/class/Humanoid)).

This object can be found inside of the [ControllerService](https://developer.roblox.com/en-us/api-reference/class/ControllerService), via:

local ControllerService = game:GetService("ControllerService")
local HumanoidController = ControllerService:FindFirstChildOfClass("HumanoidController")