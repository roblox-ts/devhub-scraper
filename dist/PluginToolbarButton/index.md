A PluginToolbarButton is an object created by the
[`PluginToolbar:CreateButton()`](https://create.roblox.com/docs/reference/engine/classes/PluginToolbar#CreateButton) function. It allows the user to initiate
a single, one-off action in Roblox Studio through the
[`Click`](https://create.roblox.com/docs/reference/engine/classes/PluginToolbarButton#Click) event. Pictured below are three
PluginToolbarButtons. From left to right: the default, hover and pressed
states. The hovered button in the center shows tooltip text, which is the 2nd
argument passed to [`PluginToolbar:CreateButton()`](https://create.roblox.com/docs/reference/engine/classes/PluginToolbar#CreateButton).

![Three PluginToolbarButtons rendered on a PluginToolbar titled "Three Wise Monkeys"](https://prod.docsiteassets.roblox.com/assets/legacy/PluginToolbarButton-light.png)
## Behavior

When pressed, the [`Click`](https://create.roblox.com/docs/reference/engine/classes/PluginToolbarButton#Click) event fires. A
button will also remain in the pressed state, which may be set manually using
[`SetActive`](https://create.roblox.com/docs/reference/engine/classes/PluginToolbarButton#SetActive). Upon plugin activation
([`Plugin:Activate()`](https://create.roblox.com/docs/reference/engine/classes/Plugin#Activate)), buttons in all other [`PluginToolbar`](https://create.roblox.com/docs/reference/engine/classes/PluginToolbar)s will
be toggled off. If all buttons in a toolbar are off, the toolbar's plugin is
deactivated ([`Plugin:Deactivate()`](https://create.roblox.com/docs/reference/engine/classes/Plugin#Deactivate)).

When the game viewport is not visible, buttons will be disabled as if their
[`Enabled`](https://create.roblox.com/docs/reference/engine/classes/PluginToolbarButton#Enabled) property were false. Disabled
buttons are desaturated and do not respond to user clicks. By setting
[`ClickableWhenViewportHidden`](https://create.roblox.com/docs/reference/engine/classes/PluginToolbarButton#ClickableWhenViewportHidden)
to true, you can allow plugin buttons to remain clickable (such as during
script editing).
## History

- Prior to an update released in January 2019, this class was simply known as
"Button". This was changed to reduce confusion with similarly named in-game
UI element classes, such as [`TextButton`](https://create.roblox.com/docs/reference/engine/classes/TextButton).