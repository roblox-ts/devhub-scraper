This property is the `Datatype.CFrame` of the [`Camera`](https://create.roblox.com/docs/reference/engine/classes/Camera) and definies
its position and orientation in the 3D world.

Some transformations, such as the rotation of the head when using VR
devices are not reflected in this property. For this reason, developers
should use [`Camera:GetRenderCFrame()`](https://create.roblox.com/docs/reference/engine/classes/Camera#GetRenderCFrame) to obtain the 'true'
`Datatype.CFrame` of the camera.
#### How to set the camera's CFrame

You can move the camera by setting the CFrame property. However, the
default camera scripts also set the CFrame property. When manually setting
the CFrame property, it may be overwritten by the [camera scripts][1]
which update every frame. There are two options to address this:

2. 

Set the camera [`Camera.CameraType`](https://create.roblox.com/docs/reference/engine/classes/Camera#CameraType) to *'Scriptable'*. When the
camera is *'Scriptable'* the default scripts will not update the
CFrame. This method is simplest and recommended in most cases

2. 

Replace the default camera scripts with an alternative that doesn't
interfere with the developer's desired implementation. This is only
recommended when developers do not need any default camera's
functionality

#### How the Camera CFrame works

Like all `Datatype.CFrame` data, the camera CFrame represents a position
and an orientation.

The most intuitive way to position and orientate the [`Camera`](https://create.roblox.com/docs/reference/engine/classes/Camera) is by
using the *new* CFrame constructor with the *pos* and *lookAt* parameters,
for example:
```lua
local pos = Vector3.new(0, 10, 0)
local lookAt = Vector3.new(10, 0, 0)
local cameraCFrame = CFrame.new(pos, lookAt)
workspace.CurrentCamera.CFrame = cameraCFrame
```

In the above example the [`Camera`](https://create.roblox.com/docs/reference/engine/classes/Camera) is positioned at *Vector3.new(0,
10, 0)* and oriented to be looking towards *Vector3.new(10, 0, 0)*.
#### Animating the Camera CFrame

Although the camera can be placed in the manner demonstrated above, you
may want to animate the Camera to smoothly move from one CFrame to
another. For this, there are a number of options:

2. Creating a [`Tween`](https://create.roblox.com/docs/reference/engine/classes/Tween) using [`TweenService`](https://create.roblox.com/docs/reference/engine/classes/TweenService) that animates the
CFrame property of the camera. See the code sample below for an example
of this
2. Setting the camera CFrame every frame with
[`RunService:BindToRenderStep()`](https://create.roblox.com/docs/reference/engine/classes/RunService#BindToRenderStep) and the *lerp* CFrame method