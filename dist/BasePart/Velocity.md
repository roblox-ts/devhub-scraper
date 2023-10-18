The Velocity of a part describes how its [`BasePart.Position`](https://create.roblox.com/docs/reference/engine/classes/BasePart#Position) is
presently changing. The unit of this property is **studs per second**. For
reference, the default Roblox character moves at 16 studs per second via
[`Humanoid.WalkSpeed`](https://create.roblox.com/docs/reference/engine/classes/Humanoid#WalkSpeed). The acceleration due to gravity is found in
[`Workspace.Gravity`](https://create.roblox.com/docs/reference/engine/classes/Workspace#Gravity) (by default, -196.2 studs per second per
second).

Setting the Velocity of an part that is [`BasePart.Anchored`](https://create.roblox.com/docs/reference/engine/classes/BasePart#Anchored) will
cause it to act like a conveyor belt. Any object that touches the part
will begin to move in accordance with the Velocity.

Some [`BodyMover`](https://create.roblox.com/docs/reference/engine/classes/BodyMover) objects will apply forces and thus change the
Velocity of a part over time. The simplest of these is a [`BodyForce`](https://create.roblox.com/docs/reference/engine/classes/BodyForce)
which can be used to counteract the acceleration due to gravity on a
single part (set the +Y axis of the [`BodyForce.Force`](https://create.roblox.com/docs/reference/engine/classes/BodyForce#Force) to the product
of the mass ([`BasePart:GetMass()`](https://create.roblox.com/docs/reference/engine/classes/BasePart#GetMass)) and the gravity constant).