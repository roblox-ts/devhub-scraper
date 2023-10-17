PluginAction is an object that represents a generic performable action in
Roblox Studio, with no directly associated `Toolbar` or [`Enum.Button`](https://create.roblox.com/docs/reference/engine/enums/Button). In
Roblox Studio, they can be assigned a keyboard shortcut under
`File → Advanced → Customize Shortcuts...`, and they can also be added to the
Quick Access Toolbar.

PluginActions must be created using the [`Plugin:CreatePluginAction()`](https://create.roblox.com/docs/reference/engine/classes/Plugin#CreatePluginAction)
function in order to work as expected.