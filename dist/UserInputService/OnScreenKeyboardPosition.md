This property describes the position of the on-screen keyboard in pixels.
The keyboard's position is [Vector2.new(0, 0)](https://developer.roblox.com/en-us/api-reference/datatype/Vector2) when it is
not [visible](https://create.roblox.com/docs/reference/engine/classes/UserInputService#OnScreenKeyboardVisible).

The code snippet below prints the position of the keyboard.

```lua
local userInputService = game:GetService("UserInputService")
print(userInputService.OnScreenKeyboardPosition)
```

As `UserInputService` is client-side only, this property can only be used
in a `LocalScript`.

![On screen keyboard][1]

See also:

- `UserInputService/OnScreenKeyboardVisible`
- `UserInputService/OnScreenKeyboardSize`

[1]: https://prod.docsiteassets.roblox.com/assets/bltd883fb9830c26628/ClientKeyboard.png