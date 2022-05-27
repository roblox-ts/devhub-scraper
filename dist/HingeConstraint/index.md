A **HingeConstraint** allows two [Attachments](https://create.roblox.com/docs/reference/engine/classes/Attachment) to rotate about one
axis, constraining the two [Attachments](https://create.roblox.com/docs/reference/engine/classes/Attachment) so that they both occupy
the same position and that their **X** axes point in the same direction.

Hinges can also be configured to actuate rotation, as follows:

- If [HingeConstraint.ActuatorType](https://create.roblox.com/docs/reference/engine/classes/HingeConstraint#ActuatorType) is set to [Motor](https://developer.roblox.com/en-us/api-reference/enum/ActuatorType), the
  hinge will attempt to rotate the attachments with the goal of reaching
  [HingeConstraint.AngularVelocity](https://create.roblox.com/docs/reference/engine/classes/HingeConstraint#AngularVelocity). This rotation is limited by both
  [HingeConstraint.MotorMaxAcceleration](https://create.roblox.com/docs/reference/engine/classes/HingeConstraint#MotorMaxAcceleration) and [HingeConstraint.MotorMaxTorque](https://create.roblox.com/docs/reference/engine/classes/HingeConstraint#MotorMaxTorque).
- If [HingeConstraint.ActuatorType](https://create.roblox.com/docs/reference/engine/classes/HingeConstraint#ActuatorType) is set to [Servo](https://developer.roblox.com/en-us/api-reference/enum/ActuatorType), the
  hinge will attempt to rotate to an angle specified by
  [HingeConstraint.TargetAngle](https://create.roblox.com/docs/reference/engine/classes/HingeConstraint#TargetAngle). This rotation is limited by both
  [HingeConstraint.AngularSpeed](https://create.roblox.com/docs/reference/engine/classes/HingeConstraint#AngularSpeed) and [HingeConstraint.ServoMaxTorque](https://create.roblox.com/docs/reference/engine/classes/HingeConstraint#ServoMaxTorque).

Note that both actuated and free spinning rotation can be limited by setting
[HingeConstraint.LimitsEnabled](https://create.roblox.com/docs/reference/engine/classes/HingeConstraint#LimitsEnabled) to `true`. Also note that if this constraint
attaches one part (**A**) to another part (**B**) that is anchored or
connected to an anchored part (**Z**), part **A** will not be locally
simulated when interacting with a player.