This property determines the max angle, in degrees, of the [TorsionSpringConstraint's](https://developer.roblox.com/en-us/api-reference/class/TorsionSpringConstraint) limiting cone. The limiting cone is formed at the position of the constraint's [Attachment0](https://developer.roblox.com/en-us/api-reference/property/Constraint/Attachment0) around its secondary axis with an angle equal to MaxAngle. The default value is 45.0 degrees.

In the example below, when [LimitEnabled](https://developer.roblox.com/en-us/api-reference/property/TorsionSpringConstraint/LimitEnabled) is `true` for the constraint, the maximum angle between the primary axes of attachments can be limited to 10 degrees for instance as follows:

torsionSpring.MaxAngle = 10