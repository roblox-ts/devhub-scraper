Sets whether the translation of the [`SlidingBallConstraint`](https://create.roblox.com/docs/reference/engine/classes/SlidingBallConstraint) is
actuated and, if so, what kind of actuation.

- 

If [`ActuatorType`](https://create.roblox.com/docs/reference/engine/classes/SlidingBallConstraint) is set to
`Enum.ActuatorType|None`, the joint can slide freely.

- 

If [`ActuatorType`](https://create.roblox.com/docs/reference/engine/classes/SlidingBallConstraint) is set to
`Enum.ActuatorType|Motor`, it attempts to translate the attachments with
the goal of reaching [`Velocity`](https://create.roblox.com/docs/reference/engine/classes/SlidingBallConstraint). You can
further control this translation through both
[`MotorMaxAcceleration`](https://create.roblox.com/docs/reference/engine/classes/SlidingBallConstraint) and
[`MotorMaxForce`](https://create.roblox.com/docs/reference/engine/classes/SlidingBallConstraint).

- 

If this constraint's [`ActuatorType`](https://create.roblox.com/docs/reference/engine/classes/SlidingBallConstraint) is set
to `Enum.ActuatorType|Servo`, it attempts to translate the attachments
to a set separation specified by
[`TargetPosition`](https://create.roblox.com/docs/reference/engine/classes/SlidingBallConstraint). This translation is
controlled by [`Speed`](https://create.roblox.com/docs/reference/engine/classes/SlidingBallConstraint),
[`LinearResponsiveness`](https://create.roblox.com/docs/reference/engine/classes/SlidingBallConstraint), and
[`ServoMaxForce`](https://create.roblox.com/docs/reference/engine/classes/SlidingBallConstraint).