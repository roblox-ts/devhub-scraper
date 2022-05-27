The BodyThrust object applies (or exerts) a force relative to the part to
which it is parented at a specific location. It behaves similar to a
[BodyForce](https://create.roblox.com/docs/reference/engine/classes/BodyForce), except that this object's force applies at a specific point
([BodyThrust.Location](https://create.roblox.com/docs/reference/engine/classes/BodyThrust#Location)), allowing you to exert a [torque][1] (rotational
force). To apply a force dynamically so that a part maintains a constant
angular velocity, use a [BodyAngularVelocity](https://create.roblox.com/docs/reference/engine/classes/BodyAngularVelocity) instead. To apply a force
dynamically so that a part maintains a constant orientation (angular
position), use a [BodyGyro](https://create.roblox.com/docs/reference/engine/classes/BodyGyro).