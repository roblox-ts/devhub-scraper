When using the default camera scripts, the CameraSubject property has two
roles:

- Defining the object the [`Camera`](https://create.roblox.com/docs/reference/engine/classes/Camera) is to follow, in the case of the
*'Follow'*, *'Attach'*, *'Track'*, *'Watch'* and *'Custom'*
[`CameraTypes`](https://create.roblox.com/docs/reference/engine/classes/Camera#CameraType)
- For all [`CameraTypes`](https://create.roblox.com/docs/reference/engine/classes/Camera#CameraType) but *'Scriptable'*, the
object whose position the [`Camera`](https://create.roblox.com/docs/reference/engine/classes/Camera)'s [`Camera.Focus`](https://create.roblox.com/docs/reference/engine/classes/Camera#Focus) will be
set to

CameraSubject accepts a variety of [`Instances`](https://create.roblox.com/docs/reference/engine/classes/Instance). The default
camera scripts respond differently to different CameraSubject types:

- [`Humanoid`](https://create.roblox.com/docs/reference/engine/classes/Humanoid): By default the CameraSubject is set to the
[`LocalPlayer`](https://create.roblox.com/docs/reference/engine/classes/Player#LocalPlayer)'s [`Humanoid`](https://create.roblox.com/docs/reference/engine/classes/Humanoid). The camera
scripts will follow the [`Humanoid`](https://create.roblox.com/docs/reference/engine/classes/Humanoid) factoring in the
[`Humanoid`](https://create.roblox.com/docs/reference/engine/classes/Humanoid)'s current state and [`Humanoid.CameraOffset`](https://create.roblox.com/docs/reference/engine/classes/Humanoid#CameraOffset)
- [`BasePart`](https://create.roblox.com/docs/reference/engine/classes/BasePart): The camera scripts will follow the position of any
[`BasePart`](https://create.roblox.com/docs/reference/engine/classes/BasePart), with a vertical offset in the case of
[`VehicleSeats`](https://create.roblox.com/docs/reference/engine/classes/VehicleSeat)

You can configure the [`Camera`](https://create.roblox.com/docs/reference/engine/classes/Camera) to follow a [`Model`](https://create.roblox.com/docs/reference/engine/classes/Model) by setting
the CameraSubject to the model's [`Model.PrimaryPart`](https://create.roblox.com/docs/reference/engine/classes/Model#PrimaryPart).

The CameraSubject cannot be set to *nil*. If it is, it will revert to its
previous value.

To restore the CameraSubject to its default value, set it to the
[`LocalPlayer`](https://create.roblox.com/docs/reference/engine/classes/Player#LocalPlayer)'s [`Humanoid`](https://create.roblox.com/docs/reference/engine/classes/Humanoid) like so:
```lua
local Players = game:GetService("Players")

local localPlayer = Players.LocalPlayer

local function resetCameraSubject()
	if workspace.CurrentCamera and localPlayer.Character then
		local humanoid = localPlayer.Character:FindFirstChildOfClass("Humanoid")
		if humanoid then
			workspace.CurrentCamera.CameraSubject = humanoid
		end
	end
end
```