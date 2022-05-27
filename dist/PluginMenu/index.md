A context menu that can be shown in Studio. It displays a list of
PluginActions and supports submenus.

PluginMenus must be created using the [Plugin:CreatePluginMenu](https://create.roblox.com/docs/reference/engine/classes/Plugin#CreatePluginMenu) function in
order to work as expected.

See also:

- [PluginAction](https://create.roblox.com/docs/reference/engine/classes/PluginAction), an object that represents a generic performable action in
  Roblox Studio, with no directly associated `Toolbar` or `Button`.
- `Plugin.CreatePluginAction`, creates a PluginAction.
- `PluginMenu.Title`, the text to be displayed when used as a sub menu.
- `PluginMenu.Icon`, the icon to be displayed when used as a sub menu.
- `PluginMenu.AddAction`, adds the given action to the menu.
- `PluginMenu.AddNewAction`, creates a temporary action that is hidden from
  Studio's customize shortcuts window.
- `PluginMenu.AddMenu`, adds the given menu as a separator.
- `PluginMenu.AddSeparator`, adds a separator between items in the menu
- `PluginMenu.Clear`, clears the menu.
- `PluginMenu.ShowAsync`, shows the menu at the mouse cursor. Yields until
  either an item is selected or the menu is closed. The selected action fires
  its Triggered event.