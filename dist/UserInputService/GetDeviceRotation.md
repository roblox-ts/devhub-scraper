This function returns an [InputObject](https://developer.roblox.com/en-us/api-reference/class/InputObject) and a [CFrame](https://developer.roblox.com/en-us/api-reference/datatype/CFrame) describing the device's current rotation vector.

This is fired with an InputObject. The _Position_ property of the input object is a `Enum/InputType|Enum.InputType.Gyroscope` that tracks the total rotation in each local device axis.

Device rotation can only be tracked on devices with a \`UserInputService/GyroscopeEnabled|gyroscope.

As this function fires locally, it can only be used in a [LocalScript](https://developer.roblox.com/en-us/api-reference/class/LocalScript).