The angular velocity vector of this [`part`](https://create.roblox.com/docs/reference/engine/classes/BasePart)'s assembly. It's
the rate of change of orientation in radians per second.

Angular velocity is the same at every point of the assembly.

Setting the velocity directly may lead to unrealistic motion. Using
[`Torque`](https://create.roblox.com/docs/reference/engine/classes/Torque) or [`AngularVelocity`](https://create.roblox.com/docs/reference/engine/classes/AngularVelocity) constraint is preferred, or use
[`BasePart:ApplyAngularImpulse()`](https://create.roblox.com/docs/reference/engine/classes/BasePart#ApplyAngularImpulse) if you want instantaneous change in
velocity.