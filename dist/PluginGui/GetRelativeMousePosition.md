GetRelativeMousePosition returns the position of the mouse relative to the
top-left corner of the [`PluginGui`](https://create.roblox.com/docs/reference/engine/classes/PluginGui). The returned value changes only
if a mouse input began on the PluginGui, or if the mouse is presently
hovering over the window.

![An animation of the return value of Plugin:GetRelativeMousePosition](https://prod.docsiteassets.roblox.com/assets/legacy/PluginGui.GetRelativeMousePosition.gif)

The animation above displays the value returned by this function (the left
mouse button is pressed in the animation). Notice how the X-value is
negative when the mouse is on the left of the window.