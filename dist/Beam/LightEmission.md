Determines to what degree the colors of the [Beam](https://create.roblox.com/docs/reference/engine/classes/Beam) are blended with the
colors behind it.

The LightEmission property determines the blending of the [Beam](https://create.roblox.com/docs/reference/engine/classes/Beam) with the
colors behind it. It should be set in the range [0, 1]. A value of 0 uses
normal blending modes, and a value of 1 will use additive blending. The
value of the additive blending is determined by this property.

Pictured below are two sets of overlapping [Beam](https://create.roblox.com/docs/reference/engine/classes/Beam)s. The right one has its
LightEmission set to 1, so the texture appears brighter due to the
additive blending on the overlaps.

![enter image description here][1]

This property should not be confused with [Beam.LightInfluence](https://create.roblox.com/docs/reference/engine/classes/Beam#LightInfluence), which
determines how particles are affected by environment light. This property
does not cause the [Beam](https://create.roblox.com/docs/reference/engine/classes/Beam) to light the environment. To do that, consider
using a [SurfaceLight](https://create.roblox.com/docs/reference/engine/classes/SurfaceLight).

[1]: https://prod.docsiteassets.roblox.com/assets/blta7d562b91fdd7f61/BeamLightEmission.png