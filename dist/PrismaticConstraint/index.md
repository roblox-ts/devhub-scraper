A **PrismaticConstraint** creates a rigid joint between two
[`Attachments`](https://create.roblox.com/docs/reference/engine/classes/Attachment), allowing them to slide along one axis but not
rotate. This constrains the attachments so that their **X** axes are collinear
but pointing in opposite directions. It also constrains the attachments so
that their **Y** axes are parallel.

This constraint inherits many properties from [`SlidingBallConstraint`](https://create.roblox.com/docs/reference/engine/classes/SlidingBallConstraint)
including [`ActuatorType`](https://create.roblox.com/docs/reference/engine/classes/SlidingBallConstraint#ActuatorType),
[`LimitsEnabled`](https://create.roblox.com/docs/reference/engine/classes/SlidingBallConstraint#LimitsEnabled),
[`Velocity`](https://create.roblox.com/docs/reference/engine/classes/SlidingBallConstraint#Velocity), and more. Please refer to
[`SlidingBallConstraint`](https://create.roblox.com/docs/reference/engine/classes/SlidingBallConstraint) for details on configuring a
[`PrismaticConstraint`](https://create.roblox.com/docs/reference/engine/classes/PrismaticConstraint).

When configuring this constraint, it may be helpful to study
[Roblox Units](https://create.roblox.com/docs/physics/units) to understand how Roblox units
compare to metric units.