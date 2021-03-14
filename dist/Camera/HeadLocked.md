Un-linking the camera from a VR user's head motions can cause motion sickness. This property should only be set to false after extensive testing.

Toggles whether the [Camera](https://developer.roblox.com/en-us/api-reference/class/Camera) will automatically track the head motion of a player using a VR device.

When HeadLocked is _true_, the engine will combine the [Camera](https://developer.roblox.com/en-us/api-reference/class/Camera) [Camera.CFrame](https://developer.roblox.com/en-us/api-reference/property/Camera/CFrame) with the [CFrame](https://developer.roblox.com/en-us/api-reference/datatype/CFrame) of the user's head to render the position and orientation of the [Camera](https://developer.roblox.com/en-us/api-reference/class/Camera) correctly. The camera will be rendered at the following [CFrame](https://developer.roblox.com/en-us/api-reference/datatype/CFrame):

local UserInputService = game:GetService("UserInputService")
local headCFrame = UserInputService:GetUserCFrame(Enum.UserCFrame.Head)
renderCFrame = workspace.CurrentCamera.CFrame \* headCFrame

Disabling HeadLocked
--------------------

You are recommended not to disable HeadLocked for the following reasons:

*   Players may experience motion sickness if an equivalent head tracking solution is not added
*   The Roblox engine performs latency optimizations when HeadLocked is true

However in some circumstances you may wish to develop your own head tracking systems. For example, you may want custom camera transformations that restrict or augment the [CFrame](https://developer.roblox.com/en-us/api-reference/datatype/CFrame) of the head.

See also
--------

*   `UserInputService|UserInputService's` [UserInputService:GetUserCFrame](https://developer.roblox.com/en-us/api-reference/function/UserInputService/GetUserCFrame) function, which can be used to obtain the [CFrame](https://developer.roblox.com/en-us/api-reference/datatype/CFrame) of the head
*   `UserInputService|UserInputService's` [UserInputService:RecenterUserHeadCFrame](https://developer.roblox.com/en-us/api-reference/function/UserInputService/RecenterUserHeadCFrame) which is used to recenter the head to the current position and orientation of the VR device
*   The [Camera:GetRenderCFrame](https://developer.roblox.com/en-us/api-reference/function/Camera/GetRenderCFrame) function which returns the [Camera](https://developer.roblox.com/en-us/api-reference/class/Camera) [Camera.CFrame](https://developer.roblox.com/en-us/api-reference/property/Camera/CFrame) combined with the [CFrame](https://developer.roblox.com/en-us/api-reference/datatype/CFrame) of the user's head