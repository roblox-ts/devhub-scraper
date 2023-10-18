The UserCFrameChanged event fires when the [`CFrame`](https://create.roblox.com/docs/reference/engine/datatypes/CFrame) of a VR
device changes.

This event can be used to track the movement of a connected VR device.

Using the event, you can implement features such as moving the user's
in-game character limbs as the user moves their VR device. This can be
done by changing the CFrame of the user's in-game limbs to match the
CFrame changes of the VR device using the [`Enum.UserCFrame`](https://create.roblox.com/docs/reference/engine/enums/UserCFrame) enum and
*CFrame* value arguments passed by the event.

To retrieve the [`CFrame`](https://create.roblox.com/docs/reference/engine/datatypes/CFrame) of a connected VR device, use
[`UserInputService:GetUserCFrame()`](https://create.roblox.com/docs/reference/engine/classes/UserInputService#GetUserCFrame).

As the event fires locally, it can only be used in a [`LocalScript`](https://create.roblox.com/docs/reference/engine/classes/LocalScript).

See also:

- [`VRService`](https://create.roblox.com/docs/reference/engine/classes/VRService), used to implement support, including an identical
event [`VRService.UserHeadCFrameChanged`](https://create.roblox.com/docs/reference/engine/classes/VRService#UserHeadCFrameChanged)
- [`Camera.HeadLocked`](https://create.roblox.com/docs/reference/engine/classes/Camera#HeadLocked), when this property is `true` the
[`Camera`](https://create.roblox.com/docs/reference/engine/classes/Camera) will automatically track the head motion of a player
using a VR device
- [`Camera:GetRenderCFrame()`](https://create.roblox.com/docs/reference/engine/classes/Camera#GetRenderCFrame), a function which retrieves the
[`CFrame`](https://create.roblox.com/docs/reference/engine/datatypes/CFrame) the [`Camera`](https://create.roblox.com/docs/reference/engine/classes/Camera) is being orientated at, including
the impact of VR devices