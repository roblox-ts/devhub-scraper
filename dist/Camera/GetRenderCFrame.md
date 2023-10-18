This function returns the actual [`CFrame`](https://create.roblox.com/docs/reference/engine/datatypes/CFrame) of the [`Camera`](https://create.roblox.com/docs/reference/engine/classes/Camera)
as it is rendered, including the impact of VR.

VR head transformations are not applied to the [`Camera.CFrame`](https://create.roblox.com/docs/reference/engine/classes/Camera#CFrame)
property. For this reason, it is best practice to use
[`Camera:GetRenderCFrame()`](https://create.roblox.com/docs/reference/engine/classes/Camera#GetRenderCFrame) to obtain the 'true' [`CFrame`](https://create.roblox.com/docs/reference/engine/datatypes/CFrame) of
a player's view.

For example, when using VR the [`Camera`](https://create.roblox.com/docs/reference/engine/classes/Camera) is actually rendered at the
following [`CFrame`](https://create.roblox.com/docs/reference/engine/datatypes/CFrame):
```lua
local UserInputService = game:GetService("UserInputService")

local headCFrame = UserInputService:GetUserCFrame(Enum.UserCFrame.Head)
headCFrame = headCFrame.Rotation + headCFrame.Position * workspace.CurrentCamera.HeadScale
renderCFrame = workspace.CurrentCamera.CFrame * headCFrame
```

The [`Camera`](https://create.roblox.com/docs/reference/engine/classes/Camera)'s render [`CFrame`](https://create.roblox.com/docs/reference/engine/datatypes/CFrame) will only be changed to
account for the head when the [`Camera.HeadLocked`](https://create.roblox.com/docs/reference/engine/classes/Camera#HeadLocked) property is true.