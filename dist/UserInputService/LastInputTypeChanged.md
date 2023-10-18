The [`UserInputService.LastInputTypeChanged`](https://create.roblox.com/docs/reference/engine/classes/UserInputService#LastInputTypeChanged) event fires whenever the
client changes how they are interacting via a Human-Computer Interface
device. (i.e. from MouseMovement to MouseWheel or from Thumbstick1 to
Thumbstick2).

To get the value of the last input type, regardless of whether it has
changed, you can use the [`UserInputService:GetLastInputType()`](https://create.roblox.com/docs/reference/engine/classes/UserInputService#GetLastInputType)
function.

As this event only fires locally, it can only be used in a
[`LocalScript`](https://create.roblox.com/docs/reference/engine/classes/LocalScript).