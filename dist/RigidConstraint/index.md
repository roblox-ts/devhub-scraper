**RigidConstraint** connects the [Attachment0](https://create.roblox.com/docs/reference/engine/classes/Constraint#Attachment0) and
[Attachment1](https://create.roblox.com/docs/reference/engine/classes/Constraint#Attachment1) with zero offset.

It functions similarly to [WeldConstraint](https://create.roblox.com/docs/reference/engine/classes/WeldConstraint), which uses two [BasePart](https://create.roblox.com/docs/reference/engine/classes/BasePart)s
directly. However, this object uses two `Attachments` instead, which makes
attaching accessories to avatars easy to do without code as you can use
attachments on the rig.

In Studio, you can create a RigidConstraint in the Constraints section of the
Model tab.