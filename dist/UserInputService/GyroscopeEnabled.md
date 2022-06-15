This property describes whether the user's device has a gyroscope.

A gyroscope is an component found in most mobile devices that detects orientation and rotational speed.

If a user's device has a gyroscope, you can use incorporate it into your game using the [UserInputService:GetDeviceRotation](https://developer.roblox.com/en-us/api-reference/function/UserInputService/GetDeviceRotation) function and [UserInputService.DeviceRotationChanged](https://developer.roblox.com/en-us/api-reference/event/UserInputService/DeviceRotationChanged) event.

local UserInputService = game:GetService("UserInputService")

local gyroIsEnabled = UserInputService.GyroscopeEnabled
if (gyroIsEnabled) then
    print("Gyroscope is enabled!")
else
    print("Gyroscope is not enabled!")
end

As [UserInputService](https://developer.roblox.com/en-us/api-reference/class/UserInputService) is client-side only, this property can only be used in a [LocalScript](https://developer.roblox.com/en-us/api-reference/class/LocalScript).

See [this](https://developer.roblox.com/learn-roblox/cross-platform) page for articles on cross-platform development.