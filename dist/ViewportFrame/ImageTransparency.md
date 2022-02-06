This property determines the transparency of the rendered image. It allows you to change the image transparency without directly modifying the rendered object. A value of 0 is completely opaque, and a value of 1 is completely transparent (invisible). The default transparency is 0.

This property behaves similarly to [GuiObject.BackgroundTransparency](https://developer.roblox.com/en-us/api-reference/property/GuiObject/BackgroundTransparency) or [BasePart.Transparency](https://developer.roblox.com/en-us/api-reference/property/BasePart/Transparency) except that it is applied to the rendered image.

The image below demonstrates the same ViewportFrame with two different transparency. The first image has a transparency of 0 and the second image has a transparency of 0.5.

![ViewportFrame with default 0 transparency](https://developer.roblox.com/assets/blt5926492ac1373d11/Screen_Shot_2019-02-09_at_8.03.48_PM.png)  
![ViewportFrame with 0.5 transparencu](https://developer.roblox.com/assets/bltdfca66b7936eee42/Screen_Shot_2019-02-09_at_8.23.38_PM.png)

### See also

*   [ViewportFrame-GUI](https://developer.roblox.com/en-us/articles/ViewportFrame-GUI), an article exploring how the ViewportFrame GUI can render 3D objects inside its bounds
*   [ViewportFrame.ImageColor3](https://developer.roblox.com/en-us/api-reference/property/ViewportFrame/ImageColor3), determines how a rendered image will be colorized
*   [ViewportFrame.CurrentCamera](https://developer.roblox.com/en-us/api-reference/property/ViewportFrame/CurrentCamera), the [Camera](https://developer.roblox.com/en-us/api-reference/class/Camera) that is used to render children objects