The CFrame property (not to be confused with [BasePart.CFrame](https://create.roblox.com/docs/reference/engine/classes/BasePart#CFrame)) determines
the target orientation towards which torque will be exerted. Since
[BodyGyro](https://create.roblox.com/docs/reference/engine/classes/BodyGyro) does not apply translational force, the
translational/positional component of the [CFrame](https://developer.roblox.com/en-us/api-reference/datatype/CFrame), `CFrame.p`,
is ignored. Consider using one of the following CFrame constructors in
setting this property: `CFrame.fromAxisAngle`, `CFrame.fromEulerAnglesXYZ`
or `CFrame.fromEulerAnglesYXZ`. Beware of
[gimbal lock](https://en.wikipedia.org/wiki/Gimbal_lock) as you choose
which of these methods and what angles (in radians). Additionally, you
could use `CFrame.new(gyro.Parent.Position, targetPosition)` in order to
have the BodyGyro "look at" a targetPosition ([Vector3](https://developer.roblox.com/en-us/api-reference/datatype/Vector3)).