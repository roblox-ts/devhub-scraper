This property determines how a rendered image will be colorized. It allows
you to change the image color without directly modifying the rendered
object.The default colorization value is
[`Color3.new(1,1,1)`](https://create.roblox.com/docs/reference/engine/datatypes/Color3) (white). When set to white no
colorization occurs.

It functions similarly to [`ImageLabel.ImageColor3`](https://create.roblox.com/docs/reference/engine/classes/ImageLabel#ImageColor3) and
[`Decal.Color3`](https://create.roblox.com/docs/reference/engine/classes/Decal#Color3)except that it is applied to the rendered image.

The image below demonstrates the same ViewportFrame with two different
colorizations. The first image has the default (white) colorization and
the second image has a `Color3.new(255, 255, 102)` (yellow) colorization.

![ViewportFrame with the default white colorization](https://prod.docsiteassets.roblox.com/assets/legacy/Screen_Shot_2019-02-09_at_8.03.48_PM.png)

![ViewportFrame with a yellow colorization](https://prod.docsiteassets.roblox.com/assets/legacy/Screen_Shot_2019-02-09_at_8.08.58_PM.png)

See also:

- [`ViewportFrame.ImageTransparency`](https://create.roblox.com/docs/reference/engine/classes/ViewportFrame#ImageTransparency), determines the transparency of
the rendered image
- [`ViewportFrame.CurrentCamera`](https://create.roblox.com/docs/reference/engine/classes/ViewportFrame#CurrentCamera), the [`Camera`](https://create.roblox.com/docs/reference/engine/classes/Camera) that is used to
render children objects