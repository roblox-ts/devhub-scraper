This function creates a [`PluginAction`](https://create.roblox.com/docs/reference/engine/classes/PluginAction) which is an object that
represents a generic performable action in Roblox Studio, with no directly
associated `Toolbar` or [`Enum.Button`](https://create.roblox.com/docs/reference/engine/enums/Button). In Roblox Studio, they can be
assigned a keyboard shortcut under
`File → Advanced → Customize Shortcuts…`, and they can also be added to
the Quick Access Toolbar.

When an action is triggered, the [`PluginAction.Triggered`](https://create.roblox.com/docs/reference/engine/classes/PluginAction#Triggered) event is
signaled.

In order for PluginActions work as expected, they must be created using
this function.

See also:

- [`PluginMenu`](https://create.roblox.com/docs/reference/engine/classes/PluginMenu), a context menu that can be shown in Studio which
displays a list of PluginActions and supports submenus
- [`Plugin:CreatePluginMenu()`](https://create.roblox.com/docs/reference/engine/classes/Plugin#CreatePluginMenu), creates a PluginMenu