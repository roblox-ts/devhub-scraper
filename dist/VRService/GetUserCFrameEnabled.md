The GetUserCFrameEnabled function returns true if the specified
[`Enum.UserCFrame`](https://create.roblox.com/docs/reference/engine/enums/UserCFrame) virtual reality device (VR) is available to be listened
to.

This can be used to determine whether a specified VR device, *(e.g.
UserCFrame.Head)*, is connected to the user's game. If the specified VR
device is connected, is it enabled (*true*). Otherwise, it is disabled
(*false*).

This can also be used alongside the several [`UserInputService`](https://create.roblox.com/docs/reference/engine/classes/UserInputService) VR
functions and events.

Since [`VRService`](https://create.roblox.com/docs/reference/engine/classes/VRService) only runs client-side, this function will only
work when used in a [`LocalScript`](https://create.roblox.com/docs/reference/engine/classes/LocalScript).