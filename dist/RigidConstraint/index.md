**RigidConstraint** connects the [Attachment0](https://developer.roblox.com/en-us/api-reference/property/Constraint/Attachment0) and [Attachment1](https://developer.roblox.com/en-us/api-reference/property/Constraint/Attachment1) with zero offset.

It functions similarly to [WeldConstraint](https://developer.roblox.com/en-us/api-reference/class/WeldConstraint), which uses two [BasePart](https://developer.roblox.com/en-us/api-reference/class/BasePart)s directly. However, this object uses two `Attachments` instead, which makes attaching  
accessories to avatars easy to do without code as you can use attachments on the rig.

In Studio, you can create a RigidConstraint in the Constraints section of the Model tab.