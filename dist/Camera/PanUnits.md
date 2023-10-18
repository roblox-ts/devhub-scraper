This function pans the [`Camera`](https://create.roblox.com/docs/reference/engine/classes/Camera) around the [`Camera.Focus`](https://create.roblox.com/docs/reference/engine/classes/Camera#Focus) in
45 degree increments around the Y axis.

The rotation is applied to the [`Camera`](https://create.roblox.com/docs/reference/engine/classes/Camera)'s [`Camera.CFrame`](https://create.roblox.com/docs/reference/engine/classes/Camera#CFrame)
property.

This function pans the [`Camera`](https://create.roblox.com/docs/reference/engine/classes/Camera) in 45 degree increments, for
example:
```lua
workspace.CurrentCamera:PanUnits(1) -- 45 degrees
workspace.CurrentCamera:PanUnits(-2) -- -90 degrees
```

PanUnits does not require the [`Camera.CameraType`](https://create.roblox.com/docs/reference/engine/classes/Camera#CameraType) to be
*'Scriptable'*.