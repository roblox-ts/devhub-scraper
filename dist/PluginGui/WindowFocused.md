**WindowFocused** fires immediately when the user starts interacting with
the PluginGui's window, usually by clicking on it. This functions works
similarly to the similarly-named [`UserInputService.WindowFocused`](https://create.roblox.com/docs/reference/engine/classes/UserInputService#WindowFocused)
event. It fires before any [`GuiObject.InputBegan`](https://create.roblox.com/docs/reference/engine/classes/GuiObject#InputBegan) events related to
mouse buttons.

If another [`PluginGui`](https://create.roblox.com/docs/reference/engine/classes/PluginGui) is in focus and the user focuses this
PluginGui, then this event fires after the other's
[`WindowFocusReleased`](https://create.roblox.com/docs/reference/engine/classes/PluginGui#WindowFocusReleased) event. However,
if the main game window was in focus, this event fires **after**
[`UserInputService.WindowFocusReleased`](https://create.roblox.com/docs/reference/engine/classes/UserInputService#WindowFocusReleased).