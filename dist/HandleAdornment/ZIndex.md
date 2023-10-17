The **ZIndex** property determines the draw order of the
[`HandleAdornment`](https://create.roblox.com/docs/reference/engine/classes/HandleAdornment). This **ZIndex** only refers to how the adornment
will draw relative to other adornments or 3d objects in the workspace.
This does not relate to the [`GuiObject.ZIndex`](https://create.roblox.com/docs/reference/engine/classes/GuiObject#ZIndex) of GuiObjects.

The valid values for ZIndex are from -1 to 10. If two HandleAdornments are
drawn over one another, the one with the higher ZIndex will be drawn. This
order of drawing will be respected even if the adormnent with higher
ZIndex is behind the other adornment in terms of its position in 3d space.
If set to -1, ZIndex will force the adornment to draw behind other
adornments and objects in the Workspace, even if the
[`HandleAdornment.AlwaysOnTop`](https://create.roblox.com/docs/reference/engine/classes/HandleAdornment#AlwaysOnTop) property for the adornment is true.