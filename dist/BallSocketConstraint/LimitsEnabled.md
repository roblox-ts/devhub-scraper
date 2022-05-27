Sets whether the [BallSocketConstraint](https://create.roblox.com/docs/reference/engine/classes/BallSocketConstraint) has a limit on rotation based on
[BallSocketConstraint.UpperAngle](https://create.roblox.com/docs/reference/engine/classes/BallSocketConstraint#UpperAngle). When a [BallSocketConstraint](https://create.roblox.com/docs/reference/engine/classes/BallSocketConstraint) has
LimitsEnabled set to true, it enforces that its [Constraint.Attachment1](https://create.roblox.com/docs/reference/engine/classes/Constraint#Attachment1)
isn't rotated more than a set angle from its [Constraint.Attachment0](https://create.roblox.com/docs/reference/engine/classes/Constraint#Attachment0).

The angle that is used is the angle between the x-axes of the
[Attachments](https://create.roblox.com/docs/reference/engine/classes/Attachment):

![BallSocketConstraint Limits][1]

[1]: https://prod.docsiteassets.roblox.com/assets/blta75930bd28cfe34b/BallSocketConstraintLimits.png