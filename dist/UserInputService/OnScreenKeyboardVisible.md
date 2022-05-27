This property describes whether an on-screen keyboard is currently visible
on the user's screen.

The code snippet below prints whether the keyboard is visible.

```lua
local userInputService = game:GetService("UserInputService")

local keyboardIsVisible = userInputService.OnScreenKeyboardIsVisible
if (keyboardIsVisible) then
	print("On-screen keyboard is visible!")
else
	print("On-screen keyboard is not visible!")
end
```

As `UserInputService` is client-side only, this property can only be used
in a `LocalScript`.

![On screen keyboard][1]

See also:

- `UserInputService/OnScreenKeyboardSize`
- `UserInputService/OnScreenKeyboardPosition`

[1]: https://prod.docsiteassets.roblox.com/assets/bltd883fb9830c26628/ClientKeyboard.png