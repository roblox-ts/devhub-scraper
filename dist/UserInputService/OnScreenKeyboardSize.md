This property describes the size of the on-screen keyboard in pixels. The
keyboard's size is `Datatype.Vector2|Vector2.new(0, 0)` when it is not
[`visible`](https://create.roblox.com/docs/reference/engine/classes/UserInputService#OnScreenKeyboardVisible).

The code snippet below prints the size of the keyboard.
```lua
local userInputService = game:GetService("UserInputService")
print(userInputService.OnScreenKeyboardSize)
```

As [`UserInputService`](https://create.roblox.com/docs/reference/engine/classes/UserInputService) is client-side only, this property can only be
used in a [`LocalScript`](https://create.roblox.com/docs/reference/engine/classes/LocalScript).

![On screen keyboard](https://prod.docsiteassets.roblox.com/assets/legacy/On-Screen-Keyboard.png)

See also:

- [`UserInputService.OnScreenKeyboardVisible`](https://create.roblox.com/docs/reference/engine/classes/UserInputService#OnScreenKeyboardVisible)
- [`UserInputService.OnScreenKeyboardPosition`](https://create.roblox.com/docs/reference/engine/classes/UserInputService#OnScreenKeyboardPosition)