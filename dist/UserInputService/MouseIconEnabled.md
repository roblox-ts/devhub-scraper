This property determines whether the [`Mouse`](https://create.roblox.com/docs/reference/engine/classes/Mouse) icon is visible When
`true` the mouse's icon is visible, when `false` it is not.

For example, the code snippet below hides the mouse's icon.
```lua
local userInputService = game:GetService("UserInputService")

userInputService.MouseIconEnabled = false
```

As [`UserInputService`](https://create.roblox.com/docs/reference/engine/classes/UserInputService) is client-side only, this property can only be
used in a [`LocalScript`](https://create.roblox.com/docs/reference/engine/classes/LocalScript).