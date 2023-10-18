The Lifetime property determines how long each segment in its
[`Trail`](https://create.roblox.com/docs/reference/engine/classes/Trail) will last in seconds. Once a segment is drawn, it will wait
for the given lifetime (measured in seconds) and then will disappear. The
lifetime property defaults to 2 seconds, but can be set anywhere between
0.01 and 20.

The lifetime of a trail is also used by that effect's [`Trail.Color`](https://create.roblox.com/docs/reference/engine/classes/Trail#Color)
and [`Trail.Transparency`](https://create.roblox.com/docs/reference/engine/classes/Trail#Transparency) properties to determine how each segment is
drawn. Both of these properties are sequences, meaning that they define
their values at certain keypoints in the segement's lifetime and then
interpolate between the values as the segment ages.

If a trail's lifetime changes while there are still segments that the
trail has drawn, these segments will immediately behave as if they always
had the new lifetime. This means that if they have existed for longer than
the lifetime they will be removed immediately.