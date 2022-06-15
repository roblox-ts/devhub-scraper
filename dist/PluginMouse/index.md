The PluginMouse object gives [Plugin](https://developer.roblox.com/en-us/api-reference/class/Plugin)s access to the mouse. It works like the [Mouse](https://developer.roblox.com/en-us/api-reference/class/Mouse) object and can be obtained using the plugin [Plugin:GetMouse](https://developer.roblox.com/en-us/api-reference/function/Plugin/GetMouse) method.

Note the PluginMouse can only be used when the plugin has been activated using [Plugin:Activate](https://developer.roblox.com/en-us/api-reference/function/Plugin/Activate).

In addition to the functions from the [Mouse](https://developer.roblox.com/en-us/api-reference/class/Mouse) object, the PluginMouse includes the [PluginMouse.DragEnter](https://developer.roblox.com/en-us/api-reference/event/PluginMouse/DragEnter) function which keeps track of items being selected whilst the mouse is dragging.

For more information on how to use mouse objects, see the [Mouse](https://developer.roblox.com/en-us/api-reference/class/Mouse) page.