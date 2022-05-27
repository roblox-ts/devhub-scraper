This property determines whether the [Mouse's](https://create.roblox.com/docs/reference/engine/classes/Mouse) icon is visible When
_true_ the mouse's icon is visible, when _false_ it is not.

For example, the code snippet below hides the mouse's icon.

```lua
local userInputService = game:GetService("UserInputService")

userInputService.MouseIconEnabled = false
```

As `UserInputService` is client-side only, this property can only be used
in a `LocalScript`.