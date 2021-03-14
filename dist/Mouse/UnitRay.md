The UnitRay property is a [Ray](https://developer.roblox.com/en-us/api-reference/datatype/Ray) directed toward the [Mouse](https://developer.roblox.com/en-us/api-reference/class/Mouse)'s position in 3D space (described by [Mouse.Hit](https://developer.roblox.com/en-us/api-reference/property/Mouse/Hit)). It originates from the [CFrame](https://developer.roblox.com/en-us/api-reference/property/Camera/CFrame) of the [Workspace.CurrentCamera](https://developer.roblox.com/en-us/api-reference/property/Workspace/CurrentCamera). Like all unit rays, it has a distance of 1.

local Players = game:GetService("Players")
local player = Players.LocalPlayer
local mouse = player:GetMouse()
print(mouse.UnitRay.Direction.magnitude) -- Always 1