When using the default [camera scripts](http://robloxdev.com/articles/Movement-and-camera-controls), the CameraSubject property has two roles:

*   Defining the object the [Camera](https://developer.roblox.com/en-us/api-reference/class/Camera) is to follow, in the case of the _'Follow'_, _'Attach'_, _'Track'_, _'Watch'_ and _'Custom'_ [CameraTypes](https://developer.roblox.com/en-us/api-reference/property/Camera/CameraType)
*   For all [CameraTypes](https://developer.roblox.com/en-us/api-reference/property/Camera/CameraType) but _'Scriptable'_, the object whose position the `Camera|Camera's` [Camera.Focus](https://developer.roblox.com/en-us/api-reference/property/Camera/Focus) will be set to

CameraSubject accepts a variety of [Instances](https://developer.roblox.com/en-us/api-reference/class/Instance). The default [camera scripts](http://robloxdev.com/articles/Movement-and-camera-controls) respond differently to different CameraSubject types:

*   [Humanoid](https://developer.roblox.com/en-us/api-reference/class/Humanoid): By default the CameraSubject is set to the `Player/LocalPlayer|LocalPlayer's` [Humanoid](https://developer.roblox.com/en-us/api-reference/class/Humanoid). The camera scripts will follow the [Humanoid](https://developer.roblox.com/en-us/api-reference/class/Humanoid) factoring in the `Humanoid|Humanoid's` current state and [Humanoid.CameraOffset](https://developer.roblox.com/en-us/api-reference/property/Humanoid/CameraOffset)
*   [BasePart](https://developer.roblox.com/en-us/api-reference/class/BasePart): The camera scripts will follow the position of any [BasePart](https://developer.roblox.com/en-us/api-reference/class/BasePart), with a vertical offset in the case of [VehicleSeats](https://developer.roblox.com/en-us/api-reference/class/VehicleSeat)

You can configure the [Camera](https://developer.roblox.com/en-us/api-reference/class/Camera) to follow a [Model](https://developer.roblox.com/en-us/api-reference/class/Model) by setting the CameraSubject to the model's[Model.PrimaryPart](https://developer.roblox.com/en-us/api-reference/property/Model/PrimaryPart).

The CameraSubject cannot be set to _nil_. If it is, it will revert to its previous value.

To restore the CameraSubject to its default value, set it to the `Player/LocalPlayer|LocalPlayer's` [Humanoid](https://developer.roblox.com/en-us/api-reference/class/Humanoid) like so:

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