Fired when the [`Plugin`](https://create.roblox.com/docs/reference/engine/classes/Plugin) is deactivated. This occurs when either the
plugin code calls [`Plugin:Deactivate()`](https://create.roblox.com/docs/reference/engine/classes/Plugin#Deactivate), or because some other
plugin called [`Plugin:Activate()`](https://create.roblox.com/docs/reference/engine/classes/Plugin#Activate), which forces all other plugins to
lose their active state.

See also:

- [`Plugin.Unloading`](https://create.roblox.com/docs/reference/engine/classes/Plugin#Unloading), fires immediately before the plugin is
unloaded or reloaded via uninstallation, deactivation, or updating