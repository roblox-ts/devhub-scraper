The UnitRay property is a `Datatype.Ray` directed toward the
[`Mouse`](https://create.roblox.com/docs/reference/engine/classes/Mouse)'s position in 3D space (described by [`Mouse.Hit`](https://create.roblox.com/docs/reference/engine/classes/Mouse#Hit)). It
originates from the [`CFrame`](https://create.roblox.com/docs/reference/engine/classes/Camera#CFrame) of the
[`Workspace.CurrentCamera`](https://create.roblox.com/docs/reference/engine/classes/Workspace#CurrentCamera). Like all unit rays, it has a distance
of 1.
```lua
local Players = game:GetService("Players")
local player = Players.LocalPlayer
local mouse = player:GetMouse()
print(mouse.UnitRay.Direction.magnitude) -- Always 1
```