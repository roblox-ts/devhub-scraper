A **PrismaticConstraint** creates a rigid joint between two
[Attachments](https://create.roblox.com/docs/reference/engine/classes/Attachment), allowing them to slide along one axis but not
rotate. This constrains the attachments so that their **X** axes are collinear
but pointing in opposite directions. It also constrains the attachments so
that their **Y** axes are parallel.

This constraint inherits properties from [SlidingBallConstraint](https://create.roblox.com/docs/reference/engine/classes/SlidingBallConstraint) and can be
configured to actuate translation, as follows:

- If [SlidingBallConstraint.ActuatorType](https://create.roblox.com/docs/reference/engine/classes/SlidingBallConstraint#ActuatorType) is set to [Motor](https://developer.roblox.com/en-us/api-reference/enum/ActuatorType),
  it will attempt to translate the attachments with the goal of reaching
  [SlidingBallConstraint.Velocity](https://create.roblox.com/docs/reference/engine/classes/SlidingBallConstraint#Velocity). This translation is limited by both
  [SlidingBallConstraint.MotorMaxAcceleration](https://create.roblox.com/docs/reference/engine/classes/SlidingBallConstraint#MotorMaxAcceleration) and
  [SlidingBallConstraint.MotorMaxForce](https://create.roblox.com/docs/reference/engine/classes/SlidingBallConstraint#MotorMaxForce).
- If [SlidingBallConstraint.ActuatorType](https://create.roblox.com/docs/reference/engine/classes/SlidingBallConstraint#ActuatorType) is set to [Servo](https://developer.roblox.com/en-us/api-reference/enum/ActuatorType),
  it will attempt to translate the attachments to a set separation specified
  by [SlidingBallConstraint.TargetPosition](https://create.roblox.com/docs/reference/engine/classes/SlidingBallConstraint#TargetPosition).

Note that both actuated and free translation can be limited by setting
[SlidingBallConstraint.LimitsEnabled](https://create.roblox.com/docs/reference/engine/classes/SlidingBallConstraint#LimitsEnabled) to `true`. Also note that if this
constraint attaches one part (**A**) to another part (**B**) that is anchored
or connected to an anchored part (**Z**), part **A** will not be locally
simulated when interacting with a player.