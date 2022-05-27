This property describes the size of the on-screen keyboard in pixels. The
keyboard's size is [Vector2.new(0, 0)](https://developer.roblox.com/en-us/api-reference/datatype/Vector2) when it is not
[visible](https://create.roblox.com/docs/reference/engine/classes/UserInputService#OnScreenKeyboardVisible).

The code snippet below prints the size of the keyboard.

```lua
local userInputService = game:GetService("UserInputService")
print(userInputService.OnScreenKeyboardSize)
```

As `UserInputService` is client-side only, this property can only be used
in a `LocalScript`.

![On screen keyboard][1]

See also:

- `UserInputService/OnScreenKeyboardVisible`
- `UserInputService/OnScreenKeyboardPosition`

[1]: https://prod.docsiteassets.roblox.com/assets/bltd883fb9830c26628/Screenshot_(6).png