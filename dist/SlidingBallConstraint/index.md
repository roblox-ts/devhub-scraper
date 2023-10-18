**SlidingBallConstraint** is the base class for constraints that allow their
attachments to slide along an axis but not rotate, including
[`PrismaticConstraint`](https://create.roblox.com/docs/reference/engine/classes/PrismaticConstraint) and [`CylindricalConstraint`](https://create.roblox.com/docs/reference/engine/classes/CylindricalConstraint). This constrains
the attachments so that their **X** axes are collinear but pointing in
opposite directions. It also constrains the attachments so that their **Y**
axes are parallel.

When configuring this constraint, it may be helpful to study
[Roblox Units](https://create.roblox.com/docs/physics/units) to understand how Roblox units
compare to metric units.
#### Linear Power

If this constraint's [`ActuatorType`](https://create.roblox.com/docs/reference/engine/classes/SlidingBallConstraint) is set to
[`Motor`](https://create.roblox.com/docs/reference/engine/enums/ActuatorType), it attempts to translate the attachments with the
goal of reaching [`Velocity`](https://create.roblox.com/docs/reference/engine/classes/SlidingBallConstraint). You can further
control this translation through both
[`MotorMaxAcceleration`](https://create.roblox.com/docs/reference/engine/classes/SlidingBallConstraint) and
[`MotorMaxForce`](https://create.roblox.com/docs/reference/engine/classes/SlidingBallConstraint).

If this constraint's [`ActuatorType`](https://create.roblox.com/docs/reference/engine/classes/SlidingBallConstraint) is set to
[`Servo`](https://create.roblox.com/docs/reference/engine/enums/ActuatorType), it attempts to translate the attachments to a set
separation specified by [`TargetPosition`](https://create.roblox.com/docs/reference/engine/classes/SlidingBallConstraint). This
translation is controlled by [`Speed`](https://create.roblox.com/docs/reference/engine/classes/SlidingBallConstraint),
[`LinearResponsiveness`](https://create.roblox.com/docs/reference/engine/classes/SlidingBallConstraint), and
[`ServoMaxForce`](https://create.roblox.com/docs/reference/engine/classes/SlidingBallConstraint).
#### Limits

You can set **limits** to restrict this constraint's sliding range. Enabling
the [`LimitsEnabled`](https://create.roblox.com/docs/reference/engine/classes/SlidingBallConstraint) property exposes the
[`LowerLimit`](https://create.roblox.com/docs/reference/engine/classes/SlidingBallConstraint) and
[`UpperLimit`](https://create.roblox.com/docs/reference/engine/classes/SlidingBallConstraint) values, as well as
[`Restitution`](https://create.roblox.com/docs/reference/engine/classes/SlidingBallConstraint) which defines the elasticity of the
attachments when they reach either limit.