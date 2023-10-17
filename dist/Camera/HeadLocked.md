Un-linking the camera from a VR user's head motions can cause motion
sickness. This property should only be set to false after extensive
testing.

Toggles whether the [`Camera`](https://create.roblox.com/docs/reference/engine/classes/Camera) will automatically track the head
motion of a player using a VR device.

When HeadLocked is *true*, the engine will combine [`Camera.CFrame`](https://create.roblox.com/docs/reference/engine/classes/Camera#CFrame)
with the `Enum.UserCFrame` of the user's head to render the player's view
with head tracking factored in. The view will be rendered at the following
`Datatype.CFrame`:
```lua
local UserInputService = game:GetService("UserInputService")
local headCFrame = UserInputService:GetUserCFrame(Enum.UserCFrame.Head)
headCFrame = headCFrame.Rotation + headCFrame.Position * workspace.CurrentCamera.HeadScale
-- this will be equivalent to Camera:GetRenderCFrame()
local renderCFrame = workspace.CurrentCamera.CFrame * headCFrame
```
#### Disabling HeadLocked

You are recommended not to disable HeadLocked for the following reasons:

- Players may experience motion sickness if an equivalent head tracking
solution is not added
- The Roblox engine performs latency optimizations when HeadLocked is true

See also:

- [`VRService`](https://create.roblox.com/docs/reference/engine/classes/VRService)'s [`VRService:GetUserCFrame()`](https://create.roblox.com/docs/reference/engine/classes/VRService#GetUserCFrame) function, which
can be used to obtain the `Datatype.CFrame` of the head
- [`VRService`](https://create.roblox.com/docs/reference/engine/classes/VRService)'s [`VRService:RecenterUserHeadCFrame()`](https://create.roblox.com/docs/reference/engine/classes/VRService#RecenterUserHeadCFrame) which is
used to recenter the head to the current position and orientation of the
VR device
- The [`Camera:GetRenderCFrame()`](https://create.roblox.com/docs/reference/engine/classes/Camera#GetRenderCFrame) function which returns the
[`Camera`](https://create.roblox.com/docs/reference/engine/classes/Camera) [`Camera.CFrame`](https://create.roblox.com/docs/reference/engine/classes/Camera#CFrame) combined with the `Datatype.CFrame`
of the user's head