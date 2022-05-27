The VelocityMotor is a special type of joint that works similarly to a
[Motor](https://create.roblox.com/docs/reference/engine/classes/Motor), but it uses a [MotorFeature](https://create.roblox.com/docs/reference/engine/classes/MotorFeature) and a [Hole](https://create.roblox.com/docs/reference/engine/classes/Hole) to create the connection.
In order for this object to work correctly:

- The VelocityMotor must be parented inside of a [MotorFeature](https://create.roblox.com/docs/reference/engine/classes/MotorFeature)
- The [MotorFeature](https://create.roblox.com/docs/reference/engine/classes/MotorFeature) needs to be parented inside of a [BasePart](https://create.roblox.com/docs/reference/engine/classes/BasePart)
- A [Hole](https://create.roblox.com/docs/reference/engine/classes/Hole) needs to be parented inside of another [BasePart](https://create.roblox.com/docs/reference/engine/classes/BasePart)
- The VelocityMotor's [VelocityMotor.Hole](https://create.roblox.com/docs/reference/engine/classes/VelocityMotor#Hole) property should be assigned to the
  hole you parented inside of the other part.