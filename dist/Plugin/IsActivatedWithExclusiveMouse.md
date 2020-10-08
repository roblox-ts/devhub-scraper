This function returns true if this plugin is currently active with an exclusive mouse, after having been activated via the [Plugin:Activate](https://developer.roblox.com/en-us/api-reference/function/Plugin/Activate) function. If this returns true, a [PluginMouse](https://developer.roblox.com/en-us/api-reference/class/PluginMouse) can be retrieved via [Plugin:GetMouse](https://developer.roblox.com/en-us/api-reference/function/Plugin/GetMouse).

See also
--------

*   [Plugin.Deactivation](https://developer.roblox.com/en-us/api-reference/event/Plugin/Deactivation), fires when the plugin is deactivated
*   [Plugin.Unloading](https://developer.roblox.com/en-us/api-reference/event/Plugin/Unloading), fires immediately before the plugin is unloaded or reloaded via uninstallation, deactivation, or updating