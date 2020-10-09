The GetUserCFrame function returns a [CFrame](https://developer.roblox.com/en-us/api-reference/datatype/CFrame) describing the position and orientation of a specified [UserCFrame](https://developer.roblox.com/en-us/api-reference/enum/UserCFrame) virtual reality (VR) device. If the specified device is not connected, the function returns `DataType/CFrame|CFrame.new()`.

For example, the code snippet below prints the CFrame of the user's VR headset.

```lua
local userInputService = game:GetService("UserInputService")
local cframe = userInputService:GetUserCFrame(Enum.UserCFrame.Head)

print(cframe)
``` 

By using the function, players can implement features such as re-positioning the user's in-game character corresponding to the location of a connected VR device. This can be done by changing the _CFrame_ of the user's in-game body parts to match the _CFrame_ of the specified VR device using [UserCFrame](https://developer.roblox.com/en-us/api-reference/enum/UserCFrame) and [CFrame](https://developer.roblox.com/en-us/api-reference/datatype/CFrame) value arguments passed by the event.

See also
--------

*   [UserInputService.UserCFrameChanged](https://developer.roblox.com/en-us/api-reference/event/UserInputService/UserCFrameChanged), an event which fires when the [CFrame](https://developer.roblox.com/en-us/api-reference/datatype/CFrame) of a VR device changes
*   [VRService](https://developer.roblox.com/en-us/api-reference/class/VRService), a service used to implement VR support

As this event only fires locally, it can only be used in a [LocalScript](https://developer.roblox.com/en-us/api-reference/class/LocalScript).