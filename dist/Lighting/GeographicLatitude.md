The geographic latitude, in degrees, of the scene, influencing the result
of [`Lighting`](https://create.roblox.com/docs/reference/engine/classes/Lighting)s time on the position of the sun and moon.

When calculating the position of the sun, the earth's tilt is also taken
into account.

Changing GeographicLatitude will alter the position of the sun at every
[`Lighting.TimeOfDay`](https://create.roblox.com/docs/reference/engine/classes/Lighting#TimeOfDay). Developers looking to obtain the sun or moon's
position should use [`Lighting:GetSunDirection()`](https://create.roblox.com/docs/reference/engine/classes/Lighting#GetSunDirection) or
[`Lighting:GetMoonDirection()`](https://create.roblox.com/docs/reference/engine/classes/Lighting#GetMoonDirection).