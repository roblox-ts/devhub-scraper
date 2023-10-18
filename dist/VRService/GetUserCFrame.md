The GetUserCFrame function returns a [`CFrame`](https://create.roblox.com/docs/reference/engine/datatypes/CFrame) describing the
position & orientation of a specified virtual reality (VR) device as
an offset from a point in real world space.

This function should be used when implementing VR compatibility into a
game to obtain and track the movement of a connected VR device.

By using the function, players can implement features such as
re-positioning the user's in-game character corresponding to the location
of a connected VR device. This can be done by changing the *CFrame* of the
user's in-game character to match the *CFrame* of the specified VR device
using the UserCFrame enum and *CFrame* value arguments passed by the
event.

The [`VRService`](https://create.roblox.com/docs/reference/engine/classes/VRService) service also provides an event
[`VRService.UserCFrameChanged`](https://create.roblox.com/docs/reference/engine/classes/VRService#UserCFrameChanged) that automatically fires when the
*CFrame* of connected VR device changes - so long it is used in a
LocalScript.

Since [`VRService`](https://create.roblox.com/docs/reference/engine/classes/VRService) only runs client-side, this function will only
work when used in a [`LocalScript`](https://create.roblox.com/docs/reference/engine/classes/LocalScript).