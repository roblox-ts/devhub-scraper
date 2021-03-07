The linear velocity vector of this `BasePart|part's` assembly. It's the rate of change in position of the assembly's `BasePart/AssemblyCenterOfMass|center of mass` in studs per second.

If you want to know the velocity at a point other than the assembly's center of mass, use [BasePart:GetVelocityAtPosition](https://developer.roblox.com/en-us/api-reference/function/BasePart/GetVelocityAtPosition).

Setting the velocity directly may lead to unrealistic motion. Using a [VectorForce](https://developer.roblox.com/en-us/api-reference/class/VectorForce) constraint is preferred, or use [BasePart:ApplyImpulse](https://developer.roblox.com/en-us/api-reference/function/BasePart/ApplyImpulse) if you want instantaneous change in velocity.