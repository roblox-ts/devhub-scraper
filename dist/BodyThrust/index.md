The BodyThrust object applies (or exerts) a force relative to the part to which it is parented at a specific location. It behaves similar to a [BodyForce](https://developer.roblox.com/en-us/api-reference/class/BodyForce), except that this object's force applies at a specific point ([BodyThrust.Location](https://developer.roblox.com/en-us/api-reference/property/BodyThrust/Location)), allowing you to exert a [torque](https://en.wikipedia.org/wiki/Torque) (rotational force). To apply a force dynamically so that a part maintains a constant angular velocity, use a [BodyAngularVelocity](https://developer.roblox.com/en-us/api-reference/class/BodyAngularVelocity) instead. To apply a force dynamically so that a part maintains a constant orientation (angular position), use a [BodyGyro](https://developer.roblox.com/en-us/api-reference/class/BodyGyro).