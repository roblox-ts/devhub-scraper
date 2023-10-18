The Configuration object is a container object that is designed to hold value
objects to make values used in [`Tool`](https://create.roblox.com/docs/reference/engine/classes/Tool)s or any model using
[`Script`](https://create.roblox.com/docs/reference/engine/classes/Script)s more accessible.
## How does the Configuration object work?

The Configuration object is just a container, and does not automatically offer
any additional functionality to a [`Folder`](https://create.roblox.com/docs/reference/engine/classes/Folder).

Configurations should hold value objects ([`BrickColorValue`](https://create.roblox.com/docs/reference/engine/classes/BrickColorValue),
[`NumberValue`](https://create.roblox.com/docs/reference/engine/classes/NumberValue), [`IntValue`](https://create.roblox.com/docs/reference/engine/classes/IntValue), [`ObjectValue`](https://create.roblox.com/docs/reference/engine/classes/ObjectValue) etc). These value
objects should be read by the [`Script`](https://create.roblox.com/docs/reference/engine/classes/Script) or [`LocalScript`](https://create.roblox.com/docs/reference/engine/classes/LocalScript) associated
with the configuration to determine constants such as damage, speed or color.

For example,
```lua
local damage = 10
```

Becomes:
```lua
local configuration = tool:FindFirstChildWhichIsA("Configuration", true)
damage = configuration:FindFirstChild("Damage").Value -- A NumberValue
```

The Configuration object is intended to be placed inside a [`BasePart`](https://create.roblox.com/docs/reference/engine/classes/BasePart) in
a [`Model`](https://create.roblox.com/docs/reference/engine/classes/Model) or [`Tool`](https://create.roblox.com/docs/reference/engine/classes/Tool). It was originally intended to be used with a
tool that provided a GUI interface to edit these properties. However it is
more common now for developers to edit these values directly in the Roblox
Studio properties window.
## Why should I use the Configuration object?

Use of Configurations is optional, but a number of developers chose to use
them for the following reasons.

- Variables held in a Configuration can be found quickly and are in a single
place
- When sharing your work, others can make changes without needing to modify
your code
- Provides a single location for variables read by multiple scripts in more
complex games