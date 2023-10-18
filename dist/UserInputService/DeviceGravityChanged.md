The [`UserInputService.DeviceGravityChanged`](https://create.roblox.com/docs/reference/engine/classes/UserInputService#DeviceGravityChanged) event fires when the
device's gravity [`Vector3`](https://create.roblox.com/docs/reference/engine/datatypes/Vector3) changes on a device that has an
accelerometer.

A device's gravity vector represent the force of gravity on each of the
device's X, Y, and Z axes. While gravity never changes, the force it
exerts on each axis changes when the device rotates and changes
orientation. The force value exerted on each axis is a unit vector ranging
from -1 to 1.

An accelerometer is a component found in most mobile devices that measures
acceleration (change in speed).

This event can be used to determine the real-world direction of the force
of gravity on a user's device. This even can then be used to simulate the
force of gravity on a user's device within the game, such as on in-game
objects (see example below).

To check if a user's device has an enabled accelerometer, see
[`UserInputService.AccelerometerEnabled`](https://create.roblox.com/docs/reference/engine/classes/UserInputService#AccelerometerEnabled). If the device has an
enabled accelerometer, you can use the
[`UserInputService:GetDeviceGravity()`](https://create.roblox.com/docs/reference/engine/classes/UserInputService#GetDeviceGravity) function to get the current
force of gravity on the user's device.