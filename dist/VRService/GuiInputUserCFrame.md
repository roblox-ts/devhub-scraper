The GuiInputUserCFrame property describes what `Enum.UserCFrame` is
responsible for input in VR. For instance, if a VR headset is responsible,
the value of this property will be UserCFrame.Head.

To check if Roblox detects any VR devices, which would be responsible for
input in VR, you can check the [`VRService.VREnabled`](https://create.roblox.com/docs/reference/engine/classes/VRService#VREnabled) property.

Since [`VRService`](https://create.roblox.com/docs/reference/engine/classes/VRService) only runs client-side, this property will only
work when used in a [`LocalScript`](https://create.roblox.com/docs/reference/engine/classes/LocalScript).