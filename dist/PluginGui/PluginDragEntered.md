**PluginDragEntered** fires when the user's mouse enters the
[`PluginGui`](https://create.roblox.com/docs/reference/engine/classes/PluginGui) during a drag operation started by
[`Plugin:StartDrag()`](https://create.roblox.com/docs/reference/engine/classes/Plugin#StartDrag).

This event is useful for displaying a "Drop Here" UI on PluginGuis where a
drag operation can be dropped. Such a UI should be hidden when either
[`PluginDragLeft`](https://create.roblox.com/docs/reference/engine/classes/PluginGui#PluginDragLeft) or
[`PluginDragDropped`](https://create.roblox.com/docs/reference/engine/classes/PluginGui#PluginDragDropped) fire.

See also:

- [`PluginGui.PluginDragLeft`](https://create.roblox.com/docs/reference/engine/classes/PluginGui#PluginDragLeft)
- [`PluginGui.PluginDragMoved`](https://create.roblox.com/docs/reference/engine/classes/PluginGui#PluginDragMoved)
- [`PluginGui.PluginDragDropped`](https://create.roblox.com/docs/reference/engine/classes/PluginGui#PluginDragDropped)