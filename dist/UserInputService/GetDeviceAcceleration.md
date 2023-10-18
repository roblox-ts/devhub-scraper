The GetDeviceAcceleration function determines the current acceleration of
the user's device. It returns an [`InputObject`](https://create.roblox.com/docs/reference/engine/classes/InputObject) that describes the
device's current acceleration.

In order for this to work, the user's device must have an enabled
accelerometer. To check if a user's device has an enabled accelerometer,
you can check the [`UserInputService.AccelerometerEnabled`](https://create.roblox.com/docs/reference/engine/classes/UserInputService#AccelerometerEnabled) property.

If you want to track when the user's device's acceleration changes
instead, you can use the
[`UserInputService.DeviceAccelerationChanged`](https://create.roblox.com/docs/reference/engine/classes/UserInputService#DeviceAccelerationChanged) event.

Since it only fires locally, it can only be used in a [`LocalScript`](https://create.roblox.com/docs/reference/engine/classes/LocalScript).