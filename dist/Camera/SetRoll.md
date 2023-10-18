This function is outdated and no longer considered best practice.

This function sets the current roll, in radians, of the [`Camera`](https://create.roblox.com/docs/reference/engine/classes/Camera).
The roll is applied after the [`Camera.CFrame`](https://create.roblox.com/docs/reference/engine/classes/Camera#CFrame) and represents the
rotation around the [`Camera`](https://create.roblox.com/docs/reference/engine/classes/Camera)'s Z-axis.

For example, the following would invert the [`Camera`](https://create.roblox.com/docs/reference/engine/classes/Camera):
```lua
workspace.CurrentCamera:SetRoll(math.pi) -- math.pi radians = 180 degrees
```

SetRoll has no effect on any roll applied using the [`Camera.CFrame`](https://create.roblox.com/docs/reference/engine/classes/Camera#CFrame)
property. Roll applied using SetRoll is not reflected in the
[`Camera.CFrame`](https://create.roblox.com/docs/reference/engine/classes/Camera#CFrame) property but is reflected in in the
[`CFrame`](https://create.roblox.com/docs/reference/engine/datatypes/CFrame) returned by[`Camera:GetRenderCFrame()`](https://create.roblox.com/docs/reference/engine/classes/Camera#GetRenderCFrame).

This function can only be used when the [`Camera.CameraType`](https://create.roblox.com/docs/reference/engine/classes/Camera#CameraType) is set
to *'Scriptable'*, regardless of whether the default camera scripts are
being used. If it is used with any other [`Camera.CameraType`](https://create.roblox.com/docs/reference/engine/classes/Camera#CameraType) a
warning is given in the output.

Any roll applied using this function will be lost when the
[`Camera.CameraType`](https://create.roblox.com/docs/reference/engine/classes/Camera#CameraType) is changed from *'Scriptable'*.

To obtain the roll set using this function use [`Camera:GetRoll()`](https://create.roblox.com/docs/reference/engine/classes/Camera#GetRoll).

As this function is outdated, you are advised to instead apply roll to the
[`Camera`](https://create.roblox.com/docs/reference/engine/classes/Camera) using the [`Camera.CFrame`](https://create.roblox.com/docs/reference/engine/classes/Camera#CFrame) property. For example:
```lua
local currentCFrame = workspace.CurrentCamera.CFrame
local rollCFrame = CFrame.Angles(0, 0, roll)
workspace.CurrentCamera.CFrame = currentCFrame * rollCFrame
```