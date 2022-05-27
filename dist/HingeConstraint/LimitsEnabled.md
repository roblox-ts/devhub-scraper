Sets whether the [HingeConstraint](https://create.roblox.com/docs/reference/engine/classes/HingeConstraint) will limit the range of rotation. If
enabled, the constraint will only allow the [HingeConstraint.CurrentAngle](https://create.roblox.com/docs/reference/engine/classes/HingeConstraint#CurrentAngle)
to be between [HingeConstraint.LowerAngle](https://create.roblox.com/docs/reference/engine/classes/HingeConstraint#LowerAngle) and
[HingeConstraint.UpperAngle](https://create.roblox.com/docs/reference/engine/classes/HingeConstraint#UpperAngle). If the [Attachment](https://create.roblox.com/docs/reference/engine/classes/Attachment) reach the end of the
limited range of rotation then they will stop rotating. If
[HingeConstraint.Restitution](https://create.roblox.com/docs/reference/engine/classes/HingeConstraint#Restitution) is greater than 0 then the attachments will
bounce when they hit the ends of the limited range.

For example, here is the result if LowerAngle is set to -90 and UpperAngle
is set to 45. Note that the x-axis of the Attachment in PartA is pointed
away from the camera:

![LimitsEnabled][1]

[1]: https://prod.docsiteassets.roblox.com/assets/blt22443c69e14440a1/HingeConstraintLimitsEnabled.gif