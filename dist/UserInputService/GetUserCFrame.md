The [`UserInputService:GetUserCFrame()`](https://create.roblox.com/docs/reference/engine/classes/UserInputService#GetUserCFrame) function returns a
[`CFrame`](https://create.roblox.com/docs/reference/engine/datatypes/CFrame) describing the position and orientation of a specified
[`Enum.UserCFrame`](https://create.roblox.com/docs/reference/engine/enums/UserCFrame) virtual reality (VR) device. If the specified device is
not connected, the function returns [`CFrame.new()`](https://create.roblox.com/docs/reference/engine/datatypes/CFrame).

For example, the code snippet below prints the CFrame of the user's VR
headset.
```lua
local userInputService = game:GetService("UserInputService")
local cframe = userInputService:GetUserCFrame(Enum.UserCFrame.Head)

print(cframe)
```

By using the function, players can implement features such as
re-positioning the user's in-game character corresponding to the location
of a connected VR device. This can be done by changing the *CFrame* of the
user's in-game body parts to match the *CFrame* of the specified VR device
using [`Enum.UserCFrame`](https://create.roblox.com/docs/reference/engine/enums/UserCFrame) and [`CFrame`](https://create.roblox.com/docs/reference/engine/datatypes/CFrame) value arguments passed by
the event.

See also:

- [`UserInputService.UserCFrameChanged`](https://create.roblox.com/docs/reference/engine/classes/UserInputService#UserCFrameChanged), an event which fires when
the [`CFrame`](https://create.roblox.com/docs/reference/engine/datatypes/CFrame) of a VR device changes
- [`VRService`](https://create.roblox.com/docs/reference/engine/classes/VRService), a service used to implement VR support

As this event only fires locally, it can only be used in a
[`LocalScript`](https://create.roblox.com/docs/reference/engine/classes/LocalScript).