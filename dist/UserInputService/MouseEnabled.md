This property describes whether the user's device has a mouse available. This property is _true_ when the user's device has an available mouse, and _false_ when it does not.

```Lua
local UserInputService = game:GetService("UserInputService")

if (UserInputService.MouseEnabled) then
    print("The user's device has an available mouse!")
else
    print("The user's device does not have an available mouse!")
end
``` 

It is important to check this before using [UserInputService](https://developer.roblox.com/en-us/api-reference/class/UserInputService) mouse functions such as [UserInputService:GetMouseLocation](https://developer.roblox.com/en-us/api-reference/function/UserInputService/GetMouseLocation).

As [UserInputService](https://developer.roblox.com/en-us/api-reference/class/UserInputService) is client-side only, this property can only be used in a [LocalScript](https://developer.roblox.com/en-us/api-reference/class/LocalScript).

See also
--------

*   [UserInputService.MouseBehavior](https://developer.roblox.com/en-us/api-reference/property/UserInputService/MouseBehavior)
*   [UserInputService.MouseDeltaSensitivity](https://developer.roblox.com/en-us/api-reference/property/UserInputService/MouseDeltaSensitivity)
*   [UserInputService.MouseIconEnabled](https://developer.roblox.com/en-us/api-reference/property/UserInputService/MouseIconEnabled)
*   [UserInputService:GetMouseLocation](https://developer.roblox.com/en-us/api-reference/function/UserInputService/GetMouseLocation)
*   [UserInputService:GetMouseDelta](https://developer.roblox.com/en-us/api-reference/function/UserInputService/GetMouseDelta)
*   [UserInputService:GetMouseButtonsPressed](https://developer.roblox.com/en-us/api-reference/function/UserInputService/GetMouseButtonsPressed)