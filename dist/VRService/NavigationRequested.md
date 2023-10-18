The NavigationRequested event fires when navigation is requested from the
VRService for a specified [`Enum.UserCFrame`](https://create.roblox.com/docs/reference/engine/enums/UserCFrame) VR device.

This is fired with a [`CFrame`](https://create.roblox.com/docs/reference/engine/datatypes/CFrame) coordinate and specified UserCFrame
indicating the device requesting the navigation.

This [`VRService`](https://create.roblox.com/docs/reference/engine/classes/VRService) event can be used alongside
[`UserInputService`](https://create.roblox.com/docs/reference/engine/classes/UserInputService) service events and functions.

Since the event fires locally, it can only be used in a
[`LocalScript`](https://create.roblox.com/docs/reference/engine/classes/LocalScript).