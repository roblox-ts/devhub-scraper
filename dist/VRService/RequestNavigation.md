The RequestNavigation function requests navigation to the specified [CFrame](https://developer.roblox.com/en-us/api-reference/datatype/CFrame), using the specified [UserCFrame](https://developer.roblox.com/en-us/api-reference/enum/UserCFrame) as the origin for the visualizer parabola.

This can be used to incorporate virtual reality (VR) into your game by providing a means to visualize a navigation path from the user's VR device to a destination.

The [VRService](https://developer.roblox.com/en-us/api-reference/class/VRService) has a similar event, [VRService.NavigationRequested](https://developer.roblox.com/en-us/api-reference/event/VRService/NavigationRequested), used to detect such requests. This can also be used alongside the several `/UserInputService` VR functions and events.

Since VRService only runs client-side, this function will only work when used in a `/LocalScript`.