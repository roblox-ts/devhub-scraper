If a cylindrical's
[`AngularActuatorType`](https://create.roblox.com/docs/reference/engine/classes/CylindricalConstraint#AngularActuatorType) is
set to `Enum.ActuatorType|Motor`, it attempts to rotate the attachments
with the goal of reaching its
[`AngularVelocity`](https://create.roblox.com/docs/reference/engine/classes/CylindricalConstraint#AngularVelocity). You can
further control this rotation through both
[`MotorMaxAngularAcceleration`](https://create.roblox.com/docs/reference/engine/classes/CylindricalConstraint#MotorMaxAngularAcceleration)
and [`MotorMaxTorque`](https://create.roblox.com/docs/reference/engine/classes/CylindricalConstraint#MotorMaxTorque).

If a cylindrical's
[`AngularActuatorType`](https://create.roblox.com/docs/reference/engine/classes/CylindricalConstraint#AngularActuatorType) is
set to `Enum.ActuatorType|Servo`, it attempts to rotate to an angle
specified by [`TargetAngle`](https://create.roblox.com/docs/reference/engine/classes/CylindricalConstraint#TargetAngle). This
rotation is controlled by
[`AngularSpeed`](https://create.roblox.com/docs/reference/engine/classes/CylindricalConstraint#AngularSpeed),
[`AngularResponsiveness`](https://create.roblox.com/docs/reference/engine/classes/CylindricalConstraint#AngularResponsiveness),
and [`ServoMaxTorque`](https://create.roblox.com/docs/reference/engine/classes/CylindricalConstraint#ServoMaxTorque).