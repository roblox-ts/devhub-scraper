BillboardGuis are containers for GUI objects that appear in the 3D space. A BillboardGui's position is determined by the position of it's [BillboardGui.Adornee](https://developer.roblox.com/en-us/api-reference/property/BillboardGui/Adornee). If the adornee is set to [Part](https://developer.roblox.com/en-us/api-reference/class/Part) then the [BasePart.Position](https://developer.roblox.com/en-us/api-reference/property/BasePart/Position) will be used. If it is set to [Attachment](https://developer.roblox.com/en-us/api-reference/class/Attachment) then the [Attachment.WorldPosition](https://developer.roblox.com/en-us/api-reference/property/Attachment/WorldPosition) will be used. BillboardGui always faces the camera, and can change its size with distance or remain the same size on the screen. Unlike the text that appears above models with Humanoids' heads, this does not disappear with distance.

The [Size](https://developer.roblox.com/en-us/api-reference/property/BillboardGui/Size) property of a BillboardGui works slightly differently than [GuiObject](https://developer.roblox.com/en-us/api-reference/class/GuiObject)s: the offset portion still represents pixel size; however, the scalar portion represents the dimensions in world space (studs). So, a size of `UDim2.new(3, 50, 5, -20)` would be the size of 3 by 5 studs in world space, with 50 more pixels on the X axis and 20 less pixels on the Y axis.

##### Caching static UI for performance improvements

A Gui's appearance is cached until one of the following events occurs:*   A descendant is added to the Gui.
*   A descendant is removed from the Gui.
*   A property of a descendant of the Gui changes.
*   A property of the Gui changes.

If any of these events occur, the Gui's appearance will be recomputed the next frame it gets rendered.