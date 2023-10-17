This property describes whether the user's current device has a touch
screen available.

The property is used to determine if the user's device has a touch screen,
and therefore if touch events will fire. If TouchEnabled is true, you can
use UserInputService events such as [`UserInputService.TouchStarted`](https://create.roblox.com/docs/reference/engine/classes/UserInputService#TouchStarted)
and [`UserInputService.TouchEnded`](https://create.roblox.com/docs/reference/engine/classes/UserInputService#TouchEnded) to track when a user starts and
stops touching the screen of their device.

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

See also:

- [`UserInputService.TouchTap`](https://create.roblox.com/docs/reference/engine/classes/UserInputService#TouchTap)
- [`UserInputService.TouchLongPress`](https://create.roblox.com/docs/reference/engine/classes/UserInputService#TouchLongPress)
- [`UserInputService.TouchMoved`](https://create.roblox.com/docs/reference/engine/classes/UserInputService#TouchMoved)
- [`UserInputService.TouchPan`](https://create.roblox.com/docs/reference/engine/classes/UserInputService#TouchPan)
- [`UserInputService.TouchPinch`](https://create.roblox.com/docs/reference/engine/classes/UserInputService#TouchPinch)
- [`UserInputService.TouchRotate`](https://create.roblox.com/docs/reference/engine/classes/UserInputService#TouchRotate)
- [`UserInputService.TouchSwipe`](https://create.roblox.com/docs/reference/engine/classes/UserInputService#TouchSwipe)
- [`UserInputService.TouchStarted`](https://create.roblox.com/docs/reference/engine/classes/UserInputService#TouchStarted)
- [`UserInputService.TouchEnded`](https://create.roblox.com/docs/reference/engine/classes/UserInputService#TouchEnded)