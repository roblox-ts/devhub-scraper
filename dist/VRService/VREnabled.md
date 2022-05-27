This property describes whether the user is using a virtual reality (VR)
device.

If a VR device is enabled, you can interact with its location and movement
through functions such as
[ UserInputService.GetUserCFrame](https://create.roblox.com/docs/reference/engine/classes/ UserInputService#GetUserCFrame)`. You can also react to VR device movement using the  `UserInputService/UserCFrameChanged`
event.

```lua
local userInputService = game:GetService("UserInputService")

local isUsingVR = userInputService.VREnabled
if (isUsingVR) then
    print("User is using a VR headset!")
else
    print("User is not using a VR headset!")
end
```

As `UserInputService` isclient-side only, this property can only be used
in a `LocalScript`.

See [this][1] article for VR best practices.

See also:

- `VRService`
- `Camera/HeadLocked`
- `UserInputService/GetUserCFrame`
- `UserInputService/UserCFrameChanged`

[1]: https://developer.roblox.com/articles/Virtual-Reality-Best-Practices