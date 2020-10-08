The [Camera](https://developer.roblox.com/en-us/api-reference/class/Camera) Focus is a [CFrame](https://developer.roblox.com/en-us/api-reference/datatype/CFrame) that determines the area in 3D space the graphics engine will prioritize.

Certain graphical operations Roblox performs, such as updating lighting, can take a lot of time or computational effort to complete. Focus tells Roblox the area in 3D space to prioritize when performing such operations. For example dynamic lighting from objects such as [PointLights](https://developer.roblox.com/en-us/api-reference/class/PointLight) may not render at distances far from the Focus.

The default Roblox [camera scripts](http://robloxdev.com/articles/Movement-and-camera-controls) automatically set the Focus to follow the [Camera.CameraSubject](https://developer.roblox.com/en-us/api-reference/property/Camera/CameraSubject) (usually a [Humanoid](https://developer.roblox.com/en-us/api-reference/class/Humanoid)). However, Focus will not be automatically updated in the following cases:

*   When the [Camera.CameraType](https://developer.roblox.com/en-us/api-reference/property/Camera/CameraType) is set to _'Scriptable'_
*   When the default [camera scripts](http://robloxdev.com/articles/Movement-and-camera-controls) are not being used

In these cases, you should update Focus every frame, using [RunService:BindToRenderStep](https://developer.roblox.com/en-us/api-reference/function/RunService/BindToRenderStep) function at the _'Camera'_ [RenderPriority](https://developer.roblox.com/en-us/api-reference/enum/RenderPriority).

Focus has no bearing on the positioning or orientation of the [Camera](https://developer.roblox.com/en-us/api-reference/class/Camera) (see `Camera/CFrame|Camera.CFrame` for this).