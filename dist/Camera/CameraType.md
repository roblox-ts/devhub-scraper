The default Roblox camera scripts have several built in behaviors. Setting
the CameraType of a player's [`Camera`](https://create.roblox.com/docs/reference/engine/classes/Camera) will toggle between these
behaviors. Note some CameraType's require a valid
[`Camera.CameraSubject`](https://create.roblox.com/docs/reference/engine/classes/Camera#CameraSubject) to work correctly.

- Fixed: [`Camera`](https://create.roblox.com/docs/reference/engine/classes/Camera) is stationary
- Follow: [`Camera`](https://create.roblox.com/docs/reference/engine/classes/Camera) moves with the [`Camera.CameraSubject`](https://create.roblox.com/docs/reference/engine/classes/Camera#CameraSubject) and
rotates to keep the subject in the center of view
- Attach: [`Camera`](https://create.roblox.com/docs/reference/engine/classes/Camera) moves with the [`Camera.CameraSubject`](https://create.roblox.com/docs/reference/engine/classes/Camera#CameraSubject) at a
fixed offset and will rotate as the subject rotates
- Track: [`Camera`](https://create.roblox.com/docs/reference/engine/classes/Camera) moves with the [`Camera.CameraSubject`](https://create.roblox.com/docs/reference/engine/classes/Camera#CameraSubject) but
does not rotate automatically
- Watch: [`Camera`](https://create.roblox.com/docs/reference/engine/classes/Camera) is stationary but will rotate to keep the
[`Camera.CameraSubject`](https://create.roblox.com/docs/reference/engine/classes/Camera#CameraSubject) in the center of view
- Custom: Default
- Scriptable: No default behavior. Used by developers to script custom
behavior

The above only applies when you use the default Roblox [camera
scripts][1]. If you write your own camera scripts, you can choose to
listen to CameraType and implement your own behaviors or ignore the
property entirely.
#### Manually controlling the Camera

In some cases you may wish to manually control the [`Camera`](https://create.roblox.com/docs/reference/engine/classes/Camera) (for
example during a cut-scene). The best way to do this is by setting the
CameraType to *'Scriptable'*. The default camera scripts will not move or
update the [`Camera`](https://create.roblox.com/docs/reference/engine/classes/Camera) on its own if CameraType is set to
*'Scriptable'*. This means you can freely modify the [`Camera`](https://create.roblox.com/docs/reference/engine/classes/Camera) using
its properties and functions. For more information on positioning and
orientating the [`Camera`](https://create.roblox.com/docs/reference/engine/classes/Camera) manually see the [`Camera.CFrame`](https://create.roblox.com/docs/reference/engine/classes/Camera#CFrame)
page.

If you want complete control over the camera at all times, you may replace
the default camera scripts with your own.