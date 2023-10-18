The CFrame property (not to be confused with [`BasePart.CFrame`](https://create.roblox.com/docs/reference/engine/classes/BasePart#CFrame))
determines the target orientation towards which torque will be exerted.
Since [`BodyGyro`](https://create.roblox.com/docs/reference/engine/classes/BodyGyro) does not apply translational force, the
translational/positional component of the [`CFrame`](https://create.roblox.com/docs/reference/engine/datatypes/CFrame),
[`CFrame`](https://create.roblox.com/docs/reference/engine/datatypes/CFrame), is ignored. Consider using one of the following
CFrame constructors in setting this property:
[`CFrame`](https://create.roblox.com/docs/reference/engine/datatypes/CFrame), [`CFrame`](https://create.roblox.com/docs/reference/engine/datatypes/CFrame)
or [`CFrame`](https://create.roblox.com/docs/reference/engine/datatypes/CFrame). Beware of
[gimbal lock](https://create.roblox.com/docs/https://en.wikipedia.org/wiki/Gimbal_lock) as you choose
which of these methods and what angles (in radians). Additionally, you
could use `CFrame.new(gyro.Parent.Position, targetPosition)` in order to
have the BodyGyro "look at" a targetPosition ([`Vector3`](https://create.roblox.com/docs/reference/engine/datatypes/Vector3)).