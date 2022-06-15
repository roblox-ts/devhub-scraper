The GetUserCFrame function returns a [CFrame](https://developer.roblox.com/en-us/api-reference/datatype/CFrame) describing the position & orientation of a specified virtual reality (VR) device.

This function should be used when implementing VR compatibility into a game to obtain and track the movement of a connected VR device.

By using the function, players can implement features such as re-positioning the user's in-game character corresponding to the location of a connected VR device. This can be done by changing the _CFrame_ of the user's in-game character to match the _CFrame_ of the specified VR device using the UserCFrame enum and _CFrame_ value arguments passed by the event.

The [VRService](https://developer.roblox.com/en-us/api-reference/class/VRService) service also provides an event [VRService.UserCFrameChanged](https://developer.roblox.com/en-us/api-reference/event/VRService/UserCFrameChanged) that automatically fires when the _CFrame_ of connected VR device changes - so long it is used in a LocalScript.

This can also be used alongside the several `/UserInputService` VR functions and events.

Since `/VRService` only runs client-side, this function will only work when used in a `/LocalScript`.