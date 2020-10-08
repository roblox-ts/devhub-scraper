The NavigationRequested event fires when navigation is requested from the VRService for a specified [UserCFrame](https://developer.roblox.com/en-us/api-reference/enum/UserCFrame) VR device.

This is fired with a [CFrame](https://developer.roblox.com/en-us/api-reference/datatype/CFrame) coordinate and specified UserCFrame indicating the device requesting the navigation.

This `/VRService` event can be used alongside `/UserInputService` service events and functions.

Since the event fires locally, it can only be used in a `/LocalScript`.