Determines how the constraint force will be limited. When set to
`Enum.ForceLimitMode|Magnitude`, the constraint force will have a
magntiude less than [`MaxForce`](https://create.roblox.com/docs/reference/engine/classes/LinearVelocity#MaxForce). When set to
`Enum.ForceLimitMode|PerAxis`, the force along each axis will be less than
the corresponding value in
[`MaxAxesForce`](https://create.roblox.com/docs/reference/engine/classes/LinearVelocity#MaxAxesForce) when
[`VelocityConstraintMode`](https://create.roblox.com/docs/reference/engine/classes/LinearVelocity#VelocityConstraintMode) is
`Enum.VelocityConstraintMode|Vector' or the corresponding value in `Class.LinearVelocity.MaxPlanarAxesForce|MaxPlanarAxesForce`when`Class.LinearVelocity.VelocityConstraintMode|VelocityConstraintMode`is`Enum.VelocityConstraintMode|Plane`.