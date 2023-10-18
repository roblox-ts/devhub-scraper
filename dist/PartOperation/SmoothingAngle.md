This property represents an angle in degrees for a threshold value between
face normals on a [solid modeled](https://create.roblox.com/docs/parts/solid-modeling) part.
If the normal difference is less than the value, normals will be adjusted
to smooth the difference. While a value between 30 and 70 degrees usually
produces a good result, values between 90 and 180 are not recommended as
they may cause a "shadowing" effect on unions with sharp edges.

Note that smoothing does not affect the normals between different
materials or different colors.

![Solid modeled part with SmoothingAngle of 0](https://prod.docsiteassets.roblox.com/assets/modeling/solid-modeling/CSG-SmoothingAngle-0.jpg)
[`SmoothingAngle`](https://create.roblox.com/docs/reference/engine/classes/PartOperation#SmoothingAngle)
= 0

![Solid modeled part with SmoothingAngle of 50](https://prod.docsiteassets.roblox.com/assets/modeling/solid-modeling/CSG-SmoothingAngle-50.jpg)
[`SmoothingAngle`](https://create.roblox.com/docs/reference/engine/classes/PartOperation#SmoothingAngle)
= 50