Returns a [`Vector3`](https://create.roblox.com/docs/reference/engine/datatypes/Vector3) representing the direction of the moon from
the position 0, 0, 0.

Note, when the moon has 'set' and is no longer visible, the
[`Vector3`](https://create.roblox.com/docs/reference/engine/datatypes/Vector3) returned by this function will continue to point
towards the moon below the map.

Developers looking to change the positioning of the moon should use the
[`Lighting.ClockTime`](https://create.roblox.com/docs/reference/engine/classes/Lighting#ClockTime) or [`Lighting.GeographicLatitude`](https://create.roblox.com/docs/reference/engine/classes/Lighting#GeographicLatitude)
properties.

A variant of this function exists for obtaining the direction of the sun,
[`Lighting:GetSunDirection()`](https://create.roblox.com/docs/reference/engine/classes/Lighting#GetSunDirection).