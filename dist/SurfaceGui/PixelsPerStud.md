**PixelsPerStud** determines the density of pixels used for each world-space stud to render the contents of the SurfaceGui.

Higher values will cause the various [GuiObject](https://developer.roblox.com/en-us/api-reference/class/GuiObject) within to appear smaller if they are kept the same size. Conversely, lower values will cause objects to appear larger. However, if the GuiObjects are scaled proportionally (either by using a [UIScale](https://developer.roblox.com/en-us/api-reference/class/UIScale) or modifying [Size](https://developer.roblox.com/en-us/api-reference/property/GuiObject/Size) or [TextLabel.TextSize](https://developer.roblox.com/en-us/api-reference/property/TextLabel/TextSize) etc.), this property allows for higher definition to be used. It's important to select a value based on how far away you expect a player to view the SurfaceGui. Be mindful that a large pixel density could negatively affect performance if the face of the adorned part is large enough.

![Three parts with SurfaceGuis, each including a 200x50 TextLabel within them. From left-to-right, their PixelsPerStud values are 25, 50 and 75. These values cause the apparent size of each TextLabel to change.](https://developer.roblox.com/assets/blt1fd89a45f9144a8b/SurfaceGui.PixelsPerStud.jpg)