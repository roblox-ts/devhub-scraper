The BodyVelocity object applies a [force](https://en.wikipedia.org/wiki/Force) on a [BasePart](https://developer.roblox.com/en-us/api-reference/class/BasePart) such that it will maintain a constant velocity. The [BodyVelocity.Velocity](https://developer.roblox.com/en-us/api-reference/property/BodyVelocity/Velocity) property, not to be confused wtih [BasePart.Velocity](https://developer.roblox.com/en-us/api-reference/property/BasePart/Velocity), controls the goal velocity. This is the translational counterpart to a [BodyAngularVelocity](https://developer.roblox.com/en-us/api-reference/class/BodyAngularVelocity). If you need the part to move toward a goal position, use a [BodyPosition](https://developer.roblox.com/en-us/api-reference/class/BodyPosition) instead. If you need further control on a force applied to an object, consider using a [BodyForce](https://developer.roblox.com/en-us/api-reference/class/BodyForce) or [BodyThrust](https://developer.roblox.com/en-us/api-reference/class/BodyThrust) instead.

The strength of the force applied by this object is controlled by several factors, namely the difference between the part's current velocity and the goal velocity. This is multiplied by [P](https://developer.roblox.com/en-us/api-reference/property/BodyVelocity/P) (power) to either amplify or diminish it. The resulting force is then capped by [MaxForce](https://developer.roblox.com/en-us/api-reference/property/BodyVelocity/MaxForce). By setting [BodyVelocity.Velocity](https://developer.roblox.com/en-us/api-reference/property/BodyVelocity/Velocity) to `(0, 0, 0)` it is possible to simulate [Anchored](https://developer.roblox.com/en-us/api-reference/property/BasePart/Anchored) behavior with less strictness.