Sets how many straight segments the [Beam](https://create.roblox.com/docs/reference/engine/classes/Beam) is made up of.

This value can be any integer greater than 0. The default value is 10.

#### Beam Segments and curvature

Rather than being a perfect curve, a beam is made up of straight segments.
The more segments, the higher the resoloution of the curve. See the image
below for a demonstration of this:

![enter image description here][1]

For more information on how a [Beam](https://create.roblox.com/docs/reference/engine/classes/Beam) is configured to curve, see the page
for [Beam.CurveSize0](https://create.roblox.com/docs/reference/engine/classes/Beam#CurveSize0).

#### Beam Segments with Color and Transparency

The [Beam.Color](https://create.roblox.com/docs/reference/engine/classes/Beam#Color) and [Beam.Transparency](https://create.roblox.com/docs/reference/engine/classes/Beam#Transparency) properties require a certain
number of segments to display correctly. This is because each segment can
only show a transition between two colors or transparencies. Therefore a
[Beam](https://create.roblox.com/docs/reference/engine/classes/Beam) requires at least n-1 segments to display correctly, where n is the
number of keypoint associated with the [Beam](https://create.roblox.com/docs/reference/engine/classes/Beam)'s [Beam.Color](https://create.roblox.com/docs/reference/engine/classes/Beam#Color) and
[Beam.Transparency](https://create.roblox.com/docs/reference/engine/classes/Beam#Transparency).

[1]: https://prod.docsiteassets.roblox.com/assets/bltef72a1d7a20e9601/Beam.Segments.jpg