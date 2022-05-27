The linear velocity vector of this [part](https://create.roblox.com/docs/reference/engine/classes/BasePart)'s assembly. It's the
rate of change in position of the assembly's
[center of mass](https://create.roblox.com/docs/reference/engine/classes/BasePart#AssemblyCenterOfMass) in studs per second.

If you want to know the velocity at a point other than the assembly's
center of mass, use [BasePart:GetVelocityAtPosition](https://create.roblox.com/docs/reference/engine/classes/BasePart#GetVelocityAtPosition).

Setting the velocity directly may lead to unrealistic motion. Using a
[VectorForce](https://create.roblox.com/docs/reference/engine/classes/VectorForce) constraint is preferred, or use [BasePart:ApplyImpulse](https://create.roblox.com/docs/reference/engine/classes/BasePart#ApplyImpulse) if
you want instantaneous change in velocity.