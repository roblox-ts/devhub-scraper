The LightEmission [Trail](https://create.roblox.com/docs/reference/engine/classes/Trail) property sets how much the [Colors](https://create.roblox.com/docs/reference/engine/classes/Trail#Color)
of the trail are blended with the colors behind them. LightEmission uses
additive blending to combine the colors, meaning the RGB values of the
colors are added together to determine the displayed color. This addition
is weighted by the value of LightEmission.

When changed this property instantly affects all particles owned by the
emitter, both current and future particles.

This property is not related to the dynamic lighting engine of Roblox. If
you need your trail to emit light, it is recommended to create parts with
[PointLight](https://create.roblox.com/docs/reference/engine/classes/PointLight) that follow the path of the trail.