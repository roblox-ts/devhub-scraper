**LimitAngle1** determines the maximum angle between the rod and [Attachment1](https://developer.roblox.com/en-us/api-reference/property/Constraint/Attachment1) when [LimitsEnabled](https://developer.roblox.com/en-us/api-reference/property/RodConstraint/LimitsEnabled) is true. Otherwise, this property is hidden in the Properties window and does nothing.

In the image below, the two parts are joined by a RodConstraint with 45 degree limits on each end. The red part is not [Anchored](https://developer.roblox.com/en-us/api-reference/property/BasePart/Anchored).

![](https://developer.roblox.com/assets/60feee1161f38746a5779267/Screenshot_7.png)

See also
--------

*   [RodConstraint.LimitsEnabled](https://developer.roblox.com/en-us/api-reference/property/RodConstraint/LimitsEnabled), which determines if this property is visible and functional
*   [RodConstraint.LimitAngle0](https://developer.roblox.com/en-us/api-reference/property/RodConstraint/LimitAngle0), which works for the other attachment
*   `Constriant/Attachment1`, the attachment that is affected by this property