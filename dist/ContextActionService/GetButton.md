GetButton returns the [ImageButton](https://developer.roblox.com/en-us/api-reference/class/ImageButton) created by [BindAction](https://developer.roblox.com/en-us/api-reference/function/ContextActionService/BindAction) if its third parameter was true and the device is [TouchEnabled](https://developer.roblox.com/en-us/api-reference/property/UserInputService/TouchEnabled). The only parameter to this function must match exactly the name of the action originally sent to BindAction.

If no such action was bound or if a button was not created, this function returns `nil`.