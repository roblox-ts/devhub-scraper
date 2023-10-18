BillboardGuis are containers for [`GuiObjects`](https://create.roblox.com/docs/reference/engine/classes/GuiObject) that appear in
the 3D space. BillboardGuis always face the camera, and can either change size
with distance or remain the same size on the screen based on the
[`BillboardGui.Size`](https://create.roblox.com/docs/reference/engine/classes/BillboardGui#Size) property.

Their position is relative to the [`BillboardGui.Adornee`](https://create.roblox.com/docs/reference/engine/classes/BillboardGui#Adornee). If no Adornee
is set, then the parent of the BillboardGui will be used as the adornee. For
[`BaseParts`](https://create.roblox.com/docs/reference/engine/classes/BasePart), the [`Position`](https://create.roblox.com/docs/reference/engine/classes/BasePart#Position) property
will be used. For [`Attachments`](https://create.roblox.com/docs/reference/engine/classes/Attachment), the
[`WorldPosition`](https://create.roblox.com/docs/reference/engine/classes/Attachment#WorldPosition) property will be used.

The [`Size`](https://create.roblox.com/docs/reference/engine/classes/BillboardGui#Size) property of a BillboardGui works slightly
differently than [`GuiObject.Size`](https://create.roblox.com/docs/reference/engine/classes/GuiObject#Size). The Offset portion works the same,
but the Scale portion is used as a size in studs in 3D space.

A size of `UDim2.fromScale(4, 5)` is 4x5 studs, and scales the UI larger and
smaller depending on distance from the camera. A size of
`UDim2.fromOffset(200, 100)` is always 200x100 on the screen, and does not
change size with distance. Scale and Offset values can also be combined
together, like with [`GuiObject.Size`](https://create.roblox.com/docs/reference/engine/classes/GuiObject#Size).

When creating size-scaled BillboardGuis, it's important to make sure all the
UI objects within are using Scale sizing and all text has
[`TextLabel.TextScaled`](https://create.roblox.com/docs/reference/engine/classes/TextLabel#TextScaled) enabled, to ensure correct scaling.

The AbsolutePosition property of a BillboardGui and all of its descendants is
relative to the top left corner of its canvas, and so is always `0, 0` for the
BillboardGui instance.
## Caching Static UI for Performance

A Gui's appearance is cached until one of the following events occurs:

- A descendant is added to the Gui.
- A descendant is removed from the Gui.
- A property of a descendant of the Gui changes.
- A property of the Gui changes.

If any of these events occur, the Gui's appearance will be recomputed the next
frame it gets rendered.