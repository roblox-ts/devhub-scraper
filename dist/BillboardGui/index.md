BillboardGuis are containers for [GuiObjects](https://developer.roblox.com/en-us/api-reference/class/GuiObject) that appear in the 3D  
space. BillboardGuis always face the camera, and can either change size with  
distance or remain the same size on the screen based on the  
[BillboardGui.Size](https://developer.roblox.com/en-us/api-reference/property/BillboardGui/Size) property.

Their position is relative to the [BillboardGui.Adornee](https://developer.roblox.com/en-us/api-reference/property/BillboardGui/Adornee). If no Adornee is  
set, then the parent of the BillboardGui will be used as the adornee. For  
[BaseParts](https://developer.roblox.com/en-us/api-reference/class/BasePart), the [Position](https://developer.roblox.com/en-us/api-reference/property/BasePart/Position) property will be used.  
For [Attachments](https://developer.roblox.com/en-us/api-reference/class/Attachment), the [WorldPosition](https://developer.roblox.com/en-us/api-reference/property/Attachment/WorldPosition)  
property will be used.

The [Size](https://developer.roblox.com/en-us/api-reference/property/BillboardGui/Size) property of a BillboardGui works slightly  
differently than [GuiObject.Size](https://developer.roblox.com/en-us/api-reference/property/GuiObject/Size). The Offset portion works the  
same, but the Scale portion is used as a size in studs in 3D space.

A size of `UDim2.fromScale(4, 5)` is 4x5 studs, and scales the UI larger and  
smaller depending on distance from the camera. A size of  
`UDim2.fromOffset(200, 100)` is always 200x100 on the screen, and does not  
change size with distance. Scale and Offset values can also be combined  
together, like with [GuiObject.Size](https://developer.roblox.com/en-us/api-reference/property/GuiObject/Size).

When creating size-scaled BillboardGuis, it's important to make sure all the  
UI objects within are using Scale sizing and all text has  
[TextLabel.TextScaled](https://developer.roblox.com/en-us/api-reference/property/TextLabel/TextScaled) enabled, to ensure correct scaling.

The AbsolutePosition property of a BillboardGui and all of its descendants is  
relative to the top left corner of its canvas, and so is always `0, 0` for the  
BillboardGui instance.

##### Caching static UI for performance improvements

A Gui's appearance is cached until one of the following events occurs:

*   A descendant is added to the Gui.
*   A descendant is removed from the Gui.
*   A property of a descendant of the Gui changes.
*   A property of the Gui changes.

If any of these events occur, the Gui's appearance will be recomputed the next frame it gets rendered.