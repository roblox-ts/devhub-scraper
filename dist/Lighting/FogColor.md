Fog properties are hidden when Lighting contains an [`Atmosphere`](https://create.roblox.com/docs/reference/engine/classes/Atmosphere)
object.

A [`Color3`](https://create.roblox.com/docs/reference/engine/datatypes/Color3) value giving the hue of [`Lighting`](https://create.roblox.com/docs/reference/engine/classes/Lighting)'s fog.
#### How does fog work?

Fog in Roblox is displayed in a plane perpendicular to the
[`Workspace.CurrentCamera`](https://create.roblox.com/docs/reference/engine/classes/Workspace#CurrentCamera)s direction. It fades between the
[`Lighting.FogStart`](https://create.roblox.com/docs/reference/engine/classes/Lighting#FogStart) property where it is not visible, to the
[`Lighting.FogEnd`](https://create.roblox.com/docs/reference/engine/classes/Lighting#FogEnd) property where it is fully opaque. The effect of
fog is it blends color with the FogColor.

At distances greater than [`Lighting.FogEnd`](https://create.roblox.com/docs/reference/engine/classes/Lighting#FogEnd), color will be
determined entirely by the FogColor. However at distances between
[`Lighting.FogStart`](https://create.roblox.com/docs/reference/engine/classes/Lighting#FogStart) and [`Lighting.FogEnd`](https://create.roblox.com/docs/reference/engine/classes/Lighting#FogEnd) the degree to which
the color is blended depends on the position.

Roblox's fog uses linear interpolation between [`Lighting.FogStart`](https://create.roblox.com/docs/reference/engine/classes/Lighting#FogStart)
and [`Lighting.FogEnd`](https://create.roblox.com/docs/reference/engine/classes/Lighting#FogEnd). This means if [`Lighting.FogStart`](https://create.roblox.com/docs/reference/engine/classes/Lighting#FogStart) is 10
and [`Lighting.FogEnd`](https://create.roblox.com/docs/reference/engine/classes/Lighting#FogEnd) is 20, at a distance of 15 studs the fog will
be at 50%. That means the color of a pixel at 15 studs will be 50% its
normal color blended with 50% of the fog color.
```lua
local Lighting = game:GetService("Lighting")
-- fog will fade between 25 and 200 studs
Lighting.FogStart = 25
Lighting.FogEnd = 200
```

Note, fog does not obscure the skybox.