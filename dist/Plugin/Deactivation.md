Fired when the [Plugin](https://developer.roblox.com/en-us/api-reference/class/Plugin) is deactivated. This occurs when either the plugin code calls [Plugin:Deactivate](https://developer.roblox.com/en-us/api-reference/function/Plugin/Deactivate), or because some other plugin called [Plugin:Activate](https://developer.roblox.com/en-us/api-reference/function/Plugin/Activate), which forces all other plugins to lose their active state.

See also
--------

*   [Plugin.Unloading](https://developer.roblox.com/en-us/api-reference/event/Plugin/Unloading), fires immediately before the plugin is unloaded or reloaded via uninstallation, deactivation, or updating