This function returns an [`InputObject`](https://create.roblox.com/docs/reference/engine/classes/InputObject) and a [`CFrame`](https://create.roblox.com/docs/reference/engine/datatypes/CFrame)
describing the device's current rotation vector.

This is fired with an InputObject. The *Position* property of the input
object is a [`Enum.InputType.Gyroscope`](https://create.roblox.com/docs/reference/engine/enums/InputType) that tracks the
total rotation in each local device axis.

Device rotation can only be tracked on devices with a
[`gyroscope`](https://create.roblox.com/docs/reference/engine/classes/UserInputService#GyroscopeEnabled).

As this function fires locally, it can only be used in a
[`LocalScript`](https://create.roblox.com/docs/reference/engine/classes/LocalScript).