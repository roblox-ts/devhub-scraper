This function returns 'Enum/UserInputType\` associated with the user's most recent input.

For example, if the user's previous input had been pressing the spacebar, the [UserInputType](https://developer.roblox.com/en-us/api-reference/enum/UserInputType) returned would be _'Keyboard'_.

The [UserInputService.LastInputTypeChanged](https://developer.roblox.com/en-us/api-reference/event/UserInputService/LastInputTypeChanged) event can be used to track when the last [UserInputType](https://developer.roblox.com/en-us/api-reference/enum/UserInputType) used by the user changes.

As [UserInputService](https://developer.roblox.com/en-us/api-reference/class/UserInputService) is client-side only, this function can only be used in a [LocalScript](https://developer.roblox.com/en-us/api-reference/class/LocalScript).