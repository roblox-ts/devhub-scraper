This function is outdated and no longer considered best practice.

This function sets the current roll, in radians, of the [Camera](https://developer.roblox.com/en-us/api-reference/class/Camera). The roll is applied after the [Camera.CFrame](https://developer.roblox.com/en-us/api-reference/property/Camera/CFrame) and represents the rotation around the [Camera's](https://developer.roblox.com/en-us/api-reference/class/Camera) Z-axis.

For example, the following would invert the [Camera](https://developer.roblox.com/en-us/api-reference/class/Camera):

workspace.CurrentCamera:SetRoll(math.pi) -- math.pi radians = 180 degrees

SetRoll has no effect on any roll applied using the [Camera.CFrame](https://developer.roblox.com/en-us/api-reference/property/Camera/CFrame) property. Roll applied using SetRoll is not reflected in the [Camera.CFrame](https://developer.roblox.com/en-us/api-reference/property/Camera/CFrame) property but is reflected in in the [CFrame](https://developer.roblox.com/en-us/api-reference/datatype/CFrame) returned by[Camera:GetRenderCFrame](https://developer.roblox.com/en-us/api-reference/function/Camera/GetRenderCFrame).

This function can only be used when the [Camera.CameraType](https://developer.roblox.com/en-us/api-reference/property/Camera/CameraType) is set to _'Scriptable'_, regardless of whether the default [camera scripts](http://robloxdev.com/articles/Movement-and-camera-controls) are being used. If it is used with any other [Camera.CameraType](https://developer.roblox.com/en-us/api-reference/property/Camera/CameraType) a warning is given in the output.

Any roll applied using this function will be lost when the [Camera.CameraType](https://developer.roblox.com/en-us/api-reference/property/Camera/CameraType) is changed from _'Scriptable'_.

To obtain the roll set using this function use [Camera:GetRoll](https://developer.roblox.com/en-us/api-reference/function/Camera/GetRoll).

As this function is outdated, you are advised to instead apply roll to the [Camera](https://developer.roblox.com/en-us/api-reference/class/Camera) using the [Camera.CFrame](https://developer.roblox.com/en-us/api-reference/property/Camera/CFrame) property. For example:

local currentCFrame = workspace.CurrentCamera.CFrame
local rollCFrame = CFrame.Angles(0, 0, roll)
workspace.CurrentCamera.CFrame = currentCFrame \* rollCFrame