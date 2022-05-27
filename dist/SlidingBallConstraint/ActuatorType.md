Sets whether the translation of the [PrismaticConstraint](https://create.roblox.com/docs/reference/engine/classes/PrismaticConstraint) is actuated and,
if so, what kind of actuation.

If ActuatorType is set to **None**, then the joint can slide freely:

![None][1]

If ActuatorType is set to **Motor**, then the PrismaticConstraint will
attempt to move its [Attachment](https://create.roblox.com/docs/reference/engine/classes/Attachment) at a constant velocity specified by
[SlidingBallConstraint.Velocity](https://create.roblox.com/docs/reference/engine/classes/SlidingBallConstraint#Velocity). The PrismaticConstraint will apply a
force up to [SlidingBallConstraint.MotorMaxForce](https://create.roblox.com/docs/reference/engine/classes/SlidingBallConstraint#MotorMaxForce) to achieve the desired
velocity but will be limited by
[SlidingBallConstraint.MotorMaxAcceleration](https://create.roblox.com/docs/reference/engine/classes/SlidingBallConstraint#MotorMaxAcceleration).

If ActuatorType is set to **Servo**, then the PrismaticConstraint will
attempt to move its Attachments to an offset specified by
[SlidingBallConstraint.TargetPosition](https://create.roblox.com/docs/reference/engine/classes/SlidingBallConstraint#TargetPosition). The PrismaticConstraint will
attempt to translate towards that goal at a target speed set by
[SlidingBallConstraint.Speed](https://create.roblox.com/docs/reference/engine/classes/SlidingBallConstraint#Speed). The maximum force the PrismaticConstraint
is allowed to use to meet these goals is set by
[SlidingBallConstraint.ServoMaxForce](https://create.roblox.com/docs/reference/engine/classes/SlidingBallConstraint#ServoMaxForce).

[1]: https://prod.docsiteassets.roblox.com/assets/bltf85c9e54774aad6c/SlidingBallConstraintNone.gif