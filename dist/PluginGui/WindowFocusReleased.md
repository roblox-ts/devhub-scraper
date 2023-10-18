**WindowFocusReleased** fires immediately when the user stops interacting
with the PluginGui's window, usually by clicking on on something not in
the window. This functions works similarly to the similarly-named
[`UserInputService.WindowFocusReleased`](https://create.roblox.com/docs/reference/engine/classes/UserInputService#WindowFocusReleased) event.

If focus is moving to another [`PluginGui`](https://create.roblox.com/docs/reference/engine/classes/PluginGui) while the user had this
PluginGui in focus, then this event fires before the other's
[`WindowFocused`](https://create.roblox.com/docs/reference/engine/classes/PluginGui#WindowFocused) event. However, if the main
game window is being put in focus, this event fires **after**
[`UserInputService.WindowFocused`](https://create.roblox.com/docs/reference/engine/classes/UserInputService#WindowFocused).