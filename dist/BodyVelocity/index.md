The [`BodyVelocity`](https://create.roblox.com/docs/reference/engine/classes/BodyVelocity) object applies a force on a [`BasePart`](https://create.roblox.com/docs/reference/engine/classes/BasePart) such
that it will maintain a constant velocity. The [`BodyVelocity.Velocity`](https://create.roblox.com/docs/reference/engine/classes/BodyVelocity#Velocity)
property, not to be confused wtih [`BasePart.AssemblyLinearVelocity`](https://create.roblox.com/docs/reference/engine/classes/BasePart#AssemblyLinearVelocity),
controls the goal velocity.

[`BodyVelocity`](https://create.roblox.com/docs/reference/engine/classes/BodyVelocity) is the linear counterpart to [`BodyAngularVelocity`](https://create.roblox.com/docs/reference/engine/classes/BodyAngularVelocity).
If you need the part to move toward a goal position, use [`BodyPosition`](https://create.roblox.com/docs/reference/engine/classes/BodyPosition)
instead. If you need further control on a force applied to an object, consider
using a [`BodyForce`](https://create.roblox.com/docs/reference/engine/classes/BodyForce) or [`BodyThrust`](https://create.roblox.com/docs/reference/engine/classes/BodyThrust) instead.

The strength of the force applied by this object is controlled by several
factors, namely the difference between the part's current velocity and the
goal velocity. This is multiplied by [`P`](https://create.roblox.com/docs/reference/engine/classes/BodyVelocity#P) (power) to
either amplify or diminish it. The resulting force is then capped by
[`MaxForce`](https://create.roblox.com/docs/reference/engine/classes/BodyVelocity#MaxForce).