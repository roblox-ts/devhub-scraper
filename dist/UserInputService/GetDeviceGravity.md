This function returns an [`InputObject`](https://create.roblox.com/docs/reference/engine/classes/InputObject) describing the device's
current gravity vector.

The gravity vector is determined by the device's orientation relative to
the real-world force of gravity. For instance, if a device is perfectly
upright (portrait), the gravity vector is
[`Vector3.new(0, 0, -9.18)`](https://create.roblox.com/docs/reference/engine/datatypes/Vector3). If the left side of the
device is pointing down, the vector is Vector3.new(9.81, 0, 0). Finally,
if the back of the device is pointing down, the vector is Vector3.new(0,
-9.81, 0).

This function might be used to enable the user's device to impact or
control gravity within the game or move in-game objects such as a ball.

Gravity is only tracked for players using a device with an enabled
gyroscope - such as a mobile device.

To check if a user's device has an enabled gyroscope, check the value of
[`UserInputService.GyroscopeEnabled`](https://create.roblox.com/docs/reference/engine/classes/UserInputService#GyroscopeEnabled). If the device has an enabled
gyroscope, you can also use the
[`UserInputService.DeviceGravityChanged`](https://create.roblox.com/docs/reference/engine/classes/UserInputService#DeviceGravityChanged) event to track when force of
gravity on the user's device changes.

As [`UserInputService`](https://create.roblox.com/docs/reference/engine/classes/UserInputService) is client-side only, this function can only be
used in a [`LocalScript`](https://create.roblox.com/docs/reference/engine/classes/LocalScript).