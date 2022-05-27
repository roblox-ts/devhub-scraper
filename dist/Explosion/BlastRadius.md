This property determines the radius of the [Explosion](https://create.roblox.com/docs/reference/engine/classes/Explosion), in studs. This
property accepts any value between 0 and 100.

This radius determines the area of effect of the Explosion, not the size
of the Explosion's visuals. The size of the Explosion's visual effect is
the same regardless of BlastRadius (even if BlastRadius is 0).

[BasePart](https://create.roblox.com/docs/reference/engine/classes/BasePart)s within the BlastRadius will be affected by the explosion.
Meaning, if [Explosion.BlastPressure](https://create.roblox.com/docs/reference/engine/classes/Explosion#BlastPressure) is greater than 0, force will be
applied to parts. The degree to which joints are broken within the
BlastRadius depends on [Explosion.DestroyJointRadiusPercent](https://create.roblox.com/docs/reference/engine/classes/Explosion#DestroyJointRadiusPercent).
[Explosion.Hit](https://create.roblox.com/docs/reference/engine/classes/Explosion#Hit) will fire for any every [BasePart](https://create.roblox.com/docs/reference/engine/classes/BasePart) within the radius.

[BasePart](https://create.roblox.com/docs/reference/engine/classes/BasePart)s are considered within an [Explosion](https://create.roblox.com/docs/reference/engine/classes/Explosion)'s BlastRadius even if
they are only partially in range.