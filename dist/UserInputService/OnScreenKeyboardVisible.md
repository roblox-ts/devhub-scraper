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

As [`UserInputService`](https://create.roblox.com/docs/reference/engine/classes/UserInputService) is client-side only, this property can only be
used in a [`LocalScript`](https://create.roblox.com/docs/reference/engine/classes/LocalScript).

![On screen keyboard](https://prod.docsiteassets.roblox.com/assets/legacy/ClientKeyboard.png)

See also:

- [`UserInputService.OnScreenKeyboardSize`](https://create.roblox.com/docs/reference/engine/classes/UserInputService#OnScreenKeyboardSize)
- [`UserInputService.OnScreenKeyboardPosition`](https://create.roblox.com/docs/reference/engine/classes/UserInputService#OnScreenKeyboardPosition)