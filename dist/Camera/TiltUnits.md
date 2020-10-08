This function 'tilts' the [Camera](https://developer.roblox.com/en-us/api-reference/class/Camera) by rotating it around the [Camera.Focus](https://developer.roblox.com/en-us/api-reference/property/Camera/Focus) around the `Camera|Camera's` X axis by a given multiple of 10 degrees.

The rotation is applied to the `Camera|Camera's` [Camera.CFrame](https://developer.roblox.com/en-us/api-reference/property/Camera/CFrame) property and is constrained between _\-81.05_ and _81.05_ degrees.

This function tilts the [Camera](https://developer.roblox.com/en-us/api-reference/class/Camera) in 10 degree increments, for example:

```Lua
workspace.CurrentCamera:TiltUnits(2) -- 20 degrees
workspace.CurrentCamera:TiltUnits(-5) -- -50 degrees
``` 

TiltUnits does not require the [Camera.CameraType](https://developer.roblox.com/en-us/api-reference/property/Camera/CameraType) to be _'Scriptable'_.

See also
--------

*   [Camera:PanUnits](https://developer.roblox.com/en-us/api-reference/function/Camera/PanUnits)