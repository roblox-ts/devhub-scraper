The RequestNavigation function requests navigation to the specified
[`CFrame`](https://create.roblox.com/docs/reference/engine/datatypes/CFrame), using the specified [`Enum.UserCFrame`](https://create.roblox.com/docs/reference/engine/enums/UserCFrame) as the origin for
the visualizer parabola.

This can be used to incorporate virtual reality (VR) into your game by
providing a means to visualize a navigation path from the user's VR device
to a destination.

The [`VRService`](https://create.roblox.com/docs/reference/engine/classes/VRService) has a similar event,
[`VRService.NavigationRequested`](https://create.roblox.com/docs/reference/engine/classes/VRService#NavigationRequested), used to detect such requests. This
can also be used alongside the several [`UserInputService`](https://create.roblox.com/docs/reference/engine/classes/UserInputService) VR
functions and events.

Since VRService only runs client-side, this function will only work when
used in a [`LocalScript`](https://create.roblox.com/docs/reference/engine/classes/LocalScript).