Used to override the enabled state of virtual reality when a user has a VR device available to use. If the user has a VR device available and this value is false when the game starts, VR mode will not be initialized.

This setting is only displayed in Roblox's game menu if a VR device has ever been detected, and this is determined by the UserGameSettings' `UserGameSettings.HasEverUsedVR` property.

The value of this property cannot be read by LocalScripts. You should refer to the VRService's [VRService.VREnabled](https://developer.roblox.com/en-us/api-reference/property/VRService/VREnabled) property instead.