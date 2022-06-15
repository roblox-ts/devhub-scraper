This function returns an array of [InputObjects](https://developer.roblox.com/en-us/api-reference/class/InputObject) associated with the keys currently being pressed down.

This array can be iterated through to determine which keys are currently being pressed, using the [InputObject.KeyCode](https://developer.roblox.com/en-us/api-reference/property/InputObject/KeyCode) values.

To check if a specific key is being pressed, use [UserInputService:IsKeyDown](https://developer.roblox.com/en-us/api-reference/function/UserInputService/IsKeyDown).

As [UserInputService](https://developer.roblox.com/en-us/api-reference/class/UserInputService) is client-side only, this function can only be used in a [LocalScript](https://developer.roblox.com/en-us/api-reference/class/LocalScript).