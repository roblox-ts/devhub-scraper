The PluginMouse object gives [Plugin](https://create.roblox.com/docs/reference/engine/classes/Plugin)s access to the mouse. It works like the
[Mouse](https://create.roblox.com/docs/reference/engine/classes/Mouse) object and can be obtained using the plugin [Plugin:GetMouse](https://create.roblox.com/docs/reference/engine/classes/Plugin#GetMouse) method.

Note the PluginMouse can only be used when the plugin has been activated using
[Plugin:Activate](https://create.roblox.com/docs/reference/engine/classes/Plugin#Activate).

In addition to the functions from the [Mouse](https://create.roblox.com/docs/reference/engine/classes/Mouse) object, the PluginMouse includes
the [PluginMouse.DragEnter](https://create.roblox.com/docs/reference/engine/classes/PluginMouse#DragEnter) function which keeps track of items being selected
whilst the mouse is dragging.

For more information on how to use mouse objects, see the [Mouse](https://create.roblox.com/docs/reference/engine/classes/Mouse) page.