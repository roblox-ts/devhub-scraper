A **HingeConstraint** allows two [`Attachments`](https://create.roblox.com/docs/reference/engine/classes/Attachment) to rotate
about one axis, constraining the two [`Attachments`](https://create.roblox.com/docs/reference/engine/classes/Attachment) so that
they both occupy the same position and that their **X** axes point in the same
direction.

Note that if this constraint attaches one part (**A**) to another part (**B**)
that is anchored or connected to an anchored part (**Z**), part **A** will not
be locally simulated when interacting with a player.

When configuring this constraint, it may be helpful to study
[Roblox Units](https://create.roblox.com/docs/physics/units) to understand how Roblox units
compare to metric units.
#### Angular Power

Hinges can be configured to actuate rotation. If a hinge's
[`ActuatorType`](https://create.roblox.com/docs/reference/engine/classes/HingeConstraint#ActuatorType) is set to
`Enum.ActuatorType|Motor`, it attempts to rotate the attachments with the goal
of reaching its [`AngularVelocity`](https://create.roblox.com/docs/reference/engine/classes/HingeConstraint#AngularVelocity). You
can further control this rotation through both
[`MotorMaxAcceleration`](https://create.roblox.com/docs/reference/engine/classes/HingeConstraint#MotorMaxAcceleration) and
[`MotorMaxTorque`](https://create.roblox.com/docs/reference/engine/classes/HingeConstraint#MotorMaxTorque). If a hinge's
[`ActuatorType`](https://create.roblox.com/docs/reference/engine/classes/HingeConstraint#ActuatorType) is set to
`Enum.ActuatorType|Servo`, it attempts to rotate to an angle specified by
[`TargetAngle`](https://create.roblox.com/docs/reference/engine/classes/HingeConstraint#TargetAngle). This rotation is controlled
by both [`AngularSpeed`](https://create.roblox.com/docs/reference/engine/classes/HingeConstraint#AngularSpeed) and
[`ServoMaxTorque`](https://create.roblox.com/docs/reference/engine/classes/HingeConstraint#ServoMaxTorque).
#### Limits

You can set limits to restrict the rotation of a hinge, useful for mechanisms
like doors which should only swing open or closed within a set range. Enabling
the [`LimitsEnabled`](https://create.roblox.com/docs/reference/engine/classes/HingeConstraint#LimitsEnabled) property exposes the
[`LowerAngle`](https://create.roblox.com/docs/reference/engine/classes/HingeConstraint#LowerAngle) and
[`UpperAngle`](https://create.roblox.com/docs/reference/engine/classes/HingeConstraint#UpperAngle) limits, as well as
[`Restitution`](https://create.roblox.com/docs/reference/engine/classes/HingeConstraint#Restitution) which defines the elasticity
of the attachments when they reach either limit.