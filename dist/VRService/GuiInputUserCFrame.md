The GuiInputUserCFrame property describes what [UserCFrame](https://developer.roblox.com/en-us/api-reference/enum/UserCFrame) is responsible for input in VR. For instance, if a VR headset is responsible, the value of this property will be UserCFrame.Head.

To check if Roblox detects any VR devices, which would be responsible for input in VR, you can check the [VRService.VREnabled](https://developer.roblox.com/en-us/api-reference/property/VRService/VREnabled) property.

Since [VRService](https://developer.roblox.com/en-us/api-reference/class/VRService) only runs client-side, this property will only work when used in a [LocalScript](https://developer.roblox.com/en-us/api-reference/class/LocalScript).