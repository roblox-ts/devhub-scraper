This function tweens the [`Camera`](https://create.roblox.com/docs/reference/engine/classes/Camera) in a linear fashion towards a new
[`Camera.CFrame`](https://create.roblox.com/docs/reference/engine/classes/Camera#CFrame) and [`Camera.Focus`](https://create.roblox.com/docs/reference/engine/classes/Camera#Focus) over a given duration, for
example:
```lua
local camera = workspace.CurrentCamera
camera.CameraType = Enum.CameraType.Scriptable

camera:Interpolate(
	CFrame.new(0, 10, 100),
	CFrame.new(0, 0, 100),
	5
)
```

Throughout the tween, the [`Camera`](https://create.roblox.com/docs/reference/engine/classes/Camera)'s [`Camera.CFrame`](https://create.roblox.com/docs/reference/engine/classes/Camera#CFrame) will be
orientated towards the [`Camera`](https://create.roblox.com/docs/reference/engine/classes/Camera)'s [`Camera.Focus`](https://create.roblox.com/docs/reference/engine/classes/Camera#Focus).

When the tween has completed, the [`Camera`](https://create.roblox.com/docs/reference/engine/classes/Camera)'s
[`Camera.InterpolationFinished`](https://create.roblox.com/docs/reference/engine/classes/Camera#InterpolationFinished) event will fire.

If this function is called while the [`Camera`](https://create.roblox.com/docs/reference/engine/classes/Camera) is already tweening
the older tween will be stopped (without firing
[`Camera.InterpolationFinished`](https://create.roblox.com/docs/reference/engine/classes/Camera#InterpolationFinished)) and overridden by the new tween.

Interpolate can only be used if the current [`Camera.CameraType`](https://create.roblox.com/docs/reference/engine/classes/Camera#CameraType) is
*'Scriptable'*, regardless of whether the default camera scripts are being
used. If it is used with any other [`Camera.CameraType`](https://create.roblox.com/docs/reference/engine/classes/Camera#CameraType) an error will
be thrown.

You are advised to use [`TweenService`](https://create.roblox.com/docs/reference/engine/classes/TweenService) to tween the [`Camera`](https://create.roblox.com/docs/reference/engine/classes/Camera)
instead as it is more reliable and offers a variety of easing styles. See
below for an example:
```lua
local TweenService = game:GetService("TweenService")

local camera = workspace.CurrentCamera
camera.CameraType = Enum.CameraType.Scriptable

local tween = TweenService:Create(
	camera,
	TweenInfo.new(5, Enum.EasingStyle.Quad, Enum.EasingDirection.Out),
	{
		CFrame = CFrame.new(0, 10, 100),
		Focus = CFrame.new(0, 0, 100)
	}
)

tween:Play()
```