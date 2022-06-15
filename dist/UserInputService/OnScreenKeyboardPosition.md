This property describes the position of the on-screen keyboard in pixels. The keyboard's position is [Vector2.new(0, 0)](https://developer.roblox.com/en-us/api-reference/datatype/Vector2) when it is not [visible](https://developer.roblox.com/en-us/api-reference/property/UserInputService/OnScreenKeyboardVisible).

The code snippet below prints the position of the keyboard.

local userInputService = game:GetService("UserInputService")
print(userInputService.OnScreenKeyboardPosition)

As [UserInputService](https://developer.roblox.com/en-us/api-reference/class/UserInputService) is client-side only, this property can only be used in a [LocalScript](https://developer.roblox.com/en-us/api-reference/class/LocalScript).

![On screen keyboard](https://developer.roblox.com/assets/bltd883fb9830c26628/ClientKeyboard.png)

See also
--------

*   [UserInputService.OnScreenKeyboardVisible](https://developer.roblox.com/en-us/api-reference/property/UserInputService/OnScreenKeyboardVisible)
*   [UserInputService.OnScreenKeyboardSize](https://developer.roblox.com/en-us/api-reference/property/UserInputService/OnScreenKeyboardSize)