Returns a [Vector3](https://developer.roblox.com/en-us/api-reference/datatype/Vector3) representing the direction of the moon from the position 0, 0, 0.

Note, when the moon has 'set' and is no longer visible, the [Vector3](https://developer.roblox.com/en-us/api-reference/datatype/Vector3) returned by this function will continue to point towards the moon below the map.

Developers looking to change the positioning of the moon should use the [Lighting.ClockTime](https://developer.roblox.com/en-us/api-reference/property/Lighting/ClockTime) or [Lighting.GeographicLatitude](https://developer.roblox.com/en-us/api-reference/property/Lighting/GeographicLatitude) properties.

A variant of this function exists for obtaining the direction of the sun, [Lighting:GetSunDirection](https://developer.roblox.com/en-us/api-reference/function/Lighting/GetSunDirection).