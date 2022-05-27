This property determines the maximum angle (in degrees) of the
[TorsionSpringConstraint's](https://create.roblox.com/docs/reference/engine/classes/TorsionSpringConstraint) limiting cone. The
limiting cone is formed at the position of the constraint's
[Attachment0](https://create.roblox.com/docs/reference/engine/classes/Constraint#Attachment0) around its secondary axis with an
angle equal to MaxAngle. The default value is 45.0 degrees.

In the example below, when
[LimitEnabled](https://create.roblox.com/docs/reference/engine/classes/TorsionSpringConstraint#LimitEnabled) is `true` for the
constraint, the maximum angle between the primary axes of attachments can
be limited to 10 degrees for instance as follows:

```lua
torsionSpring.MaxAngle = 10
```