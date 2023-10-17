This property describes whether the user's device has an accelerometer

An accelerometer is a component found in most mobile devices that measures
acceleration (change in speed).

For example, the following code snippet demonstrates how to check if the
user's device has an accelerometer.
```lua
local userInputService = game:GetService("UserInputService")

local accelerometerEnabled = UserInputService.AccelerometerEnabled
if accelerometerEnabled then
	print("Accelerometer enabled!")
else
	print("Accelerometer not enabled!")
end
```

If the device has an enabled accelerometer, you can get it's current
acceleration by using the [`UserInputService:GetDeviceAcceleration()`](https://create.roblox.com/docs/reference/engine/classes/UserInputService#GetDeviceAcceleration)
function or track when the device's acceleration changes by using the
[`UserInputService.DeviceAccelerationChanged`](https://create.roblox.com/docs/reference/engine/classes/UserInputService#DeviceAccelerationChanged) event.

As [`UserInputService`](https://create.roblox.com/docs/reference/engine/classes/UserInputService) is client-side only, this property can only be
used in a [`LocalScript`](https://create.roblox.com/docs/reference/engine/classes/LocalScript).