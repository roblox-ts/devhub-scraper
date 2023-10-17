Determines how the constraint force will be limited. When set to
[`Magnitude`](https://create.roblox.com/docs/reference/engine/enums/ForceLimitMode), the constraint force will have a
magntiude less than [`MaxForce`](https://create.roblox.com/docs/reference/engine/classes/LinearVelocity#MaxForce). When set to
[`PerAxis`](https://create.roblox.com/docs/reference/engine/enums/ForceLimitMode), the force along each axis will be less than
the corresponding value in
[`MaxAxesForce`](https://create.roblox.com/docs/reference/engine/classes/LinearVelocity#MaxAxesForce) when
[`VelocityConstraintMode`](https://create.roblox.com/docs/reference/engine/classes/LinearVelocity#VelocityConstraintMode) is
[`Vector' or the corresponding value in `](https://create.roblox.com/docs/reference/engine/enums/VelocityConstraintMode)Class.LinearVelocity.MaxPlanarAxesForce|MaxPlanarAxesForce`when`Class.LinearVelocity.VelocityConstraintMode|VelocityConstraintMode`is`Enum.VelocityConstraintMode|Plane`.