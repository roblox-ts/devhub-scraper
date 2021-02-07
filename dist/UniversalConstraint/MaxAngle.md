This property determines the max angle, in degrees, of the `UniversalConstraint|UniversalConstraint's` limiting cone. The limiting cone is formed from `UniversalConstraint/Attachment0` and its primary axis. The default value is 45.0 degrees.

In order for this property to take affect, the constraint's [UniversalConstraint.LimitsEnabled](https://developer.roblox.com/en-us/api-reference/property/UniversalConstraint/LimitsEnabled) property must be set to `true`.

For example, the code snippet below sets LimitsEnabled to true and limits the MaxAngle to 10 degrees:

```lua
universalConstraint.LimitsEnabled = true
universalConstraint.MaxAngle = 10
```