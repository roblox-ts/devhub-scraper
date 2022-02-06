This property determines how a rendered image will be colorized. It allows you to change the image color without directly modifying the rendered object.The default colorization value is \`DataType/Color3|Color3.new(1,1,1) (white). When set to white no colorization occurs.

It functions similarly to [ImageLabel.ImageColor3](https://developer.roblox.com/en-us/api-reference/property/ImageLabel/ImageColor3) and [Decal.Color3](https://developer.roblox.com/en-us/api-reference/property/Decal/Color3)except that it is applied to the rendered image.

The image below demonstrates the same ViewportFrame with two different colorizations. The first image has the default (white) colorization and the second image has a `Color3.new(255, 255, 102)` (yellow) colorization.  
![ViewportFrame with the default white colorization](https://developer.roblox.com/assets/blt5926492ac1373d11/Screen_Shot_2019-02-09_at_8.03.48_PM.png)  
![ViewportFrame with a yellow colorization](https://developer.roblox.com/assets/bltaca53dbfce931b31/Screen_Shot_2019-02-09_at_8.08.58_PM.png)

### See also

*   [ViewportFrame-GUI](https://developer.roblox.com/en-us/articles/viewportframe-gui), an article exploring how the ViewportFrame GUI can render 3D objects inside its bounds
*   [ViewportFrame.ImageTransparency](https://developer.roblox.com/en-us/api-reference/property/ViewportFrame/ImageTransparency), determines the transparency of the rendered image
*   [ViewportFrame.CurrentCamera](https://developer.roblox.com/en-us/api-reference/property/ViewportFrame/CurrentCamera), the [Camera](https://developer.roblox.com/en-us/api-reference/class/Camera) that is used to render children objects