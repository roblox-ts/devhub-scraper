The angular velocity vector of this [part's](https://developer.roblox.com/en-us/api-reference/class/BasePart) assembly. It's the rate of change of orientation in radians per second.

Angular velocity is the same at every point of the assembly.

Setting the velocity directly may lead to unrealistic motion. Using [Torque](https://developer.roblox.com/en-us/api-reference/class/Torque) or [AngularVelocity](https://developer.roblox.com/en-us/api-reference/class/AngularVelocity) constraint is preferred, or use [BasePart:ApplyImpulse](https://developer.roblox.com/en-us/api-reference/function/BasePart/ApplyImpulse) if you want instantaneous change in velocity.