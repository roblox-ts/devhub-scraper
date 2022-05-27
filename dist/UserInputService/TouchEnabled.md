This property describes whether the user's current device has a touch
screen available.

The property is used to determine if the user's device has a touch screen,
and therefore if touch events will fire. If TouchEnabled is true, you can
use UserInputService events such as [UserInputService.TouchStarted](https://create.roblox.com/docs/reference/engine/classes/UserInputService#TouchStarted) and
[UserInputService.TouchEnded](https://create.roblox.com/docs/reference/engine/classes/UserInputService#TouchEnded) to track when a user starts and stops
touching the screen of their device.

The code snippet below prints whether the user's device has a touch
screen.

```lua
local userInputService = game:GetService("UserInputService")

if userInputService.TouchEnabled then
	print("The user's device has a touchscreen!")
else
	print("The user's device does not have a touchscreen!")
end
```

See [this][1] page for articles on cross-platform development.

[1]: /learn-roblox/cross-platform

See also:

- `UserInputService/TouchTap`
- `UserInputService/TouchLongPress`
- `UserInputService/TouchMoved`
- `UserInputService/TouchPan`
- `UserInputService/TouchPinch`
- `UserInputService/TouchRotate`
- `UserInputService/TouchSwipe`
- `UserInputService/TouchStarted`
- `UserInputService/TouchEnded`