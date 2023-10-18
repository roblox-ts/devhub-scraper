This function returns true if this plugin is currently active with an
exclusive mouse, after having been activated via the
[`Plugin:Activate()`](https://create.roblox.com/docs/reference/engine/classes/Plugin#Activate) function. If this returns true, a
[`PluginMouse`](https://create.roblox.com/docs/reference/engine/classes/PluginMouse) can be retrieved via [`Plugin:GetMouse()`](https://create.roblox.com/docs/reference/engine/classes/Plugin#GetMouse).

See also:

- [`Plugin.Deactivation`](https://create.roblox.com/docs/reference/engine/classes/Plugin#Deactivation), fires when the plugin is deactivated
- [`Plugin.Unloading`](https://create.roblox.com/docs/reference/engine/classes/Plugin#Unloading), fires immediately before the plugin is
unloaded or reloaded via uninstallation, deactivation, or updating