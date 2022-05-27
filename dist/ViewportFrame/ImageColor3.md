This property determines how a rendered image will be colorized. It allows
you to change the image color without directly modifying the rendered
object.The default colorization value is
[Color3.new(1,1,1) (white). When set to white no
colorization occurs.

It functions similarly to ](https://developer.roblox.com/en-us/api-reference/datatype/Color3)ImageLabel/ImageColor3` and
`Decal/Color3`except that it is applied to the rendered image.

The image below demonstrates the same ViewportFrame with two different
colorizations. The first image has the default (white) colorization and
the second image has a `Color3.new(255, 255, 102)` (yellow) colorization.
![ViewportFrame with the default white colorization][1]
![ViewportFrame with a yellow colorization][2]

See also:

- `ViewportFrame/ImageTransparency`, determines the transparency of the
  rendered image
- `ViewportFrame/CurrentCamera`, the `Camera` that is used to render
  children objects

[1]: https://prod.docsiteassets.roblox.com/assets/blt5926492ac1373d11/Screen_Shot_2019-02-09_at_8.03.48_PM.png
[2]: https://prod.docsiteassets.roblox.com/assets/bltaca53dbfce931b31/Screen_Shot_2019-02-09_at_8.08.58_PM.png