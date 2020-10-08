GetRelativeMousePosition returns the position of the mouse relative to the top-left corner of the [PluginGui](https://developer.roblox.com/en-us/api-reference/class/PluginGui). The returned value changes only if a mouse input began on the PluginGui, or if the mouse is presently hovering over the window.

![An animation of the return value of Plugin:GetRelativeMousePosition](https://developer.roblox.com/assets/blt2bbcc6b4d96ba800/PluginGui.GetRelativeMousePosition.gif)

The animation above displays the value returned by this function (the left mouse button is pressed in the animation). Notice how the X-value is negative when the mouse is on the left of the window.