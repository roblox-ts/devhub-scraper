The **BodyGyro** object applies a torque (rotational force) on a
[`BasePart`](https://create.roblox.com/docs/reference/engine/classes/BasePart) such that it maintains a constant angular displacement, or
orientation. This allows for the creation of parts that point in a certain
direction, as if a real gyroscope were acting upon it. Essentially, it's the
rotational counterpart to a [`BodyPosition`](https://create.roblox.com/docs/reference/engine/classes/BodyPosition).

If you would like to maintain a constant angular velocity, use a
[`BodyAngularVelocity`](https://create.roblox.com/docs/reference/engine/classes/BodyAngularVelocity) instead.

The [`CFrame`](https://create.roblox.com/docs/reference/engine/classes/BodyGyro#CFrame) property controls the goal orientation.
Only the angular components of the `Datatype.CFrame` are used; position will
make no difference. [`MaxTorque`](https://create.roblox.com/docs/reference/engine/classes/BodyGyro#MaxTorque) limits the amount of
angular force that may be applied, [`P`](https://create.roblox.com/docs/reference/engine/classes/BodyGyro#P) controls the power
used in achieving the goal orientation, and [`D`](https://create.roblox.com/docs/reference/engine/classes/BodyGyro#D) controls
dampening behavior.