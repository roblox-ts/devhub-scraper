The Transparency property of a [Trail](https://create.roblox.com/docs/reference/engine/classes/Trail) sets how transparent the segments
of the trail are over the trail's [Trail.Lifetime](https://create.roblox.com/docs/reference/engine/classes/Trail#Lifetime). This value is a
[NumberSequence](https://developer.roblox.com/en-us/api-reference/datatype/NumberSequence), meaning it can be a static value or can change
throughout the lifetime of the trail segments.

The values in the NumberSequence can be any number, but the effective
range of transparency is 0 (completely opaque) to 1 (completely
see-through). The Transparency property for TrailEffects defaults to 0.5.