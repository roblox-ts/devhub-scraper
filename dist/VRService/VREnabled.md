This property describes whether the user is using a virtual reality (VR) device.

If a VR device is enabled, you can interact with its location and movement through functions such as `UserInputService/GetUserCFrame``. You can also react to VR device movement using the`UserInputService/UserCFrameChanged\` event.

```lua
local userInputService = game:GetService("UserInputService")

local isUsingVR = userInputService.VREnabled
if (isUsingVR) then
    print("User is using a VR headset!")
else
    print("User is not using a VR headset!")
end
``` 

As [UserInputService](https://developer.roblox.com/en-us/api-reference/class/UserInputService) isclient-side only, this property can only be used in a [LocalScript](https://developer.roblox.com/en-us/api-reference/class/LocalScript).

See [this](https://developer.roblox.com/articles/Virtual-Reality-Best-Practices) article for VR best practices.

See also
--------

*   [VRService](https://developer.roblox.com/en-us/api-reference/class/VRService)
*   [Camera.HeadLocked](https://developer.roblox.com/en-us/api-reference/property/Camera/HeadLocked)
*   [UserInputService:GetUserCFrame](https://developer.roblox.com/en-us/api-reference/function/UserInputService/GetUserCFrame)
*   [UserInputService.UserCFrameChanged](https://developer.roblox.com/en-us/api-reference/event/UserInputService/UserCFrameChanged)