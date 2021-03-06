This function sets the state of the calling plugin to activated. Activating the plugin allows mouse control through the [Plugin:GetMouse](https://developer.roblox.com/en-us/api-reference/function/Plugin/GetMouse) method.

At any given time there are either 0 or 1 Activated Plugins. Activating a plugin will deactivate all other plugins (they will receive a [Plugin.Deactivation](https://developer.roblox.com/en-us/api-reference/event/Plugin/Deactivation) event).

See also
--------

*   [Plugin:IsActivatedWithExclusiveMouse](https://developer.roblox.com/en-us/api-reference/function/Plugin/IsActivatedWithExclusiveMouse), returns true if this plugin is currently active with an exclusive mouse, after having been activated via this function
*   [Plugin.Unloading](https://developer.roblox.com/en-us/api-reference/event/Plugin/Unloading), fires immediately before the plugin is unloaded or reloaded via uninstallation, deactivation, or updating