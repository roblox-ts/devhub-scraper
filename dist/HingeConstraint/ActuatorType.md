Sets whether the rotation of the [HingeConstraint](https://developer.roblox.com/en-us/api-reference/class/HingeConstraint) is actuated and, if so, what kind of actuation.

When ActuatorType is set to `None` then the hinge can swing freely:

![None](https://developer.roblox.com/assets/blt79ffbb7926c74991/HingeConstraintNone.gif)

When ActuatorType is set to [Motor](https://developer.roblox.com/en-us/api-reference/class/Motor) then the [HingeConstraint](https://developer.roblox.com/en-us/api-reference/class/HingeConstraint) will attempt to rotate at a constant velocity specified by [HingeConstraint.AngularVelocity](https://developer.roblox.com/en-us/api-reference/property/HingeConstraint/AngularVelocity). The [HingeConstraint](https://developer.roblox.com/en-us/api-reference/class/HingeConstraint) will apply a torque up to [HingeConstraint.MotorMaxTorque](https://developer.roblox.com/en-us/api-reference/property/HingeConstraint/MotorMaxTorque) to achieve the desired velocity but will be limited by [HingeConstraint.MotorMaxAcceleration](https://developer.roblox.com/en-us/api-reference/property/HingeConstraint/MotorMaxAcceleration).

![Motor](https://developer.roblox.com/assets/blt41b9a99739a65a1d/HingeConstraintMotor.gif)

When ActuatorType is set to `Servo` then the [HingeConstraint](https://developer.roblox.com/en-us/api-reference/class/HingeConstraint) will attempt to rotate to an angle specified by [HingeConstraint.TargetAngle](https://developer.roblox.com/en-us/api-reference/property/HingeConstraint/TargetAngle). The [HingeConstraint](https://developer.roblox.com/en-us/api-reference/class/HingeConstraint) will attempt to rotate towards that goal at a target speed set by [HingeConstraint.AngularSpeed](https://developer.roblox.com/en-us/api-reference/property/HingeConstraint/AngularSpeed). The maximum torque the [HingeConstraint](https://developer.roblox.com/en-us/api-reference/class/HingeConstraint) is allowed to use to meet these goals is set by [HingeConstraint.ServoMaxTorque](https://developer.roblox.com/en-us/api-reference/property/HingeConstraint/ServoMaxTorque).

![Servo](https://developer.roblox.com/assets/blt30faa18cf5f31d5c/HingeConstraintServo.gif)