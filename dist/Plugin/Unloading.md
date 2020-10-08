This event fires immediately before the [Plugin](https://developer.roblox.com/en-us/api-reference/class/Plugin) stops running. Plugins are unloaded when disabled, uninstalled, about to be updated, or when the place is closing.

It enables a plugin to clean up after itself before its scripts stop running, e.g. to remove unnecessary instances from the [DataModel](https://developer.roblox.com/en-us/api-reference/class/DataModel). If a plugin does not clean up properly, the old copies will remain. When this occurs, users may be forced to close and reopen the place which is a bad user experience.

Plugin-related instances such as [PluginToolbarButtons](https://developer.roblox.com/en-us/api-reference/class/PluginToolbarButton), [DockWidgetPluginGuis](https://developer.roblox.com/en-us/api-reference/class/DockWidgetPluginGui), and [PluginGuis](https://developer.roblox.com/en-us/api-reference/class/PluginGui) are automatically cleaned up when the plugin is unloaded so there is no need to remove them.

See also
--------

`articles/Intro to Plugins`, an introductory article to plugin use and development