The [`UserInputService`](https://create.roblox.com/docs/reference/engine/classes/UserInputService) JumpRequest event fires when there is a jump
request from the client, for example when the client presses the spacebar
or jump button on mobile.

This event fires whenever the user tries to make their
[`Player.Character`](https://create.roblox.com/docs/reference/engine/classes/Player#Character) jump. Default behavior responds to a jump request
by setting the player's [`Humanoid.Jump`](https://create.roblox.com/docs/reference/engine/classes/Humanoid#Jump) property to true, which
makes the player's character jump.

The event can be used to track every time a player wants to jump. Instead
of using it to make a player jump, this should be used to change default
jump behavior - such as disabling jumping.

For example, the code below prints "Jump" every time the player sends a
jump request.
```lua
local UserInputService = game:GetService("UserInputService")

function onJumpRequest()
    print("Jump!")
end

UserInputService.JumpRequest:Connect(onJumpRequest)
```

Since this event fires multiple times for a single jump request, using a
[debounce](https://create.roblox.com/docs/scripting/debounce) is suggested.

If you would like to connect keys or buttons to other actions, consider
using events such as [`UserInputService:GetKeysPressed()`](https://create.roblox.com/docs/reference/engine/classes/UserInputService#GetKeysPressed) and
[`UserInputService.InputBegan`](https://create.roblox.com/docs/reference/engine/classes/UserInputService#InputBegan) or the [`ContextActionService`](https://create.roblox.com/docs/reference/engine/classes/ContextActionService).

As this event only fires locally, it can only be used in a
[`LocalScript`](https://create.roblox.com/docs/reference/engine/classes/LocalScript).