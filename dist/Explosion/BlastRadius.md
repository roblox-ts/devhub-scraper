This property determines the radius of the [Explosion](https://developer.roblox.com/en-us/api-reference/class/Explosion), in studs. This property accepts any value between 0 and 100.

This radius determines the area of effect of the Explosion, not the size of the Explosion's visuals. The size of the Explosion's visual effect is the same regardless of BlastRadius (even if BlastRadius is 0).

[BasePart](https://developer.roblox.com/en-us/api-reference/class/BasePart)s within the BlastRadius will be affected by the explosion. Meaning, if [Explosion.BlastPressure](https://developer.roblox.com/en-us/api-reference/property/Explosion/BlastPressure) is greater than 0, force will be applied to parts. The degree to which joints are broken within the BlastRadius depends on [Explosion.DestroyJointRadiusPercent](https://developer.roblox.com/en-us/api-reference/property/Explosion/DestroyJointRadiusPercent). [Explosion.Hit](https://developer.roblox.com/en-us/api-reference/event/Explosion/Hit) will fire for any every [BasePart](https://developer.roblox.com/en-us/api-reference/class/BasePart) within the radius.

[BasePart](https://developer.roblox.com/en-us/api-reference/class/BasePart)s are considered within an [Explosion](https://developer.roblox.com/en-us/api-reference/class/Explosion)'s BlastRadius even if they are only partially in range.