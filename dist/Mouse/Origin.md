The origin [Mouse](https://developer.roblox.com/en-us/api-reference/class/Mouse) property is a [CFrame](https://developer.roblox.com/en-us/api-reference/datatype/CFrame) indicating where the mouse originated from. It is positioned at the [Workspace.CurrentCamera](https://developer.roblox.com/en-us/api-reference/property/Workspace/CurrentCamera) and oriented toward the [Mouse](https://developer.roblox.com/en-us/api-reference/class/Mouse)'s 3D position.

[Mouse.UnitRay](https://developer.roblox.com/en-us/api-reference/property/Mouse/UnitRay) starts at the same position as Origin, and extends for a stud in the same direction.

local unitRay = mouse.UnitRay
local origin = mouse.Origin
-- unitRay.Direction = origin.p
-- unitRay.Direction ≈ origin.lookVector

For the position of the [Mouse](https://developer.roblox.com/en-us/api-reference/class/Mouse) in 3D space, see [Mouse.Hit](https://developer.roblox.com/en-us/api-reference/property/Mouse/Hit).