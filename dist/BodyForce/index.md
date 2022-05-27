The BodyForce object applies (or exerts) a force on the part to which it is
parented. If the magnitude of such a force is great enough, parts can begin to
accelerate. The force is determined by the [BodyForce.Force](https://create.roblox.com/docs/reference/engine/classes/BodyForce#Force) property, and is
defined on the three world axes.

A BodyForce alone cannot apply a torque (it cannot cause the parent to rotate
on its own). To apply a force at a specific point (e.g. to apply torque for
angular acceleration) or apply forces relative to the orientation of the part,
use a [BodyThrust](https://create.roblox.com/docs/reference/engine/classes/BodyThrust) instead.