This function 'tilts' the [`Camera`](https://create.roblox.com/docs/reference/engine/classes/Camera) by rotating it around the
[`Camera.Focus`](https://create.roblox.com/docs/reference/engine/classes/Camera#Focus) around the [`Camera`](https://create.roblox.com/docs/reference/engine/classes/Camera)'s X axis by a given
multiple of 10 degrees.

The rotation is applied to the [`Camera`](https://create.roblox.com/docs/reference/engine/classes/Camera)'s [`Camera.CFrame`](https://create.roblox.com/docs/reference/engine/classes/Camera#CFrame)
property and is constrained between *-81.05* and *81.05* degrees.

This function tilts the [`Camera`](https://create.roblox.com/docs/reference/engine/classes/Camera) in 10 degree increments, for
example:
```lua
workspace.CurrentCamera:TiltUnits(2) -- 20 degrees
workspace.CurrentCamera:TiltUnits(-5) -- -50 degrees
```

TiltUnits does not require the [`Camera.CameraType`](https://create.roblox.com/docs/reference/engine/classes/Camera#CameraType) to be
*'Scriptable'*.

See also:

- [`Camera:PanUnits()`](https://create.roblox.com/docs/reference/engine/classes/Camera#PanUnits)