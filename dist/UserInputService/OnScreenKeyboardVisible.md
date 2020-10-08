This property describes whether an on-screen keyboard is currently visible on the user's screen.

The code snippet below prints whether the keyboard is visible.

```Lua
local userInputService = game:GetService("UserInputService")

local keyboardIsVisible = userInputService.OnScreenKeyboardIsVisible
if (keyboardIsVisible) then
	print("On-screen keyboard is visible!")
else
	print("On-screen keyboard is not visible!")
end
``` 

As [UserInputService](https://developer.roblox.com/en-us/api-reference/class/UserInputService) is client-side only, this property can only be used in a [LocalScript](https://developer.roblox.com/en-us/api-reference/class/LocalScript).

![On screen keyboard](https://developer.roblox.com/assets/5bce5dd5edb71a1476d19609/ClientKeyboard.png)

See also
--------

*   [UserInputService.OnScreenKeyboardSize](https://developer.roblox.com/en-us/api-reference/property/UserInputService/OnScreenKeyboardSize)
*   [UserInputService.OnScreenKeyboardPosition](https://developer.roblox.com/en-us/api-reference/property/UserInputService/OnScreenKeyboardPosition)