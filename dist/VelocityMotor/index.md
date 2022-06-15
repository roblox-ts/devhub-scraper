The VelocityMotor is a special type of joint that works similarly to a [Motor](https://developer.roblox.com/en-us/api-reference/class/Motor), but it uses a [MotorFeature](https://developer.roblox.com/en-us/api-reference/class/MotorFeature) and a [Hole](https://developer.roblox.com/en-us/api-reference/class/Hole) to create the connection.  
  
In order for this object to work correctly:  
  

*   The VelocityMotor must be parented inside of a [MotorFeature](https://developer.roblox.com/en-us/api-reference/class/MotorFeature)

*   The \`MotorFeature\` needs to be parented inside of a \`BasePart\`
*   A \`Hole\` needs to be parented inside of another \`BasePart\`
    *   The VelocityMotor's \`VelocityMotor/Hole\` property should be assigned to the hole you parented inside of the other part.