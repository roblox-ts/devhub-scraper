**Enabled** determines whether a button is clickable in general. When this
property is false, the button will be greyed out and unclickable,
preventing the user from firing the [Click](https://create.roblox.com/docs/reference/engine/classes/PluginToolbarButton#Click)
event. Buttons are enabled by default.

Plugins should disable their buttons when the button action isn't relevant
in the current context. For example, a plugin button that assigns random
colors to selected should not be enabled when the selection contains no
parts. See the code samples for more information.

See also:

- [ClickableWhenViewportHidden](https://create.roblox.com/docs/reference/engine/classes/PluginToolbarButton#ClickableWhenViewportHidden),
  which determines whether a button is clickable when the game view is
  hidden (and not just in general)