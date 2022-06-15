The UserCFrameChanged event fires when the [CFrame](https://developer.roblox.com/en-us/api-reference/datatype/CFrame) of a VR device changes.

This event can be used to track the movement of a connected VR device.

Using the event, you can implement features such as moving the user's in-game character limbs as the user moves their VR device. This can be done by changing the CFrame of the user's in-game limbs to match the CFrame changes of the VR device using the [UserCFrame](https://developer.roblox.com/en-us/api-reference/enum/UserCFrame) enum and _CFrame_ value arguments passed by the event.

To retrieve the [CFrame](https://developer.roblox.com/en-us/api-reference/datatype/CFrame) of a connected VR device, use [UserInputService:GetUserCFrame](https://developer.roblox.com/en-us/api-reference/function/UserInputService/GetUserCFrame).

As the event fires locally, it can only be used in a [LocalScript](https://developer.roblox.com/en-us/api-reference/class/LocalScript).

See also
--------

*   [VRService](https://developer.roblox.com/en-us/api-reference/class/VRService), used to implement support, including an identical event `VRService/UserHeadCFrameChanged`
*   [Camera.HeadLocked](https://developer.roblox.com/en-us/api-reference/property/Camera/HeadLocked), when this property is _true_ the [Camera](https://developer.roblox.com/en-us/api-reference/class/Camera) will automatically track the head motion of a player using a VR device
*   [Camera:GetRenderCFrame](https://developer.roblox.com/en-us/api-reference/function/Camera/GetRenderCFrame), a function which retrieves the [CFrame](https://developer.roblox.com/en-us/api-reference/datatype/CFrame) the [Camera](https://developer.roblox.com/en-us/api-reference/class/Camera) is being orientated at, including the impact of VR devices