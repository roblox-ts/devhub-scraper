A Beam object connects two [Attachment](https://developer.roblox.com/en-us/api-reference/class/Attachment)s by drawing a texture between them.

Setting up a Beam
-----------------

To display, beams must be a descendant of the [Workspace](https://developer.roblox.com/en-us/api-reference/class/Workspace) with their [Beam.Attachment0](https://developer.roblox.com/en-us/api-reference/property/Beam/Attachment0) and [Beam.Attachment1](https://developer.roblox.com/en-us/api-reference/property/Beam/Attachment1) properties set to [Attachment](https://developer.roblox.com/en-us/api-reference/class/Attachment)s also descending from the [Workspace](https://developer.roblox.com/en-us/api-reference/class/Workspace).

The beam's appearance can be customised using the range of properties available.

Beam Curvature
--------------

Beams are configured to use a cubic [Bézier curve](https://en.wikipedia.org/wiki/B%C3%A9zier_curve). This means they are not constrained to straight lines, and the curve of the beam can be modified by changing [Beam.CurveSize0](https://developer.roblox.com/en-us/api-reference/property/Beam/CurveSize0), [Beam.CurveSize1](https://developer.roblox.com/en-us/api-reference/property/Beam/CurveSize1) and the orientation of the beam's [Attachment](https://developer.roblox.com/en-us/api-reference/class/Attachment)s.

Cubic Bézier curves are formed of four control points. They are determined as follows:

*   **P0**: The start of the beam, the position of [Beam.Attachment0](https://developer.roblox.com/en-us/api-reference/property/Beam/Attachment0)
*   **P1**: [Beam.CurveSize0](https://developer.roblox.com/en-us/api-reference/property/Beam/CurveSize0) studs away from [Beam.Attachment0](https://developer.roblox.com/en-us/api-reference/property/Beam/Attachment0), in [Beam.Attachment0](https://developer.roblox.com/en-us/api-reference/property/Beam/Attachment0)'s positive X direction.
*   **P2**: [Beam.CurveSize1](https://developer.roblox.com/en-us/api-reference/property/Beam/CurveSize1) studs away from [Beam.Attachment1](https://developer.roblox.com/en-us/api-reference/property/Beam/Attachment1), in [Beam.Attachment1](https://developer.roblox.com/en-us/api-reference/property/Beam/Attachment1)'s negative X direction.
*   **P3**: The end of the beam, the position of [Beam.Attachment1](https://developer.roblox.com/en-us/api-reference/property/Beam/Attachment1)

The beam starts at P0, goes towards P1, and arrives at P3, from the direction of P2. The beam will not necessarily pass through P1 and P2.

See the image below for a visual demonstration.

![Beam Curve](https://developer.roblox.com/assets/blt160ad3fdeadd4ff2/BeamCurve1.png)