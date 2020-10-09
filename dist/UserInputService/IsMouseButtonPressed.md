This function takes a mouse button [UserInputType](https://developer.roblox.com/en-us/api-reference/enum/UserInputType) and returns a bool that indicates whether it is currently pressed.

The mouse button checked depends on the [UserInputType](https://developer.roblox.com/en-us/api-reference/enum/UserInputType) value passed to the function as an argument. For example:

```lua
local UserInputService = game:GetService("UserInputService")
    
local pressed = UserInputService:IsMouseButtonPressed(Enum.UserInputType.MouseButton1)
``` 

Since [UserInputService](https://developer.roblox.com/en-us/api-reference/class/UserInputService) is client-side only, this function can only be used in a [LocalScript](https://developer.roblox.com/en-us/api-reference/class/LocalScript).