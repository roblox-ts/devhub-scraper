This property describes the size of the on-screen keyboard in pixels. The keyboard's size is `DataType/Vector2|Vector2.new(0, 0)` when it is not [visible](https://developer.roblox.com/en-us/api-reference/property/UserInputService/OnScreenKeyboardVisible).

The code snippet below prints the size of the keyboard.

```Lua
local userInputService = game:GetService("UserInputService")
print(userInputService.OnScreenKeyboardSize)
``` 

As [UserInputService](https://developer.roblox.com/en-us/api-reference/class/UserInputService) is client-side only, this property can only be used in a [LocalScript](https://developer.roblox.com/en-us/api-reference/class/LocalScript).

![On screen keyboard](https://images.contentstack.io/v3/assets/bltc2ad39afa86662c8/bltd883fb9830c26628/5bce5c708e52425c44bf870e/Screenshot_(6).png)

See also
--------

*   [UserInputService.OnScreenKeyboardVisible](https://developer.roblox.com/en-us/api-reference/property/UserInputService/OnScreenKeyboardVisible)
*   [UserInputService.OnScreenKeyboardPosition](https://developer.roblox.com/en-us/api-reference/property/UserInputService/OnScreenKeyboardPosition)