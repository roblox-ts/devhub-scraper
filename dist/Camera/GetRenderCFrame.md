This function returns the actual [CFrame](https://developer.roblox.com/en-us/api-reference/datatype/CFrame) of the [Camera](https://developer.roblox.com/en-us/api-reference/class/Camera) as it is rendered. This includes any roll applied using [Camera:SetRoll](https://developer.roblox.com/en-us/api-reference/function/Camera/SetRoll) and the impact of VR.

VR head transformations, along with roll applied using [Camera:SetRoll](https://developer.roblox.com/en-us/api-reference/function/Camera/SetRoll) is not applied to the [Camera.CFrame](https://developer.roblox.com/en-us/api-reference/property/Camera/CFrame) property. For this reason, it is best practice to use [Camera:GetRenderCFrame](https://developer.roblox.com/en-us/api-reference/function/Camera/GetRenderCFrame) to obtain the 'true' [CFrame](https://developer.roblox.com/en-us/api-reference/datatype/CFrame) of the [Camera](https://developer.roblox.com/en-us/api-reference/class/Camera).

For example, when using VR the [Camera](https://developer.roblox.com/en-us/api-reference/class/Camera) is actually rendered at the following [CFrame](https://developer.roblox.com/en-us/api-reference/datatype/CFrame):

```Lua
local UserInputService = game:GetService("UserInputService")

local headCFrame = UserInputService:GetUserCFrame(Enum.UserCFrame.Head)
renderCFrame = workspace.CurrentCamera.CFrame * headCFrame
``` 

The `Camera|Camera's` render [CFrame](https://developer.roblox.com/en-us/api-reference/datatype/CFrame) will only be changed to account for the head when the [Camera.HeadLocked](https://developer.roblox.com/en-us/api-reference/property/Camera/HeadLocked) property is true.