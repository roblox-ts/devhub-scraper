This function pans the [Camera](https://developer.roblox.com/en-us/api-reference/class/Camera) around the [Camera.Focus](https://developer.roblox.com/en-us/api-reference/property/Camera/Focus) in 45 degree increments around the Y axis.

The rotation is applied to the `Camera|Camera's` [Camera.CFrame](https://developer.roblox.com/en-us/api-reference/property/Camera/CFrame) property.

This function pans the [Camera](https://developer.roblox.com/en-us/api-reference/class/Camera) in 45 degree increments, for example:

```lua
workspace.CurrentCamera:PanUnits(1) -- 45 degrees
workspace.CurrentCamera:PanUnits(-2) -- -90 degrees
``` 

PanUnits does not require the [Camera.CameraType](https://developer.roblox.com/en-us/api-reference/property/Camera/CameraType) to be _'Scriptable'_.