This property determines the max angle, in degrees, of the
[UniversalConstraint's](https://create.roblox.com/docs/reference/engine/classes/UniversalConstraint) limiting cone. The limiting
cone is formed from [Attachment0](https://create.roblox.com/docs/reference/engine/classes/Constraint#Attachment0) and its primary
axis. The default value is 45.0 degrees.

In order for this property to take affect, the constraint's
[UniversalConstraint.LimitsEnabled](https://create.roblox.com/docs/reference/engine/classes/UniversalConstraint#LimitsEnabled) property must be set to `true`.

For example, the code snippet below sets LimitsEnabled to true and limits
the [UniversalConstraint.MaxAngle](https://create.roblox.com/docs/reference/engine/classes/UniversalConstraint#MaxAngle) to 10 degrees:

```lua
universalConstraint.LimitsEnabled = true
universalConstraint.MaxAngle = 10
```