Scales the 9-slice edges by the specified ratio. This means that the edges
around the 9-slice will grow as if you'd uploaded a new version of the
texture upscaled. Defaults to 1.0.

As a multiplier for the borders of a 9-slice, it is useful for reusing one
rounded corner image for multiple radii

![Scaling example](https://prod.docsiteassets.roblox.com/assets/legacy/image.png)

See also:

- [`ImageButton.ScaleType`](https://create.roblox.com/docs/reference/engine/classes/ImageButton#ScaleType), determines how an image will scale if
displayed in a UI element whose size differs from the source image
- [`ImageLabel.ScaleCenter`](https://create.roblox.com/docs/reference/engine/classes/ImageLabel#ScaleCenter),determines the center of a 9-slice image
- [`ImageButton.SliceScale`](https://create.roblox.com/docs/reference/engine/classes/ImageButton#SliceScale), the same property in terms of
functionality but for [`ImageButtons`](https://create.roblox.com/docs/reference/engine/classes/ImageButton)