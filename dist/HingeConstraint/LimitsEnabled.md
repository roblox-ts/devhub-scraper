Sets whether the [`HingeConstraint`](https://create.roblox.com/docs/reference/engine/classes/HingeConstraint) will limit the range of rotation.
If enabled, the constraint will only allow the
[`CurrentAngle`](https://create.roblox.com/docs/reference/engine/classes/HingeConstraint#CurrentAngle) to be between
[`LowerAngle`](https://create.roblox.com/docs/reference/engine/classes/HingeConstraint#LowerAngle) and
[`UpperAngle`](https://create.roblox.com/docs/reference/engine/classes/HingeConstraint#UpperAngle). If the [`Attachment`](https://create.roblox.com/docs/reference/engine/classes/Attachment)
reach the end of the limited range of rotation then they will stop
rotating. If [`Restitution`](https://create.roblox.com/docs/reference/engine/classes/HingeConstraint#Restitution) is greater
than 0 then the attachments will bounce when they hit the ends of the
limited range.