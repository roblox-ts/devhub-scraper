Broken: This event is broken and should not be used

This event fires when the local user's [Camera](https://developer.roblox.com/en-us/api-reference/class/Camera) switches in and out of first person mode.

This event no longer functions and cannot be used by developers due to its security context.

You can instead check the distance between the [Camera's](https://developer.roblox.com/en-us/api-reference/class/Camera) [Camera.CFrame](https://developer.roblox.com/en-us/api-reference/property/Camera/CFrame) and [Camera.Focus](https://developer.roblox.com/en-us/api-reference/property/Camera/Focus) to determine if the local user is in first person mode. For example:

local camera = workspace.CurrentCamera
local distance = (camera.CFrame.p - camera.Focus.p).magnitude 
local isFirstPerson = distance <= 0.5