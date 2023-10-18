**PluginDragLeft** fires when the user's mouse leaves a [`PluginGui`](https://create.roblox.com/docs/reference/engine/classes/PluginGui)
during a drag operation started by [`Plugin:StartDrag()`](https://create.roblox.com/docs/reference/engine/classes/Plugin#StartDrag).

This event and [`PluginDragDropped`](https://create.roblox.com/docs/reference/engine/classes/PluginGui#PluginDragDropped) are
useful for hiding a "Drop Here" UI on PluginGuis where a drag operation
can be dropped. Such a UI should be shown when either
[`PluginDragEntered`](https://create.roblox.com/docs/reference/engine/classes/PluginGui#PluginDragEntered) fires.

See also:

- [`PluginGui.PluginDragEntered`](https://create.roblox.com/docs/reference/engine/classes/PluginGui#PluginDragEntered)
- [`PluginGui.PluginDragMoved`](https://create.roblox.com/docs/reference/engine/classes/PluginGui#PluginDragMoved)
- [`PluginGui.PluginDragDropped`](https://create.roblox.com/docs/reference/engine/classes/PluginGui#PluginDragDropped)