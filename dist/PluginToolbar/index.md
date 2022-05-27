A PluginToolbar is an object created by using the [Plugin:CreateToolbar](https://create.roblox.com/docs/reference/engine/classes/Plugin#CreateToolbar)
method. It is used to create [PluginToolbarButton](https://create.roblox.com/docs/reference/engine/classes/PluginToolbarButton)s using the
[CreateButton](https://create.roblox.com/docs/reference/engine/classes/PluginToolbar#CreateButton) function. In general, it is good
practice for a plugin to use **one and only one** uniquely named toolbar for
all of its buttons. In Roblox Studio, toolbars are rendered under the Plugins
tab.

![A screenshot of Roblox Studio's Plugins tab, rendering several PluginToolbars][1]

Pictured above are three PluginToolbars in Roblox Studio: Animations, Three
Wise Monkeys and Localization. The center toolbar is a custom toolbar created
by a plugin; the other toolbars are created by built-in Roblox Studio plugins.

## Example

The following code sample creates a basic toolbar with one button. It should
be run as a Roblox Studio plugin, and not run as a [Script](https://create.roblox.com/docs/reference/engine/classes/Script).

```
local toolbar = plugin:CreateToolbar("Three Wise Monkeys")
local button = toolbar:CreateButton("Mizaru", "See No Evil", "rbxassetid://2778270261")
```

[1]: https://prod.docsiteassets.roblox.com/assets/blt8a9224a9e7eef525/PluginToolbar-light.png