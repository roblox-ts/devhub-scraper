A physics constraint that ensures two axes on two rigid bodies remain
perpendicular. An example use of this constraint are power transmission
between the transmission and rear drive shafts of rear-wheel drive cars,
robotics, etc.

The constraint ensures that two attachments are co-located (similar to
[BallSocketConstraint](https://create.roblox.com/docs/reference/engine/classes/BallSocketConstraint)) and that their secondary axes remain perpendicular
(see the picture below). In this sense, this constraint is more restrictive
than the BallSocketConstraint but is less restrictive than [HingeConstraint](https://create.roblox.com/docs/reference/engine/classes/HingeConstraint)
(by one degree of freedom).

![Example UniversalConstraint](https://prod.docsiteassets.roblox.com/assets/blt96586dfb35538032/UniversalConstraintDemo.jpg?auto=yes&bg=222&fg=000)

If [LimitsEnabled](https://create.roblox.com/docs/reference/engine/classes/UniversalConstraint#LimitsEnabled) is `true`, then the
relative motion of the primary axis of [Attachment1](https://create.roblox.com/docs/reference/engine/classes/Constraint#Attachment1) is
limited by a cone. This cone is formed via
[Attachment0](https://create.roblox.com/docs/reference/engine/classes/Constraint#Attachment0) and its primary axis and makes an angle
of [MaxAngle](https://create.roblox.com/docs/reference/engine/classes/UniversalConstraint#MaxAngle) with it.