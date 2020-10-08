This function creates a [PluginAction](https://developer.roblox.com/en-us/api-reference/class/PluginAction) which is an object that represents a generic performable action in Roblox Studio, with no directly associated `Toolbar` or `Button`. In Roblox Studio, they can be assigned a keyboard shortcut under `File → Advanced → Customize Shortcuts…`, and they can also be added to the Quick Access Toolbar.

When an action is triggered, the [PluginAction.Triggered](https://developer.roblox.com/en-us/api-reference/event/PluginAction/Triggered) event is signaled.

In order for PluginActions work as expected, they must be created using this function.

See also
--------

*   `articles/Intro to Plugins`, an introductory article to plugin use and development
*   [PluginMenu](https://developer.roblox.com/en-us/api-reference/class/PluginMenu), a context menu that can be shown in Studio which displays a list of PluginActions and supports submenus
*   [Plugin:CreatePluginMenu](https://developer.roblox.com/en-us/api-reference/function/Plugin/CreatePluginMenu), creates a PluginMenu