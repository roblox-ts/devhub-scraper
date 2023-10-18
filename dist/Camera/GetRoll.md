This function returns, in radians, the current roll applied to the
[`Camera`](https://create.roblox.com/docs/reference/engine/classes/Camera) using [`Camera:SetRoll()`](https://create.roblox.com/docs/reference/engine/classes/Camera#SetRoll). Roll is defined as rotation
around the [`Camera`](https://create.roblox.com/docs/reference/engine/classes/Camera)'s Z-axis.

This function only returns roll applied using the [`Camera:SetRoll()`](https://create.roblox.com/docs/reference/engine/classes/Camera#SetRoll)
function. Roll manually applied to the [`Camera`](https://create.roblox.com/docs/reference/engine/classes/Camera)'s
[`Camera.CFrame`](https://create.roblox.com/docs/reference/engine/classes/Camera#CFrame) is not accounted for. To obtain the actual roll of
the [`Camera`](https://create.roblox.com/docs/reference/engine/classes/Camera), including roll manually applied, you can use the
following snippet:
```lua
local function getActualRoll()
	local camera = workspace.CurrentCamera

	local trueUp = Vector3.new(0, 1, 0)
	local cameraUp = camera:GetRenderCFrame().upVector

	return math.acos(trueUp:Dot(cameraUp))
end
```