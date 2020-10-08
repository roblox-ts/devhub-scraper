This property determines whether the `Mouse|Mouse's` icon is visible When _true_ the mouse's icon is visible, when _false_ it is not.

For example, the code snippet below hides the mouse's icon.

```Lua
local userInputService = game:GetService("UserInputService")

userInputService.MouseIconEnabled = false
``` 

As [UserInputService](https://developer.roblox.com/en-us/api-reference/class/UserInputService) is client-side only, this property can only be used in a [LocalScript](https://developer.roblox.com/en-us/api-reference/class/LocalScript).