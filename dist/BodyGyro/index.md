The **BodyGyro** object applies a torque (rotational force) on a [BasePart](https://developer.roblox.com/en-us/api-reference/class/BasePart) such that it maintains a constant angular displacement, or orientation. This allows for the creation of parts that point in a certain direction, as if a real gyroscope were acting upon it. Essentially, it's the rotational counterpart to a [BodyPosition](https://developer.roblox.com/en-us/api-reference/class/BodyPosition).

If you would like to maintain a constant angular velocity, use a [BodyAngularVelocity](https://developer.roblox.com/en-us/api-reference/class/BodyAngularVelocity) instead.

The [CFrame](https://developer.roblox.com/en-us/api-reference/property/BodyGyro/CFrame) property controls the goal orientation. Only the angular components of the [CFrame](https://developer.roblox.com/en-us/api-reference/datatype/CFrame) are used; position will make no difference. [MaxTorque](https://developer.roblox.com/en-us/api-reference/property/BodyGyro/MaxTorque) limits the amount of angular force that may be applied, [P](https://developer.roblox.com/en-us/api-reference/property/BodyGyro/P) controls the power used in achieving the goal orientation, and [D](https://developer.roblox.com/en-us/api-reference/property/BodyGyro/D) controls dampening behavior.

Setting the Orientation
-----------------------

Like all [CFrame](https://developer.roblox.com/en-us/api-reference/datatype/CFrame) properties, the [BodyGyro.CFrame](https://developer.roblox.com/en-us/api-reference/property/BodyGyro/CFrame) property isn't editable in the **Properties** window of Studio. Since there's no physical component to a **BodyGyro**, you should use scripting to set the [BodyGyro.CFrame](https://developer.roblox.com/en-us/api-reference/property/BodyGyro/CFrame).

A common technique for setting the goal orientation is to set the [BodyGyro.CFrame](https://developer.roblox.com/en-us/api-reference/property/BodyGyro/CFrame) to a part's [CFrame](https://developer.roblox.com/en-us/api-reference/property/BasePart/CFrame). For example:

```Lua
workspace.Part.BodyGyro.CFrame = workspace.Part.CFrame
``` 

You can also use a [CFrame](https://developer.roblox.com/en-us/api-reference/datatype/CFrame) **constructor** which initializes rotation such as `CFrame.fromAxisAngle`, `CFrame.fromEulerAnglesXYZ`, or `CFrame.fromEulerAnglesYXZ`. Alternatively, you can use the following structure to make the body gyro “look at” a `targetPosition`.

```Lua
CFrame.new(BodyGyro.Parent.Position, targetPosition)
``` 

Troubleshooting
---------------

*   If the assembly isn't moving at all, it most likely has mass larger than what the **BodyGyro** can move. Try raising the [MaxTorque](https://developer.roblox.com/en-us/api-reference/property/BodyGyro/MaxTorque) and/or [P](https://developer.roblox.com/en-us/api-reference/property/BodyGyro/P) (power) properties. You should also check that no [Anchored](https://developer.roblox.com/en-us/api-reference/property/BasePart/Anchored) parts are within the assembly or in the way of the assembly.
*   If the assembly isn't moving on all axes, double check the axis in question has sufficient [MaxTorque](https://developer.roblox.com/en-us/api-reference/property/BodyGyro/MaxTorque). Alternatively, if the part allows movement on an axis and shouldn't, be sure the [MaxTorque](https://developer.roblox.com/en-us/api-reference/property/BodyGyro/MaxTorque) is non-zero on that axis and refine the manner in which you are setting the **BodyGyro** [CFrame](https://developer.roblox.com/en-us/api-reference/property/BodyGyro/CFrame).
*   If the assembly is moving too quickly, consider raising the [D](https://developer.roblox.com/en-us/api-reference/property/BodyGyro/D) (dampening) property.
*   If the assembly is moving too slowly, consider lowering the [D](https://developer.roblox.com/en-us/api-reference/property/BodyGyro/D) (dampening) property. Also consider raising the [MaxTorque](https://developer.roblox.com/en-us/api-reference/property/BodyGyro/MaxTorque) and/or [P](https://developer.roblox.com/en-us/api-reference/property/BodyGyro/P) (power) properties.
*   Any assembly containing a part that contains a **BodyGyro** or [BodyPosition](https://developer.roblox.com/en-us/api-reference/class/BodyPosition) will not be simulated when interacting with a player unless that player is the `/articles/Network Ownership|network owner` of the assembly.