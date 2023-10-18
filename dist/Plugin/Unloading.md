This event fires immediately before the [`Plugin`](https://create.roblox.com/docs/reference/engine/classes/Plugin) stops running.
Plugins are unloaded when disabled, uninstalled, about to be updated, or
when the place is closing.

It enables a plugin to clean up after itself before its scripts stop
running, e.g. to remove unnecessary instances from the [`DataModel`](https://create.roblox.com/docs/reference/engine/classes/DataModel).
If a plugin does not clean up properly, the old copies will remain. When
this occurs, users may be forced to close and reopen the place which is a
bad user experience.

Plugin-related instances such as
[`PluginToolbarButtons`](https://create.roblox.com/docs/reference/engine/classes/PluginToolbarButton),
[`DockWidgetPluginGuis`](https://create.roblox.com/docs/reference/engine/classes/DockWidgetPluginGui), and
[`PluginGuis`](https://create.roblox.com/docs/reference/engine/classes/PluginGui) are automatically cleaned up when the plugin
is unloaded so there is no need to remove them.