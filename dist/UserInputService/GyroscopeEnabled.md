This property describes whether the user's device has a gyroscope.

A gyroscope is an component found in most mobile devices that detects
orientation and rotational speed.

If a user's device has a gyroscope, you can use incorporate it into your
game using the [UserInputService:GetDeviceRotation](https://create.roblox.com/docs/reference/engine/classes/UserInputService#GetDeviceRotation) function and
[UserInputService.DeviceRotationChanged](https://create.roblox.com/docs/reference/engine/classes/UserInputService#DeviceRotationChanged) event.

```lua
local UserInputService = game:GetService("UserInputService")

local gyroIsEnabled = UserInputService.GyroscopeEnabled
if (gyroIsEnabled) then
    print("Gyroscope is enabled!")
else
    print("Gyroscope is not enabled!")
end
```

As `UserInputService` is client-side only, this property can only be used
in a `LocalScript`.

See [this][1] page for articles on cross-platform development.

[1]: /learn-roblox/cross-platform