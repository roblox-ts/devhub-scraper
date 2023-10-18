Sets whether the rotation of the [`HingeConstraint`](https://create.roblox.com/docs/reference/engine/classes/HingeConstraint) is actuated and,
if so, what kind of actuation.

- If [`ActuatorType`](https://create.roblox.com/docs/reference/engine/classes/HingeConstraint#ActuatorType) is set to
[`Motor`](https://create.roblox.com/docs/reference/engine/enums/ActuatorType), the hinge will attempt to rotate the
attachments with the goal of reaching
[`AngularVelocity`](https://create.roblox.com/docs/reference/engine/classes/HingeConstraint#AngularVelocity). This rotation
is limited by both
[`MotorMaxAcceleration`](https://create.roblox.com/docs/reference/engine/classes/HingeConstraint#MotorMaxAcceleration) and
[`MotorMaxTorque`](https://create.roblox.com/docs/reference/engine/classes/HingeConstraint#MotorMaxTorque).
- If [`ActuatorType`](https://create.roblox.com/docs/reference/engine/classes/HingeConstraint#ActuatorType) is set to
[`Servo`](https://create.roblox.com/docs/reference/engine/enums/ActuatorType), the hinge will attempt to rotate to an angle
specified by [`TargetAngle`](https://create.roblox.com/docs/reference/engine/classes/HingeConstraint#TargetAngle). This
rotation is limited by both
[`AngularSpeed`](https://create.roblox.com/docs/reference/engine/classes/HingeConstraint#AngularSpeed) and
[`ServoMaxTorque`](https://create.roblox.com/docs/reference/engine/classes/HingeConstraint#ServoMaxTorque).

Note that both actuated and free spinning rotation can be limited by
setting [`LimitsEnabled`](https://create.roblox.com/docs/reference/engine/classes/HingeConstraint#LimitsEnabled) to true.