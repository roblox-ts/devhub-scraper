The UserCFrameChanged even fires when a [`Enum.UserCFrame`](https://create.roblox.com/docs/reference/engine/enums/UserCFrame) is changed. For
instance, this event fires when the user moves a connected VR device.

This can be used alongside [`VRService:GetUserCFrame()`](https://create.roblox.com/docs/reference/engine/classes/VRService#GetUserCFrame) to track the
[`CFrame`](https://create.roblox.com/docs/reference/engine/datatypes/CFrame) coordinates of a VR devices, and when it changes/moves.
It can also be used alongside [`UserInputService`](https://create.roblox.com/docs/reference/engine/classes/UserInputService) service events and
functions.

Since the event fires locally, it can only be used in a
[`LocalScript`](https://create.roblox.com/docs/reference/engine/classes/LocalScript).