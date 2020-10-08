**PluginDragEntered** fires when the user's mouse enters the [PluginGui](https://developer.roblox.com/en-us/api-reference/class/PluginGui) during a drag operation started by [Plugin:StartDrag](https://developer.roblox.com/en-us/api-reference/function/Plugin/StartDrag).

This event is useful for displaying a “Drop Here” UI on PluginGuis where a drag operation can be dropped. Such a UI should be hidden when either [PluginDragLeft](https://developer.roblox.com/en-us/api-reference/event/PluginGui/PluginDragLeft) or [PluginDragDropped](https://developer.roblox.com/en-us/api-reference/event/PluginGui/PluginDragDropped) fire.

See Also
--------

*   `articles/Drag and Drop in Studio Widgets`
*   [PluginGui.PluginDragLeft](https://developer.roblox.com/en-us/api-reference/event/PluginGui/PluginDragLeft)
*   [PluginGui.PluginDragMoved](https://developer.roblox.com/en-us/api-reference/event/PluginGui/PluginDragMoved)
*   [PluginGui.PluginDragDropped](https://developer.roblox.com/en-us/api-reference/event/PluginGui/PluginDragDropped)