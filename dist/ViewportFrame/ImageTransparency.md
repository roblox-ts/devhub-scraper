This property determines the transparency of the rendered image. It allows
you to change the image transparency without directly modifying the
rendered object. A value of 0 is completely opaque, and a value of 1 is
completely transparent (invisible). The default transparency is 0.

This property behaves similarly to [GuiObject.BackgroundTransparency](https://create.roblox.com/docs/reference/engine/classes/GuiObject#BackgroundTransparency) or
[BasePart.Transparency](https://create.roblox.com/docs/reference/engine/classes/BasePart#Transparency) except that it is applied to the rendered image.

The image below demonstrates the same ViewportFrame with two different
transparency. The first image has a transparency of 0 and the second image
has a transparency of 0.5.

![ViewportFrame with default 0 transparency][1]
![ViewportFrame with 0.5 transparencu][2]

See also:

- [ViewportFrame.ImageColor3](https://create.roblox.com/docs/reference/engine/classes/ViewportFrame#ImageColor3), determines how a rendered image will be
  colorized
- [ViewportFrame.CurrentCamera](https://create.roblox.com/docs/reference/engine/classes/ViewportFrame#CurrentCamera), the [Camera](https://create.roblox.com/docs/reference/engine/classes/Camera) that is used to render
  children objects

[1]: https://prod.docsiteassets.roblox.com/assets/blt5926492ac1373d11/Screen_Shot_2019-02-09_at_8.03.48_PM.png
[2]: https://prod.docsiteassets.roblox.com/assets/bltdfca66b7936eee42/Screen_Shot_2019-02-09_at_8.23.38_PM.png