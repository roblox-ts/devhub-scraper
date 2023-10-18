This function recenters the [`CFrame`](https://create.roblox.com/docs/reference/engine/datatypes/CFrame) of the VR headset to the
current orientation of the headset worn by the user. This means that the
headset's current orientation is set to [`CFrame`](https://create.roblox.com/docs/reference/engine/datatypes/CFrame).

Use this function to to move the headset CFrame to the center of the play
area if it seems to be at a weird offset.

This behaves identically to the [`VRService`](https://create.roblox.com/docs/reference/engine/classes/VRService) function,
[`VRService:RecenterUserHeadCFrame()`](https://create.roblox.com/docs/reference/engine/classes/VRService#RecenterUserHeadCFrame).

Since [`UserInputService`](https://create.roblox.com/docs/reference/engine/classes/UserInputService) is client-side only, this function can only
be used in a [`LocalScript`](https://create.roblox.com/docs/reference/engine/classes/LocalScript).