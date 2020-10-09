The [UserInputService](https://developer.roblox.com/en-us/api-reference/class/UserInputService) JumpRequest event fires when there is a jump request from the client (i.e. when the client pressed the spacebar or [jump GUI button](https://developer.roblox.com/articles/Mobile-Controls) on mobile).

This event fires whenever the user tries to make their [Player.Character](https://developer.roblox.com/en-us/api-reference/property/Player/Character) jump. Default behavior responds to a jump request by setting the player's [Humanoid.Jump](https://developer.roblox.com/en-us/api-reference/property/Humanoid/Jump) property to true, which makes the player's character jump.

The event can be used to track every time a player wants to jump. Instead of using it to make a player jump, this should be used to change default jump behavior - such as disabling jumping.

For example, the code below prints “Jump” every time the player sends a jump request.

```lua
local userInputService = game:GetService("UserInputService")

function jumpRequest()
    print("Jump!")
end

userInputService.JumpRequest:Connect(JumpRequest)
``` 

Since this event fires multiple times for a single jump request, using a [debounce](https://developer.roblox.com/articles/Debounce) is suggested.

If you would like to connect keys or buttons to other actions, consider using events such as [UserInputService:GetKeysPressed](https://developer.roblox.com/en-us/api-reference/function/UserInputService/GetKeysPressed) and [UserInputService.InputBegan](https://developer.roblox.com/en-us/api-reference/event/UserInputService/InputBegan) or the [ContextActionService](https://developer.roblox.com/en-us/api-reference/class/ContextActionService).

As this event only fires locally, it can only be used in a [LocalScript](https://developer.roblox.com/en-us/api-reference/class/LocalScript).