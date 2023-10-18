The UserCFrameEnabled event fires when a [`Enum.UserCFrame`](https://create.roblox.com/docs/reference/engine/enums/UserCFrame) gets enabled or
disabled.

This can be used alongside [`VRService:GetUserCFrameEnabled()`](https://create.roblox.com/docs/reference/engine/classes/VRService#GetUserCFrameEnabled) to
track whether a specified UserCFrame is enabled, and when its state
changes. It can also be used alongside [`UserInputService`](https://create.roblox.com/docs/reference/engine/classes/UserInputService) service
events and functions.

Since the event fires locally, it can only be used in a
[`LocalScript`](https://create.roblox.com/docs/reference/engine/classes/LocalScript).