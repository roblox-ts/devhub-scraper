A **CylindricalConstraint** allows its attachments to slide along one axis and
rotate about another axis. It can be thought of like a combination of a
[`PrismaticConstraint`](https://create.roblox.com/docs/reference/engine/classes/PrismaticConstraint) and a [`HingeConstraint`](https://create.roblox.com/docs/reference/engine/classes/HingeConstraint). The sliding axis is
determined by the **X** axis of the constraint's
[`Attachment0`](https://create.roblox.com/docs/reference/engine/classes/Constraint#Attachment0). The rotation axis is centered at
the constraint's [`Attachment1`](https://create.roblox.com/docs/reference/engine/classes/Constraint#Attachment1) and is angled off
of the sliding constraint by the constraint's
[`InclinationAngle`](https://create.roblox.com/docs/reference/engine/classes/CylindricalConstraint#InclinationAngle).

This constraint, along with a [`SpringConstraint`](https://create.roblox.com/docs/reference/engine/classes/SpringConstraint), is ideal for building
vehicle suspension.

Note that if this constraint attaches one part (**A**) to another part (**B**)
that is anchored or connected to an anchored part (**Z**), part **A** will not
be locally simulated when interacting with a player.

When configuring this constraint, it may be helpful to study
[Roblox Units](https://create.roblox.com/docs/physics/units) to understand how Roblox units
compare to metric units.
#### Angular Power

If a cylindrical's
[`AngularActuatorType`](https://create.roblox.com/docs/reference/engine/classes/CylindricalConstraint#AngularActuatorType) is set
to [`Motor`](https://create.roblox.com/docs/reference/engine/enums/ActuatorType), it attempts to rotate the attachments with the
goal of reaching its
[`AngularVelocity`](https://create.roblox.com/docs/reference/engine/classes/CylindricalConstraint#AngularVelocity). You can further
control this rotation through both
[`MotorMaxAngularAcceleration`](https://create.roblox.com/docs/reference/engine/classes/CylindricalConstraint#MotorMaxAngularAcceleration)
and [`MotorMaxTorque`](https://create.roblox.com/docs/reference/engine/classes/CylindricalConstraint#MotorMaxTorque). If a
cylindrical's
[`AngularActuatorType`](https://create.roblox.com/docs/reference/engine/classes/CylindricalConstraint#AngularActuatorType) is set
to [`Servo`](https://create.roblox.com/docs/reference/engine/enums/ActuatorType), it attempts to rotate to an angle specified by
[`TargetAngle`](https://create.roblox.com/docs/reference/engine/classes/CylindricalConstraint#TargetAngle). This rotation is
controlled by [`AngularSpeed`](https://create.roblox.com/docs/reference/engine/classes/CylindricalConstraint#AngularSpeed),
[`AngularResponsiveness`](https://create.roblox.com/docs/reference/engine/classes/CylindricalConstraint#AngularResponsiveness), and
[`ServoMaxTorque`](https://create.roblox.com/docs/reference/engine/classes/CylindricalConstraint#ServoMaxTorque).
#### Linear Power

If a cylindrical's [`ActuatorType`](https://create.roblox.com/docs/reference/engine/classes/CylindricalConstraint) is set to
[`Motor`](https://create.roblox.com/docs/reference/engine/enums/ActuatorType), it attempts to translate the attachments with the
goal of reaching [`Velocity`](https://create.roblox.com/docs/reference/engine/classes/CylindricalConstraint). You can further
control this translation through both
[`MotorMaxAcceleration`](https://create.roblox.com/docs/reference/engine/classes/CylindricalConstraint) and
[`MotorMaxForce`](https://create.roblox.com/docs/reference/engine/classes/CylindricalConstraint). If a cylindrical's
[`ActuatorType`](https://create.roblox.com/docs/reference/engine/classes/CylindricalConstraint) is set to
[`Servo`](https://create.roblox.com/docs/reference/engine/enums/ActuatorType), it attempts to translate the attachments to a set
separation specified by [`TargetPosition`](https://create.roblox.com/docs/reference/engine/classes/CylindricalConstraint). This
translation is controlled by [`Speed`](https://create.roblox.com/docs/reference/engine/classes/CylindricalConstraint),
[`LinearResponsiveness`](https://create.roblox.com/docs/reference/engine/classes/CylindricalConstraint), and
[`ServoMaxForce`](https://create.roblox.com/docs/reference/engine/classes/CylindricalConstraint).
#### Limits

You can set limits to restrict both the **sliding range** and **rotation** of
a cylindrical constraint. Enabling the
[`LimitsEnabled`](https://create.roblox.com/docs/reference/engine/classes/CylindricalConstraint) property exposes the
[`LowerLimit`](https://create.roblox.com/docs/reference/engine/classes/CylindricalConstraint) and
[`UpperLimit`](https://create.roblox.com/docs/reference/engine/classes/CylindricalConstraint) values, as well as
[`Restitution`](https://create.roblox.com/docs/reference/engine/classes/CylindricalConstraint) which defines the elasticity of the
attachments when they reach either limit. Enabling the
[`AngularLimitsEnabled`](https://create.roblox.com/docs/reference/engine/classes/CylindricalConstraint#AngularLimitsEnabled)
property exposes the [`LowerAngle`](https://create.roblox.com/docs/reference/engine/classes/CylindricalConstraint#LowerAngle) and
[`UpperAngle`](https://create.roblox.com/docs/reference/engine/classes/CylindricalConstraint#UpperAngle) limits, as well as
[`AngularRestitution`](https://create.roblox.com/docs/reference/engine/classes/CylindricalConstraint#AngularRestitution) which
defines the elasticity of the attachments when they reach either limit.
#### Inclination Angle

[`InclinationAngle`](https://create.roblox.com/docs/reference/engine/classes/CylindricalConstraint#InclinationAngle) defines the
direction of the rotation axis as an angle from the **X** axis in the **XY**
plane of [`Attachment0`](https://create.roblox.com/docs/reference/engine/classes/Constraint#Attachment0), from
-180 to 180. This lets you tilt the rotating element without
changing the sliding axis.