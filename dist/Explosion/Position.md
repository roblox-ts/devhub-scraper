This property is the position of the center of the [Explosion](https://create.roblox.com/docs/reference/engine/classes/Explosion). It is
defined in world-space and not influenced by the [Explosion](https://create.roblox.com/docs/reference/engine/classes/Explosion)'s parent.

[BasePart](https://create.roblox.com/docs/reference/engine/classes/BasePart)s will be influenced by the [Explosion](https://create.roblox.com/docs/reference/engine/classes/Explosion) if they are within
[Explosion.BlastRadius](https://create.roblox.com/docs/reference/engine/classes/Explosion#BlastRadius) studs of the explosion's position.

The effect of an explosion is instantaneous. This means that although the
position of an explosion can be changed after it has been set it cannot
affect two different areas. Once an explosion has been 'detonated',
shortly after parenting it to a descendant of the [Workspace](https://create.roblox.com/docs/reference/engine/classes/Workspace), it will not
do so again. In some cases the visual effect of the explosion will move
but it will have no effect.

For this reason a new Explosion should be created if the developer wants
an explosion to appear at a different position.