This property describes the position of the on-screen keyboard in pixels.
The keyboard's position is `Datatype.Vector2|Vector2.new(0, 0)` when it is
not [`visible`](https://create.roblox.com/docs/reference/engine/classes/UserInputService#OnScreenKeyboardVisible).

The code snippet below prints the position of the keyboard.
```lua
local userInputService = game:GetService("UserInputService")
print(userInputService.OnScreenKeyboardPosition)
```

As [`UserInputService`](https://create.roblox.com/docs/reference/engine/classes/UserInputService) is client-side only, this property can only be
used in a [`LocalScript`](https://create.roblox.com/docs/reference/engine/classes/LocalScript).

![On screen keyboard](https://prod.docsiteassets.roblox.com/assets/legacy/ClientKeyboard.png)

See also:

- [`UserInputService.OnScreenKeyboardVisible`](https://create.roblox.com/docs/reference/engine/classes/UserInputService#OnScreenKeyboardVisible)
- [`UserInputService.OnScreenKeyboardSize`](https://create.roblox.com/docs/reference/engine/classes/UserInputService#OnScreenKeyboardSize)