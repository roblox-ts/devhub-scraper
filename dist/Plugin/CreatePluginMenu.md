This function creates a new [`PluginMenu`](https://create.roblox.com/docs/reference/engine/classes/PluginMenu), which is a context menu
that can be shown in Studio that displays a list of
[`PluginActions`](https://create.roblox.com/docs/reference/engine/classes/PluginAction) and supports submenus.

In order for PluginMenus to work as expected, they must be created using
this function.

See also:

- [`PluginAction`](https://create.roblox.com/docs/reference/engine/classes/PluginAction), an object that represents a generic performable
action in Roblox Studio, with no directly associated `Toolbar` or
[`Enum.Button`](https://create.roblox.com/docs/reference/engine/enums/Button).
- [`Plugin:CreatePluginAction()`](https://create.roblox.com/docs/reference/engine/classes/Plugin#CreatePluginAction), creates a PluginAction
- [`PluginMenu.Title`](https://create.roblox.com/docs/reference/engine/classes/PluginMenu#Title), the text to be displayed when used as a sub
menu
- [`PluginMenu.Icon`](https://create.roblox.com/docs/reference/engine/classes/PluginMenu#Icon), the icon to be displayed when used as a sub
menu
- [`PluginMenu:AddAction()`](https://create.roblox.com/docs/reference/engine/classes/PluginMenu#AddAction), adds the given action to the menu
- [`PluginMenu:AddNewAction()`](https://create.roblox.com/docs/reference/engine/classes/PluginMenu#AddNewAction), creates a temporary action that is
hidden from Studio's customize shortcuts window
- [`PluginMenu:AddMenu()`](https://create.roblox.com/docs/reference/engine/classes/PluginMenu#AddMenu), adds the given menu as a separator
- [`PluginMenu:AddSeparator()`](https://create.roblox.com/docs/reference/engine/classes/PluginMenu#AddSeparator), adds a separator between items in the
menu
- [`PluginMenu:Clear()`](https://create.roblox.com/docs/reference/engine/classes/PluginMenu#Clear), clears the menu
- [`PluginMenu:ShowAsync()`](https://create.roblox.com/docs/reference/engine/classes/PluginMenu#ShowAsync), shows the menu at the mouse cursor.
Yields until either an item is selected or the menu is closed. The
selected action fires its Triggered event