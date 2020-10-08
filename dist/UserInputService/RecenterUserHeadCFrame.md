This function recenters the [CFrame](https://developer.roblox.com/en-us/api-reference/datatype/CFrame) of the VR headset to the current orientation of the headset worn by the user. This means that the headset's current orientation is set to `CFrame.new()`.

Use this function to to move the headset CFrame to the center of the play area if it seems to be at a weird offset.

This behaves identically to the [VRService](https://developer.roblox.com/en-us/api-reference/class/VRService) function, [VRService:RecenterUserHeadCFrame](https://developer.roblox.com/en-us/api-reference/function/VRService/RecenterUserHeadCFrame).

Since [UserInputService](https://developer.roblox.com/en-us/api-reference/class/UserInputService) is client-side only, this function can only be used in a [LocalScript](https://developer.roblox.com/en-us/api-reference/class/LocalScript).