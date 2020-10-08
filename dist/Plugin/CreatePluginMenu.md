This function creates a new [PluginMenu](https://developer.roblox.com/en-us/api-reference/class/PluginMenu), which is a context menu that can be shown in Studio that displays a list of [PluginActions](https://developer.roblox.com/en-us/api-reference/class/PluginAction) and supports submenus.

In order for PluginMenus to work as expected, they must be created using this function.

See also
--------

*   `articles/Intro to Plugins`, an introductory article to plugin use and development
*   [PluginAction](https://developer.roblox.com/en-us/api-reference/class/PluginAction), an object that represents a generic performable action in Roblox Studio, with no directly associated `Toolbar` or `Button`.
*   [Plugin:CreatePluginAction](https://developer.roblox.com/en-us/api-reference/function/Plugin/CreatePluginAction), creates a PluginAction
*   [PluginMenu.Title](https://developer.roblox.com/en-us/api-reference/property/PluginMenu/Title), the text to be displayed when used as a sub menu
*   [PluginMenu.Icon](https://developer.roblox.com/en-us/api-reference/property/PluginMenu/Icon), the icon to be displayed when used as a sub menu
*   [PluginMenu:AddAction](https://developer.roblox.com/en-us/api-reference/function/PluginMenu/AddAction), adds the given action to the menu
*   [PluginMenu:AddNewAction](https://developer.roblox.com/en-us/api-reference/function/PluginMenu/AddNewAction), creates a temporary action that is hidden from Studio's customize shortcuts window
*   [PluginMenu:AddMenu](https://developer.roblox.com/en-us/api-reference/function/PluginMenu/AddMenu), adds the given menu as a separator
*   [PluginMenu:AddSeparator](https://developer.roblox.com/en-us/api-reference/function/PluginMenu/AddSeparator), adds a separator between items in the menu
*   [PluginMenu:Clear](https://developer.roblox.com/en-us/api-reference/function/PluginMenu/Clear), clears the menu
*   [PluginMenu:ShowAsync](https://developer.roblox.com/en-us/api-reference/function/PluginMenu/ShowAsync), shows the menu at the mouse cursor. Yields until either an item is selected or the menu is closed. The selected action fires its Triggered event