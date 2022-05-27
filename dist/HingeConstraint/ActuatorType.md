Sets whether the rotation of the [HingeConstraint](https://create.roblox.com/docs/reference/engine/classes/HingeConstraint) is actuated and, if so,
what kind of actuation.

When ActuatorType is set to `None` then the hinge can swing freely:

![None][1]

When ActuatorType is set to [Motor](https://create.roblox.com/docs/reference/engine/classes/Motor) then the [HingeConstraint](https://create.roblox.com/docs/reference/engine/classes/HingeConstraint) will
attempt to rotate at a constant velocity specified by
[HingeConstraint.AngularVelocity](https://create.roblox.com/docs/reference/engine/classes/HingeConstraint#AngularVelocity). The [HingeConstraint](https://create.roblox.com/docs/reference/engine/classes/HingeConstraint) will apply a
torque up to [HingeConstraint.MotorMaxTorque](https://create.roblox.com/docs/reference/engine/classes/HingeConstraint#MotorMaxTorque) to achieve the desired
velocity but will be limited by [HingeConstraint.MotorMaxAcceleration](https://create.roblox.com/docs/reference/engine/classes/HingeConstraint#MotorMaxAcceleration).

![Motor][2]

When ActuatorType is set to `Servo` then the [HingeConstraint](https://create.roblox.com/docs/reference/engine/classes/HingeConstraint) will
attempt to rotate to an angle specified by [HingeConstraint.TargetAngle](https://create.roblox.com/docs/reference/engine/classes/HingeConstraint#TargetAngle).
The [HingeConstraint](https://create.roblox.com/docs/reference/engine/classes/HingeConstraint) will attempt to rotate towards that goal at a target
speed set by [HingeConstraint.AngularSpeed](https://create.roblox.com/docs/reference/engine/classes/HingeConstraint#AngularSpeed). The maximum torque the
[HingeConstraint](https://create.roblox.com/docs/reference/engine/classes/HingeConstraint) is allowed to use to meet these goals is set by
[HingeConstraint.ServoMaxTorque](https://create.roblox.com/docs/reference/engine/classes/HingeConstraint#ServoMaxTorque).

![Servo][3]

[1]: https://prod.docsiteassets.roblox.com/assets/blt79ffbb7926c74991/HingeConstraintNone.gif
[2]: https://prod.docsiteassets.roblox.com/assets/blt41b9a99739a65a1d/HingeConstraintMotor.gif
[3]: https://prod.docsiteassets.roblox.com/assets/blt30faa18cf5f31d5c/HingeConstraintServo.gif