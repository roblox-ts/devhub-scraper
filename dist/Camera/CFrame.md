This property is the [CFrame](https://developer.roblox.com/en-us/api-reference/datatype/CFrame) of the [Camera](https://developer.roblox.com/en-us/api-reference/class/Camera) and definies its position and orientation in the 3D world.

Some transformations, such as the rotation of the head when using VR devices are not reflected in this property. For this reason, developers should use [Camera:GetRenderCFrame](https://developer.roblox.com/en-us/api-reference/function/Camera/GetRenderCFrame) to obtain the 'true' [CFrame](https://developer.roblox.com/en-us/api-reference/datatype/CFrame) of the camera.

How to set the camera's CFrame
------------------------------

You can move the camera by setting the CFrame property. However, the default [camera scripts](http://robloxdev.com/articles/Movement-and-camera-controls) also set the CFrame property. When manually setting the CFrame property, it may be overwritten by the [camera scripts](http://robloxdev.com/articles/Movement-and-camera-controls) which update every frame. There are two options to address this:

1.  Set the camera [Camera.CameraType](https://developer.roblox.com/en-us/api-reference/property/Camera/CameraType) to _'Scriptable'_. When the camera is _'Scriptable'_ the default scripts will not update the CFrame. This method is simplest and recommended in most cases
    
2.  Replace the default [camera scripts](http://robloxdev.com/articles/Movement-and-camera-controls) with an alternative that doesn't interfere with the developer's desired implementation. This is only recommended when developers do not need any default camera's functionality
    

How the Camera CFrame works
---------------------------

Like all [CFrame](https://developer.roblox.com/en-us/api-reference/datatype/CFrame) data, the camera CFrame represents a position and an orientation.

The most intuitive way to position and orientate the [Camera](https://developer.roblox.com/en-us/api-reference/class/Camera) is by using the _new_ CFrame constructor with the _pos_ and _lookAt_ parameters, for example:

```lua
local pos = Vector3.new(0, 10, 0)
local lookAt = Vector3.new(10, 0, 0)
local cameraCFrame = CFrame.new(pos, lookAt)
workspace.CurrentCamera.CFrame = cameraCFrame
``` 

In the above example the [Camera](https://developer.roblox.com/en-us/api-reference/class/Camera) is positioned at _Vector3.new(0, 10, 0)_ and oriented to be looking towards _Vector3.new(10, 0, 0)_.

Animating the Camera CFrame
---------------------------

Although the camera can be placed in the manner demonstrated above, you may want to animate the Camera to smoothly move from one CFrame to another. For this, there are a number of options:

1.  Creating a [Tween](https://developer.roblox.com/en-us/api-reference/class/Tween) using [TweenService](https://developer.roblox.com/en-us/api-reference/class/TweenService) that animates the CFrame property of the camera. See the code sample below for an example of this
2.  Setting the camera CFrame every frame with [RunService:BindToRenderStep](https://developer.roblox.com/en-us/api-reference/function/RunService/BindToRenderStep) and the _lerp_ CFrame method