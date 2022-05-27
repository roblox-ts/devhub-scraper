This property describes whether the user's device has a keyboard
available. This property is _true_ when the user's device has an available
keyboard, and _false_ when it does not.

It can be used to determine whether the user has an available keyboard -
which can be important if you want to check if you can use
[UserInputService:IsKeyDown](https://create.roblox.com/docs/reference/engine/classes/UserInputService#IsKeyDown) or [UserInputService:GetKeysPressed](https://create.roblox.com/docs/reference/engine/classes/UserInputService#GetKeysPressed) to check
for keyboard input.

As [UserInputService](https://create.roblox.com/docs/reference/engine/classes/UserInputService) is client-side only, this property can only be used
in a [LocalScript](https://create.roblox.com/docs/reference/engine/classes/LocalScript).