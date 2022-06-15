The GetUserCFrameEnabled function returns true if the specified [UserCFrame](https://developer.roblox.com/en-us/api-reference/enum/UserCFrame) virtual reality device (VR) is available to be listened to.

This can be used to determine whether a specified VR device, _(e.g. UserCFrame.Head)_, is connected to the user's game. If the specified VR device is connected, is it enabled (_true_). Otherwise, it is disabled (_false_).

This can also be used alongside the several `/UserInputService` VR functions and events.

Since `/VRService` only runs client-side, this function will only work when used in a `/LocalScript`.