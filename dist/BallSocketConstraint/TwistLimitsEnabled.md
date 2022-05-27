Sets whether the [BallSocketConstraint](https://create.roblox.com/docs/reference/engine/classes/BallSocketConstraint) sets a limit on twist rotation
based on [BallSocketConstraint.TwistUpperAngle](https://create.roblox.com/docs/reference/engine/classes/BallSocketConstraint#TwistUpperAngle) and
[BallSocketConstraint.TwistLowerAngle](https://create.roblox.com/docs/reference/engine/classes/BallSocketConstraint#TwistLowerAngle). The twist angle is defined as the
angle between the y-axis of [Constraint.Attachment1](https://create.roblox.com/docs/reference/engine/classes/Constraint#Attachment1) and the y-axis of
[Constraint.Attachment0](https://create.roblox.com/docs/reference/engine/classes/Constraint#Attachment0).

When a [BallSocketConstraint](https://create.roblox.com/docs/reference/engine/classes/BallSocketConstraint) has `TwistLimitsEnabled` set to true, it
enforces that its [Constraint.Attachment1](https://create.roblox.com/docs/reference/engine/classes/Constraint#Attachment1) isn't twisted more than a set
angle from its [Constraint.Attachment0](https://create.roblox.com/docs/reference/engine/classes/Constraint#Attachment0).